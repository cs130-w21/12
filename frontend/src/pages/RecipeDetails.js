import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule'
import KitchenIcon from '@material-ui/icons/Kitchen'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleIcon from '@material-ui/icons/People'
// import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
// import Paper from '@material-ui/core/Paper'

// const mainColor = '#eb4917'

const GetIngredients = () => {
  return (
    <React.Fragment>
      <Typography>
      <p> amount unit name </p>
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

const RecipeDetails = () => {
  // const classes = useStyles()

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
              <h3>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs <BookmarkBorderIcon/></h3>
              <p> <ScheduleIcon/> Ready in 45 mins  <PeopleIcon/> Servings: 4</p>
            </Grid>
            <Grid item xs={3}>
              <img src="https://spoonacular.com/recipeImages/716429-556x370.jpg" width="320" height="260"/>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <h4> <KitchenIcon/> Ingredients </h4>
            <GetIngredients />
          </Grid>
          <Grid item xs={8}>
            <h4> <FastfoodIcon/> Instructions </h4>
            <GetInstruction />
            <Link> More information </Link>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      {/* <Grid container spacing={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid container item spacing={3}>
          <Grid item xs={6}>
            <h3>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h3>
            <p> <ScheduleIcon/> ready in 45 mins</p>
          </Grid>
          <Grid item xs={4}>
            <img src="https://spoonacular.com/recipeImages/716429-556x370.jpg" width="320" height="260"/>
          </Grid>
        </Grid>

        <Grid container item spacing={3} xs={8}>
        </Grid>

        <Grid container item spacing={3} xs={8}>
        </Grid>
        <Grid item xs={1}></Grid> */}
    </React.Fragment>
  )
}

export default RecipeDetails
