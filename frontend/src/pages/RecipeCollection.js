import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

import RecipeCard from '../components/RecipeCard'
import { preferenceContext, ingredientContext, recipeContext } from '../contexts/contexts'
import { API_URL } from '../constants'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Link } from '@material-ui/core/'
import { useOktaAuth } from '@okta/okta-react'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    color: 'rgba(235, 73, 23, 0.72)'
  }
}))

/**
 * RecipeCollection page is used for showing multiple recipe cards for search results and bookmarked recipe.
 * RecipeCollection page is created with Route /my_recipe, /search_results
 * useEffect fetches required data to create recipe cards and bookmark information
 * Contexts consumed: recipeContext, ingredientContext, preferenceContext
 * component defined states:
 *  bookmarkedRecipeIds(array): array of bookmarked recipe Ids
 *  reqConfig(object): HTTP request header to be used for backend endpoint calls
 */
const RecipeCollection = (props) => {
  const classes = useStyles()
  const isMyRecipe = props.isMyRecipe
  const { recipes, setRecipes, querySent, setQuerySent } = useContext(recipeContext)
  const [bookmarkedRecipeIds, setBookmarkedRecipeIds] = useState([])
  const history = useHistory()
  const { authState, authService } = useOktaAuth()
  const [reqConfig, setReqConfig] = useState(null)
  const { ingredients } = useContext(ingredientContext)
  const { preferences } = useContext(preferenceContext)

  useEffect(() => {
    /**
     * if the current session is authenticated and this is for viewing bookmarked recipes, we fetch bookmarks from backend
     */
    console.log(recipes)
    console.log(ingredients)
    if (authState.isAuthenticated) {
      authService.getUser()
        .then(info => {
          setReqConfig({
            headers: {
              userId: info.sub,
              authorization: `Bearer ${authState.accessToken}`
            }
          })
          if (isMyRecipe && reqConfig !== null) {
            axios.get(`${API_URL}/user/bookmarks/`, reqConfig)
              .then((res) => {
                const { bookmarks } = res.data
                setBookmarkedRecipeIds(bookmarks.map(b => b.id))
                setRecipes(bookmarks)
              })
              .catch(err => console.error(err))
          }
        })
    }
    if (!isMyRecipe && querySent) {
      console.log(preferences)
      axios.post(`${API_URL}/recipes`, {
        ingredients: ingredients,
        diet: preferences.diet,
        cuisine: preferences.cuisine,
        'sort by': preferences['sort by']
      }).then(res => {
        setRecipes(res.data.recipes)
        setQuerySent(false)
      }).catch(error => console.error(error))
    }
  }, [authService, authState])

  const handleClickMain = () => {
    history.push('/')
  }

  const handleBookmarkClick = (recipeId) => {
    if (bookmarkedRecipeIds.includes(recipeId)) {
      setBookmarkedRecipeIds(bookmarkedRecipeIds.filter(rid => rid !== recipeId))
      axios.delete(`${API_URL}/user/bookmarks/${recipeId}`, reqConfig)
        .then(console.log('delete bookmark success'))
        .catch(err => console.log(err))
    } else {
      setBookmarkedRecipeIds([...bookmarkedRecipeIds, recipeId])
      axios.post(`${API_URL}/user/bookmarks/${recipeId}`, reqConfig)
        .then(console.log('add bookmark success'))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className={classes.root}>
      {!isMyRecipe &&
        <Link color='inherit' component='button' onClick={handleClickMain}>
          back to ingredient list
        </Link>
      }
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        {recipes.map(r => (
          <Grid item xs={12} sm={6} md={3} key={r.id}>
            <RecipeCard
              isMyRecipe={isMyRecipe}
              recipe={r}
              isBookmarked={bookmarkedRecipeIds.includes(r.id)}
              handleBookmarkClick={handleBookmarkClick}
            />
          </Grid>
        ))
        }
      </Grid>
    </div>
  )
}

RecipeCollection.propTypes = {
  /**
   * isMyRecipe: a bool prop that indicates whether this recipeCollection page is for viewing bookmarked recipes or viewing search results
   */
  isMyRecipe: PropTypes.bool
}

export default RecipeCollection
