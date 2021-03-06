# Cuisine Machine

[![Build Status](https://travis-ci.org/cs130-w21/template.svg?branch=master)](https://travis-ci.org/cs130-w21/template)
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
