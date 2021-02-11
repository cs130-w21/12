import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Link,
  Paper
} from '@material-ui/core/'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2)
//   },
//   grid: {
//     width: '80%',
//     margin: '0px'
//   }
// }))

const RecipeDetails = () => {
//   const classes = useStyles()

  return (
    <React.Fragment>
      <Link>
        back to recommended recipes
      </Link>

      <Grid containers spacing={2}>
        <Grid item>
          <Paper>
            testtest
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default RecipeDetails
