import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useOktaAuth } from '@okta/okta-react'
import LoginRequireDialog from '../components/LoginRequireDialog'
import PropTypes from 'prop-types'

import ScheduleIcon from '@material-ui/icons/Schedule'
import KitchenIcon from '@material-ui/icons/Kitchen'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleIcon from '@material-ui/icons/People'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CheckIcon from '@material-ui/icons/Check'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import { API_URL } from '../constants'

const useStyles = makeStyles(theme => ({
  root: {
    color: '#eb4917',
    flexGrow: 1
  }
}))

/**
 * RecipeDetails page is used to view the detailed information about a recipe (e.g. detailed instruction, cooking time, serving size, etc)
 * RecipeDetails page can be created by either /my_recipe or /search_result
 * The id of the recipe needs to be concatenated at the end of the route: e.g. /my_recipe/{id} or /search_result/{id}
 * Component defined states:
 *  recipeInfo(object): data object to hold recipe information data
 *  bookmarked(bool): a flag to indicate whether this recipe has been bookmarked by the currently authenticated user
 *  openDialog(bool): a flag that controls the dialog that prompts users to log in
 *  reqConfig(object): HTTP request header to be used for backend endpoint calls
 */
const RecipeDetails = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const [recipeInfo, setRecipeData] = useState({})
  const [bookmarked, setBookmarked] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)
  const { authState, authService } = useOktaAuth()
  const [reqConfig, setReqConfig] = useState(null)
  const pathArray = window.location.pathname.split('/')
  const recipeId = pathArray[pathArray.length - 1]

  useEffect(() => {
    if (authState.isAuthenticated) {
      authService.getUser()
        .then(info => {
          const config = {
            headers: {
              userId: info.sub,
              authorization: `Bearer ${authState.accessToken.accessToken}`
            }
          }
          axios.get(`${API_URL}/user/bookmarks/${recipeId}`, config)
            .then(res => {
              setBookmarked(res.data.bookmark.recipeId !== null)
            })
            .catch(err => console.log(err))
          setReqConfig(config)
        })
    }
    axios.get(`${API_URL}/recipes/${recipeId}`)
      .then((res) => { setRecipeData(res.data.recipeInfo) })
      .catch(err => console.error(err))
  }, [authState])

  const handleBookmarkClick = () => {
    if (authState.isAuthenticated) {
      setOpenDialog(true)
    } else {
      if (bookmarked) {
        axios.delete(`${API_URL}/user/bookmarks/${recipeId}`, reqConfig)
          .then(console.log('delete bookmark success'))
          .catch(err => console.log(err))
      } else {
        axios.post(`${API_URL}/user/bookmarks/${recipeId}`, {}, reqConfig)
          .then(console.log('add bookmark success'))
          .catch(err => console.log(err))
      }
      setBookmarked(!bookmarked)
    }
  }

  const handleBackClick = () => {
    if (props.isMyRecipe) {
      history.push('/my_recipes')
    } else {
      history.push('/search_results')
    }
  }

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10} container direction="column" spacing={4}>
          <Grid item xs={10}></Grid>
          <Grid item xs={10}>
            <Link color='inherit' component='button' onClick={handleBackClick}>
              <ArrowBackIcon /> back to recipes
            </Link>
          </Grid>

          <Grid item container direction="row">
            <Grid item xs={6}>
              <h2 className={classes.root}>
                {recipeInfo.title}
                <IconButton
                  aria-label="add to favorites"
                  className={classes.root}
                  onClick={handleBookmarkClick}
                >
                  {bookmarked && <BookmarkIcon />}
                  {!bookmarked && <BookmarkBorderIcon />}
                </IconButton>
              </h2>
              <p>
                <ScheduleIcon /> Ready in {recipeInfo.preparationTime} mins <PeopleIcon /> Servings: {recipeInfo.servings}
              </p>
              {(recipeInfo.tags && recipeInfo.tags.glutenFree) ? <p> <CheckIcon /> Gluten Free</p> : ''}
              {(recipeInfo.tags && recipeInfo.tags.vegan) ? <p> <CheckIcon /> Vegan</p> : ''}
              {(recipeInfo.tags && recipeInfo.tags.vegetarian) ? <p> <CheckIcon /> Vegetarian</p> : ''}
              {(recipeInfo.tags && recipeInfo.tags.dairyFree) ? <p> <CheckIcon /> Dairy Free</p> : ''}
              {(recipeInfo.tags && recipeInfo.tags.sustainable) ? <p> <CheckIcon /> Sustainable</p> : ''}
            </Grid>
            <Grid item xs={4}>
              <Paper variant="outlined" elevation={5}>
                <img src={recipeInfo.imageUrl} width="100%" height="100%" />
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <h3 className={classes.root}> <KitchenIcon /> Ingredients </h3>
            <Typography>
              {recipeInfo.ingredients &&
                recipeInfo.ingredients.map(r => (
                  <p key={r.id}>{r.unit.us.amount + ' ' + r.unit.us.unitShort + ' ' + r.name}</p>
                ))
              }
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <h3 className={classes.root}> <FastfoodIcon /> Instructions </h3>
            {recipeInfo.analyzedInstructions &&
              recipeInfo.analyzedInstructions.map(r => (
                r.steps.map(j => (
                  <div key={j.id}>
                    <h5>Step {j.number}</h5>
                    <p>{j.step}</p>
                  </div>
                ))
              ))
            }
            {recipeInfo.analyzedInstructions && console.log(recipeInfo.analyzedInstructions.steps)}
            <Link target="_blank" href={recipeInfo.url}>
              Read the detailed instructions
            </Link>
          </Grid>

        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <LoginRequireDialog open={openDialog} setOpen={setOpenDialog} />
    </React.Fragment>
  )
}

RecipeDetails.propTypes = {
  /**
   * isMyRecipe: a bool prop that indicates whether this recipeCollection page is for viewing bookmarked recipes or viewing search results
   */
  isMyRecipe: PropTypes.bool
}

export default RecipeDetails
