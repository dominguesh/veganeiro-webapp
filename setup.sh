#!/bin/bash

# Exit on any error
set -e

# Function to handle errors
handle_error() {
    local line_number=$1
    local error_code=$2
    echo "Error occurred in line $line_number with exit code $error_code"
    case $error_code in
        1) echo "General error occurred" ;;
        126) echo "Command invoked cannot execute (permission problem or not executable)" ;;
        127) echo "Command not found" ;;
        128) echo "Invalid argument to exit" ;;
        *) echo "Unknown error occurred" ;;
    esac
}

# Set up error handling
trap 'handle_error ${LINENO} $?' ERR

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check system requirements
check_system_requirements() {
    echo "Checking system requirements..."
    
    # Check disk space
    available_space=$(df -h . | awk 'NR==2 {print $4}' | sed 's/G//')
    if (( $(echo "$available_space < 10" | bc -l) )); then
        echo "Warning: Less than 10GB of disk space available"
        read -p "Continue anyway? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi

    # Check memory
    total_memory=$(free -g | awk '/^Mem:/{print $2}')
    if [ "$total_memory" -lt 4 ]; then
        echo "Warning: Less than 4GB of RAM available"
        read -p "Continue anyway? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi

    # Check internet connection
    if ! ping -c 1 google.com >/dev/null 2>&1; then
        echo "Error: No internet connection"
        exit 1
    fi
}

# Function to check and install dependencies
check_and_install_dependency() {
    local package_name=$1
    local install_command=$2
    
    echo "Checking for $package_name..."
    if ! command_exists $package_name; then
        echo "Installing $package_name..."
        eval $install_command || {
            echo "Failed to install $package_name"
            exit 1
        }
    else
        echo "$package_name is already installed"
    fi
}

# Function to verify npm package installation
verify_npm_package() {
    local package_name=$1
    if ! npm list $package_name >/dev/null 2>&1; then
        echo "Error: Failed to install $package_name"
        exit 1
    fi
}

# Function to check Node.js version
check_node_version() {
    local required_version="16.0.0"
    local current_version=$(node -v | cut -d 'v' -f 2)
    
    if [ "$(printf '%s\n' "$required_version" "$current_version" | sort -V | head -n1)" != "$required_version" ]; then
        echo "Error: Node.js version must be $required_version or higher"
        echo "Current version: $current_version"
        exit 1
    fi
}

# Function to create backup of existing project
create_backup() {
    if [ -d "veganeiro" ]; then
        echo "Existing project found. Creating backup..."
        backup_dir="veganeiro_backup_$(date +%Y%m%d_%H%M%S)"
        mv veganeiro $backup_dir
        echo "Backup created at $backup_dir"
    fi
}

# Function to verify project structure
verify_project_structure() {
    local directory=$1
    local required_files=("package.json" "tsconfig.json")
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$directory/$file" ]; then
            echo "Error: Required file $file not found in $directory"
            exit 1
        fi
    done
}

# Main installation process
main() {
    # Print start time
    echo "Installation started at $(date)"
    
    # Check system requirements
    check_system_requirements
    
    # Create backup of existing project
    create_backup
    
    # Install system dependencies
    check_and_install_dependency "curl" "sudo apt-get update && sudo apt-get install -y curl"
    check_and_install_dependency "git" "sudo apt-get update && sudo apt-get install -y git"
    
    # Install Node.js if not present
    if ! command_exists node; then
        echo "Installing Node.js..."
        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
    fi
    
    # Verify Node.js version
    check_node_version
    
    # Install Yarn
    if ! command_exists yarn; then
        echo "Installing Yarn..."
        sudo npm install -g yarn
        verify_npm_package "yarn"
    fi
    
    # Create project directory
    mkdir -p veganeiro
    cd veganeiro || exit 1
    
    # Frontend setup
    echo "Setting up frontend..."
    npx create-next-app@latest frontend --typescript --tailwind --eslint --app --src-dir --use-yarn
    
    cd frontend || exit 1
    
    # Install frontend dependencies with progress bar
    echo "Installing frontend dependencies..."
    yarn add @headlessui/react @heroicons/react @tanstack/react-query zustand axios date-fns react-hook-form yup @clerk/nextjs framer-motion recharts
    
    # Install development dependencies
    yarn add -D @types/node @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
    
    # Verify frontend structure
    verify_project_structure "."
    
    cd ..
    
    # Backend setup
    echo "Setting up backend..."
    mkdir -p backend
    cd backend || exit 1
    
    # Initialize Node.js project
    yarn init -y
    
    # Install backend dependencies
    echo "Installing backend dependencies..."
    yarn add express @prisma/client cors dotenv helmet jsonwebtoken bcryptjs winston express-validator express-rate-limit
    
    # Install backend development dependencies
    yarn add -D typescript @types/node @types/express @types/cors @types/jsonwebtoken @types/bcryptjs ts-node nodemon prisma jest @types/jest ts-jest supertest @types/supertest
    
    # Initialize TypeScript and Prisma
    npx tsc --init
    npx prisma init
    
    # Verify backend structure
    verify_project_structure "."
    
    cd ..
    
    # Create README
    cat > README.md << EOL
# Veganeiro Project

## Prerequisites
- Node.js (v16 or higher)
- Yarn
- Git

## Getting Started

### Frontend Development
\`\`\`bash
cd frontend
yarn dev
\`\`\`

### Backend Development
\`\`\`bash
cd backend
yarn dev
\`\`\`

## Project Structure
- \`/frontend\` - Next.js frontend application
- \`/backend\` - Express.js backend application

## Available Scripts
See package.json in respective directories for available commands.

## Backup Information
If a previous installation existed, it was backed up before this installation.
Check for directories named veganeiro_backup_* for the backup.
EOL
    
    # Print completion time and next steps
    echo "Installation completed at $(date)"
    echo "
Next steps:
1. cd frontend && yarn dev     (to start frontend development server)
2. cd backend && yarn dev      (to start backend development server)

Frontend will be available at: http://localhost:3000
Backend will be available at: http://localhost:4000

For more information, check the README.md file.
"
}

# Run the main installation
main "$@" 2>&1 | tee installation.log