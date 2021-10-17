import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { selectFavourite } from '../features/favourites/favouritesSlice'
import { useAppSelector } from '../app/hooks'
import { FavouriteCard } from '../components'

const useStyles = makeStyles({
  home: {
    padding: 24,
    minHeight: '90vh'
  },
  grid: {}
})

const FavouritesScreen = () => {
  const classes = useStyles()
  const favourites = useAppSelector(selectFavourite)

  return (
    <div className={classes.home}>
      <Grid
        container
        spacing={2}
        className={classes.grid}
      >
        {favourites.map((element) => (
          <Grid item xs={12} md={6} xl={4}>
            <FavouriteCard
              Title={element.Title}
              Type={element.Type}
              Year={element.Year}
              Poster={element.Poster}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FavouritesScreen