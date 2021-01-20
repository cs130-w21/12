import './App.css'
import React, { useState } from 'react'
import logo from './assets/logo.png'
// Font Awesome Imports
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Material UI Imports
import Chip from '@material-ui/core/Chip'

function App () {
  const [ingredientInput, SetIngredientInput] = useState('')
  const [ingredients, SetIngredients] = useState(['Pork', 'Beef'])
  const handleClick = () => { }
  const handleDelete = (ingredient) => event => {
    SetIngredients(ingredients.filter((ing) => ing !== ingredient))
  }
  return (
    <div className="container-fluid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={logo} alt="Logo" width="169px" height="169px" />
      <form className="mt-3" >
        <div className="input-group">
          <input value={`${ingredientInput}`} onChange={(event) => { SetIngredientInput(event.target.value) }} className="ingredient-input" placeholder="Enter Ingredients..." />
          <button type="button" onClick={() => {
            SetIngredients([...ingredients, ingredientInput])
            SetIngredientInput('')
          }} className="submit-btn">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </form>

      <div className="chip-area mt-4">
        {
          ingredients.map(ingredient =>
            <Chip
              className="mx-2 my-2"
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

    </div>
  )
}

export default App
