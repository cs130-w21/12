import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Main.css'
// Material UI Imports
import Chip from '@material-ui/core/Chip'
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
// contexts
import { preferenceContext, ingredientContext, recipeContext } from '../contexts/contexts'
import { API_URL } from '../constants'
/**
 * Alert Component used for User communication
 */
const Alert = (props) => {
  return <MuiAlert style={{ color: 'white' }} elevation={6} variant="filled" {...props} />
}

/**
 * Main page component used by users to enter/modify their ingredients and preference data for requesting recipe recommendation.
 * Main page is created by the root route, /
 * Contexts consumed: ingredientContext, preferenceContext
 * component defined states:
 *  ingredients(array): list of ingredients to be modified by users
 *  ingredientInput(string): a variable to hold the temporary value of a single ingredient string entered by an user
 *  preferences(array): list of preferences to be modified by users
 *  open(bool): determined whether to show alert box
 *  alertMessage(string): the message content of alert
 */
const Main = () => {
  const [ingredientOptions, setIngredientOptions] = useState([])
  const { ingredients, setIngredients } = useContext(ingredientContext)
  const { preferences, setPreferences } = useContext(preferenceContext)
  const { setQuerySent } = useContext(recipeContext)
  const [ingredientInput, setIngredientInput] = useState(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const history = useHistory()

  const handleClick = () => { }
  const handleDelete = (ingredient) => event => {
    setIngredients(ingredients.filter((ing) => ing !== ingredient))
  }

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
    if (val === 'No preference') {
      val = null
    }
    newPreferences[type] = val
    setPreferences(newPreferences)
  }

  const handleSubmit = () => {
    history.push('/search_results')
    setQuerySent(true)
  }
  const handleLuckyClick = () => {
    setLoading(true)
    axios.get(`${API_URL}/recipes`)
      .then((res) => {
        setLoading(false)
        history.push(`/search_result/${res.data.recipe.id}`)
      })
      .catch((error) => {
        console.error(error)
      })
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

            <div className="chip-area my-3">
              {
                ingredients.map(ingredient =>
                  <Chip
                    className="mx-1 my-1 capitalize"
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
          {!loading
            ? (<React.Fragment>
              <RecButton onClick={handleSubmit}>get recommendations</RecButton>
              <RecButton className="ml-md-3" lucky onClick={handleLuckyClick}>I am Feeling Lucky</RecButton>
            </React.Fragment>)
            : <div className="spinner-border"></div>
          }
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
