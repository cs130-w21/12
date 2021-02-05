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
import ButtonBase from '@material-ui/core/ButtonBase'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320
  },
  media: {
    height: 0,
    paddingTop: '59%'
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
}))

const RecipeCard = (props) => {
  const classes = useStyles()
  const [bookmarked, setBookmarked] = React.useState(false) // TODO: this should later be coming from context API

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked)
  }

  const recipe = props.recipe

  return (
    <Card className={classes.root}>
      <ButtonBase
        className={classes.cardAction}
        onClick={event => console.log('clicked')}
      >
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title={recipe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="textPrimary" component="p">
            {recipe.title}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleBookmarkClick}
        >
          {bookmarked &&
            <BookmarkIcon />
          }
          {!bookmarked &&
            <BookmarkBorderIcon />
          }
        </IconButton>
        <IconButton aria-label="share">
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
