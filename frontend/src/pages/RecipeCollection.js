import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import RecipeCard from '../components/RecipeCard'
import PropTypes from 'prop-types'
import {
  Grid,
  Link
} from '@material-ui/core/'
import axios from 'axios'
import { recipes } from '../data/recipes'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}))

const RecipeCollection = (props) => {
  const classes = useStyles()
  const isMyRecipe = props.isMyRecipe
  const location = useLocation()
  const [recipeData, setRecipeData] = useState([])

  useEffect(() => {
    axios.post('http://localhost:8080/recipes', location.state).then((res) => {
      setRecipeData(res.data.recipes)
    }).catch((err) => {
      console.error(err)
      console.log(location.state)
      setRecipeData(recipes)
    })
  }, [])

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
        alignItems="center"
      >
        {recipeData.map(r => (
          <Grid item xs={6} sm={4} md={3} key={r.id}>
            <RecipeCard recipe={r} />
          </Grid>
        ))
        }
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
  isMyRecipe: PropTypes.bool,
  location: PropTypes.object
}

export default RecipeCollection
