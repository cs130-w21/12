import './App.css'
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginCallback, SecureRoute } from '@okta/okta-react'
import AppHeader from './components/AppHeader'
import RecipeCollection from './pages/RecipeCollection'
import RecipeDetails from './pages/RecipeDetails'
const Main = lazy(() => import('./pages/Main'))
const Profile = lazy(() => import('./pages/Profile'))

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login/callback" component={LoginCallback} />
          <SecureRoute path="/profile" component={Profile} />
          <SecureRoute path="/my_recipes" component={() => <RecipeCollection isMyRecipe={true} />} />
          <Route path="/search_results" component={() => <RecipeCollection isMyRecipe={false} />} />
          <Route path="/recipe" component={() => <RecipeDetails />} />
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default App
