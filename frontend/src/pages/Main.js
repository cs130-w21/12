import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
import { API_URL } from '../constants'
// contexts
import { preferenceContext, ingredientContext, recipeContext } from '../contexts/contexts'

const Alert = (props) => {
  return <MuiAlert style={{ color: 'white' }} elevation={6} variant="filled" {...props} />
}

const Main = () => {
  const [ingredientOptions, setIngredientOptions] = useState([])
  const { ingredients, setIngredients } = useContext(ingredientContext)
  const { preferences, setPreferences } = useContext(preferenceContext)
  const { setRecipes } = useContext(recipeContext)
  const [ingredientInput, setIngredientInput] = useState(null)
  const [open, setOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const history = useHistory()

  const handleClick = () => { }
  const handleDelete = (ingredient) => event => {
    setIngredients(ingredients.filter((ing) => ing !== ingredient))
  }

  // TODO: we don't support ingredient options to be delivered from our backend, change this
  useEffect(() => {
    axios.get('https://api-cuisinemachine.herokuapp.com/')
      .then((res) => setIngredientOptions(res.data))
      .catch((error) => {
        // Dummy Data for Fallback
        setIngredientOptions(['onion', 'garlic', 'ham', 'hot dog', 'turkey', 'steak'])
        console.error(error)
      })
  }, [])

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
  const handleSubmit = () => {
    axios.post(`${API_URL}/recipes`, {
      ingredients: ingredients,
      preferences: preferences
    }).then(res => {
      console.log(res)
      setRecipes(res.data.recipes)
    })
      .catch((error) => console.error(error))
    history.push('/search_results')
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
              <UserInput options={diets} onChange={(e) => handlePreferences('diet', e)} placeholder="search..." />
              <div className="main-sub-section">cuisine</div>
              <UserInput options={cuisines} onChange={(e) => handlePreferences('cuisine', e)} placeholder="search..." />
              <div className="main-sub-section">sort by</div>
              <UserInput options={['Date', 'Rate', 'Calories']} onChange={(e) => handlePreferences('sort by', e)} placeholder="search..." />
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
