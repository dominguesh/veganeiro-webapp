# Branch Strategy

## Core Branches

Our repository follows a simplified three-tier branch strategy:

1. `main` 🔧
   - Primary development branch
   - Single source of truth for development
   - All feature branches merge here
   - Integration point for all new code

2. `moon` 🌕
   - Staging environment branch
   - Pre-production testing
   - Quality assurance and validation
   - Mirror of what will go to production

3. `earth` 🌍
   - Production environment branch
   - Represents live application code
   - Highly stable and tested
   - Deployed to production servers

## Branch Workflow

1. Feature Development:
   - Create feature branch from `main`: `feature/feature-name`
   - Develop and test locally
   - Create pull request to `main`
   - Delete feature branch after merge

2. Staging Process:
   - Merge `main` into `moon`
   - Automated deployment to staging
   - Testing and validation
   - Fix any issues in `main`

3. Production Deployment:
   - Merge `moon` into `earth`
   - Automated deployment to production
   - Monitor for any issues

## Deployment Process

### Staging (Moon)
- Automatic deployments triggered by:
  - Push to `moon` branch
  - Pull requests to `earth` branch
- Manual deployments possible via GitHub Actions workflow_dispatch

### Production (Earth)
- Automatic deployments triggered by:
  - Push to `earth` branch
- Manual deployments possible via GitHub Actions workflow_dispatch

## Branch Cleanup

### Automated Cleanup
A weekly automated cleanup process runs every Sunday at midnight (UTC) via GitHub Actions:
- Identifies merged branches older than 30 days
- Excludes protected branches (`main`, `moon`, `earth`)
- Automatically deletes stale branches
- Provides a report of remaining active branches

### Manual Cleanup
To manually trigger branch cleanup:
1. Go to GitHub Actions
2. Select "Branch Cleanup" workflow
3. Click "Run workflow"

## Best Practices

1. Keep branches short-lived
2. Delete branches after merging
3. Regularly update feature branches with changes from `main`
4. Use meaningful branch names that reflect the work being done
5. Never commit directly to protected branches (`main`, `moon`, `earth`)

## Protected Branches

All three core branches are protected:

1. `main`
   - Requires pull request review
   - No direct pushes
   - Must pass CI checks
   - Keeps development organized

2. `moon`
   - Requires pull request review
   - Only accepts merges from `main`
   - Must pass staging deployment
   - Ensures staging stability

3. `earth`
   - Requires pull request review
   - Only accepts merges from `moon`
   - Must pass production deployment
   - Maintains production reliability

Direct pushes to these branches are prohibited to maintain code quality and stability.
