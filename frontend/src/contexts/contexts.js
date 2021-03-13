import { createContext } from 'react'
export const ingredientContext = createContext({
  ingredients: [],
  setIngredients: () => { }
})
export const preferenceContext = createContext({
  preferences: { diet: '', cuisine: '', 'sort by': '' },
  setPreferences: () => { }
})
export const recipeContext = createContext({
  recipes: [],
  querySent: false,
  setQuerySent: () => { },
  setRecipes: () => { }
})

export default { ingredientContext, preferenceContext, recipeContext }
