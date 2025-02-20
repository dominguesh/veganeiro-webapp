# Branch Strategy

## Core Branches

- `main`: Development branch where all feature branches are merged
- `moon` 🌕: Staging environment branch
- `earth` 🌍: Production environment branch

## Branch Workflow

1. All new features and fixes should branch off from `main`
2. Feature branches should follow the naming convention: `feature/feature-name`
3. Bug fix branches should follow the naming convention: `fix/bug-name`
4. Pull requests are made to merge features back into `main`
5. Staging deployments are triggered by merges to `moon`
6. Production deployments are triggered by merges to `earth`

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

The following branches are protected and require pull request reviews:
- `main`
- `moon`
- `earth`

Direct pushes to these branches are prohibited to maintain code quality and stability.
