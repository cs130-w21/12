# Cuisine Machine

[![Release](https://img.shields.io/github/v/release/cs130-w21/template?label=release)](https://github.com/cs130-w21/template/releases/latest)

Cuisine Machine is a web application that generates a list of recipes based on a user's ingredients andd dietary preferences. A user will be able to create a profile and bookmark recipes that they enjoy and/or that catch their eye. 

## How to Deploy/Install

### Run online
Go to https://cuisinemachine.herokuapp.com.

### Run locally

Clone the project
```
git clone https://github.com/cs130-w21/12.git
cd 12
```

Deploy the frontend:
```
cd frontend
yarn // install dependencies
yarn start
```
A window running localhost:3000 should open up in your local brower.

Deploy the backend:
```
docker-compose up --build
```
Go to localhost:8080. 

## How CI/CD Works

### frontend

The Github Workflow contains a script (https://github.com/cs130-w21/12/blob/master/.github/workflows/deploy-frontend.yml) such that when any changes are being pushed to the master, it will trigger a automatic deploy.

The deployment works as follows:

1. Login to heroku
```
heroku container:login
```

2. Build a Docker Image using a Dockerfile in the frontend directory
```
docker build -f frontend/Dockerfile -t registry.heroku.com/${{ secrets.HEROKU_FRONTEND_NAME }}/web ./frontend
```

3. Push our Docker Image to the heroku registry
```
docker push registry.heroku.com/${{ secrets.HEROKU_FRONTEND_NAME }}/web:latest
```

4. Release the Docker Image
```
heroku container:release web -a ${{ secrets.HEROKU_FRONTEND_NAME }}
```

### backend

Similar to the frontend, the backend will automatically build, test, and deploy once any changes are pushed to the master. The steps are as follows once something is pushed to the master. 

1. The Github Workflow script https://github.com/cs130-w21/12/blob/master/.github/workflows/backendCI.yml will detect a push on master and create an Ubuntu container that will test the push through running the commands:
```
yarn 
yarn --cwd "backend" test
```
2. Heroku will notice that a push on master has successfully passed all tests and will begin to build. Heroku will start building the backend by inspecting app.json to set our Heroku environment to a container. Then it will automatically build the Dockerfile listed inside of heroku.yml.

3. Once built, the app will be automatically be deployed at our staging app at https://apitest-cuisinemachine.herokuapp.com/ 

4. Once ready, the changes can be manually promoted to our production app at https://cuisinemachine.herokuapp.com via the Heroku dashboard.
