import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy'
import ScheduleIcon from '@material-ui/icons/Schedule'
import KitchenIcon from '@material-ui/icons/Kitchen'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleIcon from '@material-ui/icons/People'
// import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CheckIcon from '@material-ui/icons/Check'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    color: '#eb4917',
    flexGrow: 1
  }
}))

const GetIngredients = () => {
  return (
    <React.Fragment>
      <Typography>
      <p> 1 Tbsp butter </p>
      <p> 2 cups cauliflower florets </p>
      <p> 2 tbsp grated cheese </p>
      </Typography>
    </React.Fragment>
  )
}

const GetInstruction = () => {
  return (
    <React.Fragment>
      <p> Instruction Instruction Instruction </p>
    </React.Fragment>
  )
}

const GetNutritionFacts = () => {
  return (
    <React.Fragment>
      <p>
      calories: 316<br/>
      carbs: 49g<br/>
      fat: 12g<br/>
      protein: 3g<br/>
      </p>
    </React.Fragment>
  )
}

const CheckGlutenFree = (glutenFree) => {
  if (glutenFree) {
    return (
      <React.Fragment>
        <p> <CheckIcon/> Gluten Free</p>
      </React.Fragment>
    )
  }
}

const CheckVegan = (vegan) => {
  if (vegan) {
    return (
      <React.Fragment>
        <p> <CheckIcon/> Vegan</p>
      </React.Fragment>
    )
  }
}

const CheckVegetarian = (vegetarian) => {
  if (vegetarian) {
    return (
      <React.Fragment>
        <p> <CheckIcon/> Vegetarian</p>
      </React.Fragment>
    )
  }
}

const RecipeDetails = () => {
  const classes = useStyles()

  return (
    <React.Fragment>

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10} container direction="column" spacing={3}>
          <Grid item xs={10}>
            <Link>  <ArrowBackIcon/> back to recommended recipes </Link>
          </Grid>

          <Grid item container direction="row">
            <Grid item xs={6}>
              <h3 className={classes.root}>
                Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
                <IconButton aria-label="add to favorites" className={classes.root}>
                  <BookmarkBorderIcon/>
                </IconButton>
              </h3>
              <p> <ScheduleIcon/> Ready in 45 mins  <PeopleIcon/> Servings: 4</p>
              <p> <CheckGlutenFree true/> </p>
              <p> <CheckVegan false/> </p>
              <p> <CheckVegetarian true/> </p>
            </Grid>
            <Grid item xs={4}>
              <Paper variant="outlined" elevation={5}>
                <img src="https://spoonacular.com/recipeImages/716429-556x370.jpg" width="100%" height="100%"/>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <h4 className={classes.root}> <KitchenIcon/> Ingredients </h4>
            <GetIngredients />
          </Grid>

          <Grid item xs={8}>
            <h4 className={classes.root}> <FastfoodIcon/> Instructions </h4>
            <GetInstruction />
            <Link target="_blank" href='http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html'>
              Read the detailed instructions
            </Link>
          </Grid>

          <Grid item xs={8}>
            <h4 className={classes.root}> <LocalPharmacyIcon/> Nutrition Facts </h4>
            <GetNutritionFacts />
          </Grid>

        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  )
}

export default RecipeDetails
