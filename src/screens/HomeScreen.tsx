import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MovieCard from '../components/MovieCard'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/constant'
import { randomTitles } from '../utils/movieService'

const useStyles = makeStyles({
  home: {
    padding: 24,
  },
  grid: {
  }
})

const HomeScreen = () => {
  const classes = useStyles()
  const [movies, setMovies] = useState<any[]>([])

  useEffect(() => {
    var title: string = randomTitles[Math.floor(Math.random() * randomTitles.length)]
    fetch(`${API_URL}s=${title}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={classes.home}>
      <Grid
        container
        spacing={2}
        className={classes.grid}
      >
        {movies.map((element) => (
          <Grid item xs={12} md={6} xl={4}>
            <MovieCard
              Title={element.Title}
              Poster={element.Poster}
              Year={element.Year}
              Type={element.Type}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default HomeScreen
