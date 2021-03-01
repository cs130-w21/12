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

const RecipeCollection = (props) => {
  const classes = useStyles()
  const isMyRecipe = props.isMyRecipe
  const { recipes, setRecipes } = useContext(recipeContext)
  const [bookmarkedRecipeIds, setBookmarkedRecipeIds] = useState([])
  const history = useHistory()
  const { authState, authService } = useOktaAuth()
  const [reqConfig, setReqConfig] = useState(null)
  const { ingredients } = useContext(ingredientContext)
  const { preferences } = useContext(preferenceContext)

  useEffect(() => {
    if (authState.isAuthenticated) {
      authService.getUser()
        .then(info => {
          setReqConfig({
            headers: {
              userId: info.sub,
              authorization: `Bearer ${authState.accessToken.accessToken}`
            }
          })
          if (isMyRecipe) {
            axios.get(`${API_URL}/user/bookmarks/`, reqConfig)
              .then((res) => {
                const { bookmarks } = res.data
                setBookmarkedRecipeIds(bookmarks.map(b => b.id))
                setRecipes(bookmarks)
              })
              .catch(err => console.log(err))
          }
        })
    }
    if (!isMyRecipe) {
      axios.post(`${API_URL}/recipes`, {
        ingredients: ingredients,
        preferences: preferences
      }).then(res => {
        setRecipes(res.data.recipes)
      }).catch((error) => console.error(error))
    }
  }, [authState, authService])

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

  const handleGetMoreRecipes = () => {
    // TODO: Clicking on this should handle getting more recipes
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
      {!isMyRecipe &&
        <Link color='inherit' component='button' onClick={handleGetMoreRecipes}>
          more recipes
        </Link>
      }
    </div>
  )
}

RecipeCollection.propTypes = {
  isMyRecipe: PropTypes.bool,
  location: PropTypes.object
}

export default RecipeCollection
