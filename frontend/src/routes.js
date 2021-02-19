import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginCallback, SecureRoute } from '@okta/okta-react'
import RecipeCollection from './pages/RecipeCollection'
const Main = lazy(() => import('./pages/Main'))
const Profile = lazy(() => import('./pages/Profile'))

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/login/callback" component={LoginCallback} />
    <SecureRoute path="/profile" component={Profile} />
    <SecureRoute path="/my_recipes" component={() => <RecipeCollection isMyRecipe={true} />} />
    <Route path="/search_results" component={() => <RecipeCollection isMyRecipe={false} />} />
  </Switch>
)

export default Routes
