import React, { useState } from 'react'
import '../styles/Main.css'
// Font Awesome Imports
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Material UI Imports
import Chip from '@material-ui/core/Chip'

const Main = () => {
  const [ingredientInput, SetIngredientInput] = useState('')
  const [ingredients, SetIngredients] = useState(['pork', 'beef'])
  const handleClick = () => { }
  const handleDelete = (ingredient) => event => {
    SetIngredients(ingredients.filter((ing) => ing !== ingredient))
  }
  const handleAddIngredient = () => {
    SetIngredientInput(ingredientInput.toLowerCase())
    if (ingredientInput !== '' && ingredients.indexOf(ingredientInput) === -1) {
      SetIngredients([...ingredients, ingredientInput])
      SetIngredientInput('')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddIngredient()
  }

  return (
    <React.Fragment>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" value={`${ingredientInput}`} onChange={(event) => { SetIngredientInput(event.target.value) }} className="ingredient-input" placeholder="Enter Ingredients..." />
          <button type="button" onClick={handleAddIngredient} className="submit-btn">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </form>

      <div className="chip-area mt-4">
        {
          ingredients.map(ingredient =>
            <Chip
              className="mx-2 my-2 capitalize"
              variant="outlined"
              key={ingredient}
              label={`${ingredient}`}
              onClick={handleClick}
              style={{ border: '1px solid rgba(235, 73, 23, 0.72)' }}
              onDelete={handleDelete(ingredient)}
            />
          )
        }
      </div>
    </React.Fragment>
  )
}

export default Main
