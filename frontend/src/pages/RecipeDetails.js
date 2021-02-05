import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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

const RecipeDetails = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link>
        back to recommended recipes
      </Link>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
      </Grid>
    </div>
  )
}

export default RecipeDetails
