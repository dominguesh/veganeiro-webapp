name: Veganeiro Deployment

on:
  push:
    branches:
      - main    # 🌍 Production (Earth)
      - staging # 🌕 Pre-production (Moon)
  pull_request:
    branches:
      - main
      - staging
      - develop # 🔴 Development (Mars)

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'yarn'
          
      - name: Install Dependencies
        run: |
          cd frontend
          yarn install
          cd ../backend
          yarn install
          
      - name: Run Tests
        run: |
          cd frontend
          yarn test
          cd ../backend
          yarn test

  deploy-staging:
    needs: build-and-test
    if: github.ref == 'refs/heads/staging'
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Staging
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USERNAME }}
          key: ${{ secrets.STAGING_SSH_KEY }}
          script: |
            cd /path/to/staging
            git pull
            yarn install
            yarn build
            pm2 reload all

  deploy-production:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Production
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.PRODUCTION_HOST }}
          username: ${{ secrets.PRODUCTION_USERNAME }}
          key: ${{ secrets.PRODUCTION_SSH_KEY }}
          script: |
            cd /path/to/production
            git pull
            yarn install
            yarn build
            pm2 reload all