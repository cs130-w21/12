# Cuisine Machine

[![Build Status](https://travis-ci.org/cs130-w21/template.svg?branch=master)](https://travis-ci.org/cs130-w21/template)
[![Release](https://img.shields.io/github/v/release/cs130-w21/template?label=release)](https://github.com/cs130-w21/template/releases/latest)

Cuisine Machine is a web application that generates a list of recipes based on a user's ingredients andd dietary preferences. A user will be able to create a profile and bookmark recipes that they enjoy and/or that catch their eye. 

## The User Experience

### Home

![Alt text](/readme-imgs/homepage.png?raw=true)

At the homepage, the user will enter their ingredents and specify their dietary preferences. 

On the left side of the page, there is a search box where the user will enter their ingredients. The user will type in an ingredient and select it from the autocomplete menu either clicking the plus button or pressing the enter button on their keyboard. The ingredient will then show up under the search bar as a part of the user's ingredient list. The user can remnove the ingredient by clicking the x next to the ingredient name. The 'include pantry?' option allows the user to include common ingredients (e.g., flour, sugar, salt) without typing them all out individually.  

To specify their dietary preferences, the user will move on to the right side of the page. The user will be able to specify their desired diet and cuisine, as well as how the recipe list will be sorted. Similar to how the ingredent search bar autocompleted the user's input, the diet, cuisine, and sort by search bars do the same. The user can scroll through all of the options or type in a few letters to get to their desired option.

Finally, the user will click on the 'get recommendations' button which will bring them to a page with a list of generated recipes based on the user's ingredent and dietary information.

The user can also click on the 'i am feeling lucky' button to get a random recipe.

There is a login/sign up button in the top right corner of the page that the user can click on to log into or create an account. It will bring them to a page hosted by Okta. From this page, the user can either create a new profile or log into an existng account. The user can also resolve any login issues by clicking on the 'Need help signing in?' button.

### Generate Recipes

Upon clicking the 'generate receipes' button, the user will be brought to a page with a list of generated recipes based on the user's ingredent and dietary information. 

From here, the user can click on a recipe card to view the recipe's information and instructions. The user can also click 'go back to ingredient list' to modify their ingredient list and dietary preferences. Or, the user can click on 'more recipes' to view more recipes that use their ingredients and abide by their dietary preferences.

### Recipe Details

After the user selects a recipe from their list of generated recipes, they will be directed to another page that contains the detailed information of the recipe. The user can see specific measuremens and instructions of the recipe, as well as go to the original website where the recipe actually resides. 

### User Profile

After logging in, the user will see an avatar in the top right corner of the page (instead of the 'login/signup' button). The user can click on this button to view their profile or logout of their profile. 

On the profile page, the user will see their name, phone number, and email, all of which the user will be able to change by clicking on their corresponding 'change' buttons. 

### Bookmarked Recipes

A user who has logged into an account will be able to bookmark recipes by clicking on the bookmark icon on the recipe card in the list of generated recipes or the bookmark icon on the recipe details page. The user will be able to access their bookmarked recipes by clicking on the 'my recipes' button next to the avatar in the top right corner of the page. 

## How to Deploy/Install

### Run online
Go to https://cuisine-machine-frontend.herokuapp.com/.

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
