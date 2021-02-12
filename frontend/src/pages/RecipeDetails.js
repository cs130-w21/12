import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule'
import KitchenIcon from '@material-ui/icons/Kitchen'
import FastfoodIcon from '@material-ui/icons/Fastfood'
// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  grid: {
    width: '70%',
    margin: '10px'
  }
}))

const RecipeDetails = () => {
  const classes = useStyles()

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h3>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h3>
            <p><ScheduleIcon/> ready in 45 mins</p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src="https://spoonacular.com/recipeImages/716429-556x370.jpg"/>
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Link>
        back to recommended recipes
      </Link>

      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>

        <Grid container item spacing={3} xs={10}>
          <h4><KitchenIcon/> Ingredients</h4>
          <p> Ingredients Ingredients Ingredients
          Ingredients Ingredients Ingredients
          Ingredients Ingredients Ingredients
          Ingredients Ingredients Ingredients
          </p>
        </Grid>

        <Grid container item spacing={3} xs={10}>
          <h4><FastfoodIcon/>Instructions</h4>
          <p> InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          InstructionsInstructions InstructionsInstructionsInstructions Instructions Instructions
          </p>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default RecipeDetails
