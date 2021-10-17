import { Grid, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import { API_URL } from '../utils/constant'

const useStyles = makeStyles({
  root: {
    padding: 24,
    minHeight: '100vh'
  }
})

const SearchScreen = () => {
  const [search, setSearch] = useState<string>('search')
  const [list, setList] = useState<any[]>([]);
  const getMovies = () => {
    fetch(`${API_URL}s=${search}`)
      .then((res) => res.json())
      .then((json) => setList(json.Search))
  }
  useEffect(() => {
    setTimeout(() => getMovies(), 2000)
  },[search])
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      {/* <Grid item xs={6}>
        <InputLabel id="demo-simple-select-label">Search Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchType}
          label="Search Type"
          onChange={(e) => setSearchType(e.target.value)}
        >
          <MenuItem value='s'>Name</MenuItem>
          <MenuItem value='actor'>Actor</MenuItem>
          <MenuItem value='director'>Director</MenuItem>
          <MenuItem value='year'>Year</MenuItem>
        </Select>
      </Grid> */}
      <Grid item xs={12}>
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Title" 
        variant="outlined" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
      {list && list.map((element, key) => (
          <Grid item xs={12} md={6} xl={4}>
            <MovieCard
              key={key}
              Title={element.Title}
              Poster={element.Poster}
              Year={element.Year}
              Type={element.Type}
            />
          </Grid>
        ))}
    </Grid>
  )
}

export default SearchScreen
