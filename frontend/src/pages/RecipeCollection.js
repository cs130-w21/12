import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RecipeCard from '../components/RecipeCard'
import PropTypes from 'prop-types'
import { recipeContext } from '../contexts/contexts'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  Link
} from '@material-ui/core/'

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
  const history = useHistory()

  const handleClickMain = () => {
    history.push('/')
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
        alignItems="flex-start"
      >
        {recipes.map(r => (
          <Grid item xs={12} sm={6} md={3} key={r.id}>
            <RecipeCard recipe={r} />
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
  isMyRecipe: PropTypes.bool
}

export default RecipeCollection
