import Routes from '../routes'
import { withContextProvider } from 'react-with-multiple-contexts'
import { ingredientContext, preferenceContext, recipeContext } from './contexts'

const RouteContextProvider = withContextProvider(Routes, (props) => ([
  { context: ingredientContext, value: { ingredients: props.ingredients, setIngredients: props.setIngredients } },
  { context: preferenceContext, value: { preferences: props.preferences, setPreferences: props.setPreferences } },
  { context: recipeContext, value: { recipes: props.recipes, setRecipes: props.setRecipes } }
]))

export default RouteContextProvider
