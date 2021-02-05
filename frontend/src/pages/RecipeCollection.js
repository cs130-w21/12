import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RecipeCard from '../components/RecipeCard'
import PropTypes from 'prop-types'
import {
  Grid,
  Link
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}))

const RecipeCollection = (props) => {
  const classes = useStyles()
  const isMyRecipe = props.isMyRecipe

  return (
    <div className={classes.root}>
      {!isMyRecipe &&
        <Link>
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
        <RecipeCard />

      </Grid>
      {!isMyRecipe &&
        <Link>
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
