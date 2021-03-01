# src/App.js

The entrypoint of this app
The context providers for ingredients, preferences, recipes are set up here, so that children components of App component can consume the contexts at any level.

## No props
# src/components/RecipeCard.js

RecipeCard Component is used to show a simplified information of recipe, including the image of the recipe.
RecipeCard component is used inside /pages/recipeCollections page
Component defined states:
 openDialog(bool): the flag to control whether the dialog is open


## Props
| Name                | Type   | Default | Required | Description |
| ------------------- | ------ | ------- | -------- | ----------- |
| recipe              | object |         | false    |             |
| isBookmarked        | bool   | false   | false    |             |
| handleBookmarkClick | func   |         | false    |             |
| isMyRecipe          | bool   | false   | false    |             |
# src/components/UserInput.js

User Input component is used to modify the ingredients.
User Input supports autocomplete feature.
Used inside /pages/Main


## Props
| Name        | Type   | Default | Required | Description |
| ----------- | ------ | ------- | -------- | ----------- |
| styles      | object |         | false    |             |
| options     | array  |         | false    |             |
| placeholder | string |         | false    |             |
| onChange    | func   |         | false    |             |
# src/pages/Main.js

Main page component used by users to enter/modify their ingredients and preference data for requesting recipe recommendation.
Main page is created by the root route, /
Contexts consumed: ingredientContext, preferenceContext
component defined states:
 ingredients(array): list of ingredients to be modified by users
 ingredientInput(string): a variable to hold the temporary value of a single ingredient string entered by an user
 preferences(array): list of preferences to be modified by users
 open(bool): determined whether to show alert box
 alertMessage(string): the message content of alert

## No props
# src/pages/Profile.js

Profile page is used for viewing the authenticated user data.
Profile is created by the route /profile
Component defined states:
 userInfo: an object that holds user information data

## No props
# src/pages/RecipeCollection.js

RecipeCollection page is used for showing multiple recipe cards for search results and bookmarked recipe.
RecipeCollection page is created with Route /my_recipe, /search_results
useEffect fetches required data to create recipe cards and bookmark information
Contexts consumed: recipeContext, ingredientContext, preferenceContext
component defined states:
 bookmarkedRecipeIds(array): array of bookmarked recipe Ids
 reqConfig(object): HTTP request header to be used for backend endpoint calls


## Props
| Name       | Type | Default | Required | Description                                                                                                                           |
| ---------- | ---- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| isMyRecipe | bool | false   | false    | isMyRecipe: a bool prop that indicates whether this recipeCollection page is for viewing bookmarked recipes or viewing search results |
# src/pages/RecipeDetails.js

RecipeDetails page is used to view the detailed information about a recipe (e.g. detailed instruction, cooking time, serving size, etc)
RecipeDetails page can be created by either /my_recipe or /search_result
The id of the recipe needs to be concatenated at the end of the route: e.g. /my_recipe/{id} or /search_result/{id}
Component defined states:
 recipeInfo(object): data object to hold recipe information data
 bookmarked(bool): a flag to indicate whether this recipe has been bookmarked by the currently authenticated user
 openDialog(bool): a flag that controls the dialog that prompts users to log in
 reqConfig(object): HTTP request header to be used for backend endpoint calls


## Props
| Name       | Type | Default | Required | Description                                                                                                                           |
| ---------- | ---- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| isMyRecipe | bool | false   | false    | isMyRecipe: a bool prop that indicates whether this recipeCollection page is for viewing bookmarked recipes or viewing search results |
# src/routes.js

This component is a wrapper or multiple routes

## No props# src/components/LoginRequireDialog.js

LoginRequireDialog is used to prompt users to log in when they are in unauthenticated state and attempt to access parts of the app that requires authentication.
LoginRequireDialog is used by RecipeCard component and RecipeCollection page, and becomes visible when unauthenticated users attempt to bookmark a recipe


## Props
| Name    | Type | Default | Required | Description |
| ------- | ---- | ------- | -------- | ----------- |
| open    | bool | false   | false    |             |
| setOpen | func |         | false    |             |
# src/components/LoginButton.js

Login Buttom component is at the right top corner, inside the AppHeader component
LoginButton is used for logging in and out, as well as navigating to the user profile page
Component defined states:
 authenticated(bool): true if and only if the current session is authenticated
 user(object): a variable to hold user information object data
 menuAnchorEl(bool): a variable to control to show the menu Anchor


## Props
| Name        | Type   | Default | Required | Description                                                                                          |
| ----------- | ------ | ------- | -------- | ---------------------------------------------------------------------------------------------------- |
| authState   | object |         | false    | authState(object) represents current authentication state                                            |
| authService | object |         | false    | authService(object) provides multiple functions that are required for authentication service to work |
| history     | object |         | false    | history(object) used to manipulate the window location                                               |
# src/components/AppHeader.js

AppHeader component defines the styles and logic for the header portion of this app.
AppHeader component is viewable in all routes.
Includes the links to navigate to the mainpage, to the sign/in log in page, and to the my bookmarked recipes page

## No props