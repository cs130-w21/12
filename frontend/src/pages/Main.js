import React, { useState } from 'react'
import '../styles/Main.css'
// Font Awesome Imports
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Material UI Imports
import Chip from '@material-ui/core/Chip'
import Checkbox from '@material-ui/core/Checkbox'
import UserInput from '../components/UserInput'

const Main = () => {
  const InputStyles = {
    borderRadius: '5px',
    border: '1px solid rgba(235, 73, 23, 0.72)',
    padding: '12px 50px 12px 15px',
    width: '30vw',
    minWidth: '150px',
    display: 'block',
  }
  const [ingredientInput, SetIngredientInput] = useState('')
  const [ingredients, SetIngredients] = useState(['pork', 'beef'])
  const handleClick = () => { }
  const handleDelete = (ingredient) => event => {
    SetIngredients(ingredients.filter((ing) => ing !== ingredient))
  }
  const handleAddIngredient = () => {
    if (ingredientInput !== '' && ingredients.indexOf(ingredientInput) === -1) {
      SetIngredients([...ingredients, ingredientInput])
      SetIngredientInput('')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddIngredient()
  }
  const handleChange = (value) => {
    if (value != null) {
      SetIngredientInput(value.toLowerCase())
    }
  }

  return (
    <React.Fragment>

      <div className="main-wrapper">
        <div className="left-wrapper mt-3">
          <form onSubmit={handleSubmit}>
            <p className="section">ingredient list</p>
            <div className="input-group">
              <UserInput styles={InputStyles} options={['Pork', 'Chicken', 'Beef']} onChange={handleChange} placeholder="Enter Ingredient..." />
              <button type="button" onClick={handleAddIngredient} className="submit-btn">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </div>
          </form>

          <div className="chip-area">
            {
              ingredients.map(ingredient =>
                <Chip
                  className="mr-2 my-2 capitalize"
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
          <div className="instruction mt-auto">
            <Checkbox
              color="default"
            />
            include pantry items in list</div>
          </div>
        <div className="right-wrapper mt-3">
          <div>
            <div className="section">preferences</div>
            <div className="sub-section">diet</div>
            <UserInput styles={InputStyles} options={['Vegan', 'Vegetarian', 'Super Meat Eater']} onChange={(e) => console.log(e)} placeholder="search..." />
            <div className="sub-section">cuisine</div>
            <UserInput styles={InputStyles} options={['Asian', 'Italian', 'American']} onChange={(e) => console.log(e)} placeholder="search..." />
            <div className="sub-section">sort by</div>
            <UserInput styles={InputStyles} options={['Date', 'Rate', 'Calories']} onChange={(e) => console.log(e)} placeholder="search..." />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Main
