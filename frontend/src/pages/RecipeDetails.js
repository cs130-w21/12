import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy'
import ScheduleIcon from '@material-ui/icons/Schedule'
import KitchenIcon from '@material-ui/icons/Kitchen'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleIcon from '@material-ui/icons/People'
import BookmarkIcon from '@material-ui/icons/Bookmark'
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

const pathArray = window.location.pathname.split('/')
const recipeID = pathArray[2]
const RecipeDetails = () => {
  const GetIngredients = () => {
    return (
      <React.Fragment>
        <Typography>
        <p> {recipeInfo.title} </p>
        </Typography>
      </React.Fragment>
    )
  }

  const GetInstruction = () => {
    return (
      <React.Fragment>
        <h5>Step 1</h5>
        <p>
        test </p>

        <h5>Step 2</h5>
        <p>
          Add some salt and oregano.
        </p>

      </React.Fragment>
    )
  }

  // const GetNutritionFacts = () => {
  //   return (
  //     <React.Fragment>
  //       <p>
  //       calories: 316<br/>
  //       carbs: 49g<br/>
  //       fat: 12g<br/>
  //       protein: 3g<br/>
  //       </p>
  //     </React.Fragment>
  //   )
  // }

  const CheckGlutenFree = (e) => {
    if (e.glutenFree == null) {
      return (
        <React.Fragment>
          <p> <CheckIcon/> Gluten Free</p>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
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
    } else {
      return (
        <React.Fragment>

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
    } else {
      return (
        <React.Fragment>

        </React.Fragment>
      )
    }
  }
  const [recipeInfo, readRecipeData] = useState([])

  useEffect(() => {
    axios.get(`https://api-cuisinemachine.herokuapp.com/recipes/${recipeID}`).then((res) => {
      readRecipeData(res.data.recipeInfo)
    }).catch((err) => {
      console.error(err)
      console.log(location.state)
    })
  }, [])

  const classes = useStyles()

  const [bookmarked, setBookmarked] = React.useState(false)
  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked)
  }

  return (
    <React.Fragment>

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10} container direction="column" spacing={4}>
          <Grid item xs={10}></Grid>
          <Grid item xs={10}>
            <Link>  <ArrowBackIcon/> back to recommended recipes </Link>
          </Grid>

          <Grid item container direction="row">
            <Grid item xs={6}>
              <h2 className={classes.root}>
                {recipeInfo.title}
                <IconButton
                  aria-label="add to favorites"
                  className={classes.root}
                  onClick={handleBookmarkClick}
                >
                  {bookmarked && <BookmarkIcon />}
                  {!bookmarked && <BookmarkBorderIcon />}
                </IconButton>
              </h2>
              <p> <ScheduleIcon/> Ready in {recipeInfo.preparationTime} mins
                  <PeopleIcon/> Servings: {recipeInfo.servings}</p>
              <p>{recipeInfo.tags && <CheckGlutenFree e={recipeInfo.tags} />}</p>
              <p>{recipeInfo.tags && <CheckVegan vegan={String(recipeInfo.tags.vegan)} />}</p>
              <p>{recipeInfo.tags && <CheckVegetarian vegetarian={String(recipeInfo.tags.vegetarian)} />}</p>
            </Grid>
            <Grid item xs={4}>
              <Paper variant="outlined" elevation={5}>
                <img src={recipeInfo.imageUrl} width="100%" height="100%"/>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <h3 className={classes.root}> <KitchenIcon/> Ingredients </h3>
            <GetIngredients />
          </Grid>

          <Grid item xs={8}>
            <h3 className={classes.root}> <FastfoodIcon/> Instructions </h3>
            <GetInstruction />
            <Link target="_blank" href={recipeInfo.url}>
              Read the detailed instructions
            </Link>
          </Grid>

          <Grid item xs={8}>
            <h3 className={classes.root}> <LocalPharmacyIcon/> Nutrition Facts </h3>
          </Grid>

        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  )
}

export default RecipeDetails
