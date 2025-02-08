#!/bin/bash

# Create root project directory
mkdir -p veganeiro
cd veganeiro

# Create frontend structure
mkdir -p frontend/src/{components,hooks,utils,styles,contexts,services,types,pages,public}
mkdir -p frontend/src/components/{layout,auth,ui,recipes,health,content,shared}
mkdir -p frontend/src/pages/{api,auth,recipes,health,content,dashboard}
mkdir -p frontend/src/styles/{components,pages}
mkdir -p frontend/src/hooks/{api,auth,recipes,health}
mkdir -p frontend/src/contexts/{auth,theme,language}
mkdir -p frontend/src/services/{api,auth,recipes,health}
mkdir -p frontend/src/types/{api,auth,recipes,health}
mkdir -p frontend/public/{images,icons}

# Create backend structure
mkdir -p backend/src/{config,controllers,middleware,models,routes,services,utils,tests}
mkdir -p backend/src/controllers/{auth,recipes,health,content,users}
mkdir -p backend/src/middleware/{auth,validation,error}
mkdir -p backend/src/models/schemas
mkdir -p backend/src/routes/{v1,docs}
mkdir -p backend/src/services/{auth,recipes,health,content,users}
mkdir -p backend/src/tests/{unit,integration,e2e}
mkdir -p backend/prisma/migrations

# Create necessary config files
touch frontend/.env.local
touch frontend/.env.development
touch frontend/.env.production
touch frontend/next.config.js
touch frontend/tailwind.config.js
touch frontend/postcss.config.js
touch frontend/tsconfig.json
touch frontend/package.json
touch frontend/README.md

touch backend/.env
touch backend/.env.development
touch backend/.env.test
touch backend/tsconfig.json
touch backend/package.json
touch backend/README.md
touch backend/prisma/schema.prisma

# Create essential React components
touch frontend/src/components/layout/{Header,Footer,Navigation,Layout}.tsx
touch frontend/src/components/auth/{LoginForm,SignupForm,SocialAuth}.tsx
touch frontend/src/components/shared/{Button,Card,Input,Modal}.tsx

# Create main pages
touch frontend/src/pages/{index,_app,_document}.tsx
touch frontend/src/pages/auth/{login,signup,forgot-password}.tsx
touch frontend/src/pages/dashboard/index.tsx

# Create backend essential files
touch backend/src/config/{database,server,auth}.ts
touch backend/src/middleware/auth/{authentication,authorization}.ts
touch backend/src/routes/v1/{auth,recipes,health,content,users}.ts
touch backend/src/controllers/auth/{login,register,forgot-password}.ts

echo "Project structure created successfully!"
