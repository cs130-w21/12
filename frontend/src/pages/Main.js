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
import UserInput from '../components/UserInput'
import logo from '../assets/logo.png'
import axios from 'axios'

const Alert = (props) => {
  return <MuiAlert style={{ color: 'white' }} elevation={6} variant="filled" {...props} />
}

const Main = () => {
  const InputStyles = {
    borderRadius: '5px',
    border: '1px solid rgba(235, 73, 23, 0.72)',
    padding: '12px 50px 12px 15px',
    width: '30vw',
    minWidth: '150px',
    display: 'block'
  }
  const [ingredientOptions, setIngredientOptions] = useState([])
  const [ingredientInput, setIngredientInput] = useState()
  const [ingredients, setIngredients] = useState([])
  const [preferences, setPreferences] = useState({ diet: null, cuisine: null, 'sort by': null })
  const [open, setOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then((res) => setIngredientOptions(res.data))
  }, [])

  const handleClick = () => { }
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
          className="container-fluid"
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}
      >
        <img src={logo} alt="Logo" width="140" height="140" />
        <div className="main-wrapper">
          <div className="left-wrapper mt-3">
            <form onSubmit={handlePushResult}>
              <p className="section">ingredient list</p>
              <div className="input-group">
                <UserInput styles={InputStyles} options={ingredientOptions} onChange={handleChange} placeholder="Enter Ingredient..." />
                <IconButton type="button" onClick={handleAddIngredient} className="submit-btn">
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
            <div className="instruction mt-auto">
              <Checkbox
                color="default"
              />
              include pantry?</div>
            </div>
          <div className="right-wrapper mt-3">
            <div>
              <div className="section">preferences</div>
              <div className="sub-section">diet</div>
              <UserInput styles={InputStyles} options={diets} onChange={ (e) => handlePreferences('diet', e) } placeholder="search..." />
              <div className="sub-section">cuisine</div>
              <UserInput styles={InputStyles} options={cuisines} onChange={ (e) => handlePreferences('cuisine', e) } placeholder="search..." />
              <div className="sub-section">sort by</div>
              <UserInput styles={InputStyles} options={['Date', 'Rate', 'Calories']} onChange={ (e) => handlePreferences('sort by', e) } placeholder="search..." />
            </div>
          </div>
        </div>
        <div>
          <button className="getrec" onClick={handleSubmit}>get recommendations</button>
          <button className="lucky-btn ml-3">I am Feeling Lucky</button>
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
