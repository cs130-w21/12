import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RecipeCard from '../components/RecipeCard'
import PropTypes from 'prop-types'
import { recipeContext } from '../contexts/contexts'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  Link
} from '@material-ui/core/'
import { useOktaAuth } from '@okta/okta-react'
// import { recipes } from '../data/recipes'

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
  const { recipes } = useContext(recipeContext)
  const [bookmarkedRecipeIds, setBookmarkedRecipeIds] = useState([])
  const history = useHistory()
  const { authState, authService } = useOktaAuth()
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null)
    } else {
      authService.getUser().then(info => {
        setUserInfo(info)
      })
    }
  }, [authState, authService])

  const handleClickMain = () => {
    history.push('/')
  }

  const handleBookmarkClick = (recipeId) => {
    const userId = userInfo.sub
    if (bookmarkedRecipeIds.includes(recipeId)) {
      setBookmarkedRecipeIds(bookmarkedRecipeIds.filter(r => r.id !== recipeId))
    } else {
      setBookmarkedRecipeIds([...bookmarkedRecipeIds, recipeId])
    }// call backend API to call POST bookmark
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
            <RecipeCard recipe={r} isBookmarked={bookmarkedRecipeIds.includes(r.id)} handleBookmarkClick={handleBookmarkClick} />
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
