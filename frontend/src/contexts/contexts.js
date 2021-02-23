import { createContext } from 'react'
export const ingredientContext = createContext({
  ingredients: [],
  setIngredients: () => { }
})
export const preferenceContext = createContext({
  preferences: { diet: null, cuisine: null, 'sort by': null },
  setPreferences: () => { }
})
export const recipeContext = createContext({
  recipes: [],
  setRecipes: () => { }
})

export default { ingredientContext, preferenceContext, recipeContext }
