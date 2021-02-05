import React, { useState, useEffect } from 'react'
import '../styles/Main.css'
// Material UI Imports
import Chip from '@material-ui/core/Chip'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
// data
import { diets, cuisines } from '../data/preferences'
import { RecButton } from '../styles/styles'
import UserInput from '../components/UserInput'
import logo from '../assets/logo.png'
import axios from 'axios'

const Alert = (props) => {
  return <MuiAlert style={{ color: 'white' }} elevation={6} variant="filled" {...props} />
}

const Main = () => {
  const [ingredientOptions, setIngredientOptions] = useState([])
  const [ingredientInput, setIngredientInput] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [preferences, setPreferences] = useState({ diet: null, cuisine: null, 'sort by': null })
  const [open, setOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  // TODO: Find a better way to do this.
  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then((res) => setIngredientOptions(res.data))
      .catch((error) => {
        setIngredientOptions(['Ham', 'Turkey', 'Steak'])
        console.error(error)
      })
  }, [])

  const handleClick = () => {}
  const handleDelete = (ingredient) => event => {
    setIngredients(ingredients.filter((ing) => ing !== ingredient))
  }
  const handleAddIngredient = () => {
    const emptyInput = (ingredientInput === null)
    const duplicateInput = ingredients.includes(ingredientInput)
    if (!emptyInput && !duplicateInput) {
      setIngredients([...ingredients, ingredientInput])
    } else if (duplicateInput) {
      setAlertMessage('Ingredient Already Added!!!')
      setOpen(true)
    }
  }
  const handlePushResult = (e) => {
    e.preventDefault()
    handleAddIngredient()
  }
  const handleChange = (value) => {
    value == null ? setIngredientInput(value) : setIngredientInput(value.toLowerCase())
  }
  const handleClose = (event, reason) => {
    setOpen(false)
  }
  const handlePreferences = (type, val) => {
    const newPreferences = preferences
    newPreferences[type] = val
    setPreferences(newPreferences)
  }
  const handleSubmit = (event) => {
    axios.post('http://localhost:8080/recipes', {
      ingredients: ingredients,
      preferences: preferences
    }).catch((error) => console.error(error))
  }

  return (
    <React.Fragment>
      <div
          className="container-fluid main-wrapper mt-3 mb-3"
      >
        <img src={logo} alt="Logo" width="140" height="140" />
        <div className="main-mid-wrapper">
          <div className="main-sub-wrapper mt-3">
            <form onSubmit={handlePushResult}>
              <p className="main-sect">ingredient list</p>
              <div className="input-group">
                <UserInput options={ingredientOptions} onChange={handleChange} placeholder="Enter Ingredient..." />
                <IconButton type="button" onClick={handleAddIngredient} className="add-btn">
                  <AddIcon />
                </IconButton>
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
            <div className="instruction md-xs-4 mt-md-auto">
              <Checkbox
                color="default"
              />
              include pantry?
            </div>
          </div>
          <div className="main-sub-wrapper mt-3">
            <div>
              <div className="main-sect">preferences</div>
              <div className="main-sub-section">diet</div>
              <UserInput options={diets} onChange={ (e) => handlePreferences('diet', e) } placeholder="search..." />
              <div className="main-sub-section">cuisine</div>
              <UserInput options={cuisines} onChange={ (e) => handlePreferences('cuisine', e) } placeholder="search..." />
              <div className="main-sub-section">sort by</div>
              <UserInput options={['Date', 'Rate', 'Calories']} onChange={ (e) => handlePreferences('sort by', e) } placeholder="search..." />
            </div>
          </div>
        </div>
        <div className="main-btn-wrapper">
          <RecButton onClick={handleSubmit}>get recommendations</RecButton>
          <RecButton className="ml-md-3" lucky>I am Feeling Lucky</RecButton>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          {alertMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}

export default Main
