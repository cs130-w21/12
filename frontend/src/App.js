import './App.css'
import React, { Suspense, useState } from 'react'
import AppHeader from './components/AppHeader'
import RouteContextProvider from './contexts/RouteContextProvider'

const App = () => {
  const [ingredients, setIngredients] = useState([])
  const [preferences, setPreferences] = useState({ diet: null, cuisine: null, 'sort by': null })
  const [recipes, setRecipes] = useState([])
  const [querySent, setQuerySent] = useState(false)

  return (
    <React.Fragment>
      <AppHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <RouteContextProvider
          ingredients={ingredients}
          setIngredients={setIngredients}
          preferences={preferences}
          setPreferences={setPreferences}
          recipes={recipes}
          setRecipes={setRecipes}
          querySent={querySent}
          setQuerySent={setQuerySent}
        />
      </Suspense>
    </React.Fragment>
  )
}

export default App
