import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import PropTypes from 'prop-types'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    boxShadow: 'none',
    border: '0.5px solid rgba(235, 72, 23, 0.65)',
    '&:hover': {
      cursor: 'pointer',
      borderColor: 'transparent',
      boxShadow: '0 2px 4px 0px rgba(235, 72, 23, 0.65), 0 1px 3px 1px rgba(235, 72, 23, 0.65)'
    },
    '& *': {
      color: 'rgba(235, 72, 23, 0.72)'
    }
  },
  media: {
    height: '168px',
    paddingTop: '59%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  title: {
    color: 'rgba(235, 72, 23)',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  }
}))

const RecipeCard = (props) => {
  const classes = useStyles()
  const [bookmarked, setBookmarked] = React.useState(false)
  const history = useHistory()
  // TODO: this should later be coming from context API, and calling setbookmark on our database

  const handleBookmarkClick = (e) => {
    e.stopPropagation()
    setBookmarked(!bookmarked)
  }
  const handleLabelClick = (e) => {
    e.stopPropagation()
    console.log('Label Clicked')
  }
  const handleCardClick = () => {
    history.push(`/recipes/${recipe.id}`)
  }

  const recipe = props.recipe

  return (
    <Card className={classes.root} onClick={handleCardClick}>
      <CardMedia
        className={classes.media}
        image={recipe.imageUrl}
        title={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" color="textPrimary" className={classes.title} component="p">
          {recipe.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleBookmarkClick}
        >
          {bookmarked && <BookmarkIcon />}
          {!bookmarked && <BookmarkBorderIcon />}
        </IconButton>
        <IconButton aria-label="share" onClick={handleLabelClick}>
          <ShareIcon />
        </IconButton>

      </CardActions>
    </Card>
  )
}


RecipeCard.propTypes = {
  recipe: PropTypes.object
}


export default RecipeCard
