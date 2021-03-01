import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginCallback, SecureRoute } from '@okta/okta-react'
import RecipeCollection from './pages/RecipeCollection'
import RecipeDetails from './pages/RecipeDetails'
const Main = lazy(() => import('./pages/Main'))
const Profile = lazy(() => import('./pages/Profile'))

/**
 * This component is a wrapper or multiple routes
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/login/callback" component={LoginCallback} />
    <SecureRoute path="/profile" component={Profile} />
    <SecureRoute path="/my_recipes" component={() => <RecipeCollection isMyRecipe={true} />} />
    <Route path="/search_results" component={() => <RecipeCollection isMyRecipe={false} />} />
    <Route path="/my_recipe" component={() => <RecipeDetails isMyRecipe={true} />} />
    <Route path="/search_result" component={() => <RecipeDetails isMyRecipe={false} />} />
  </Switch>
)

export default Routes
