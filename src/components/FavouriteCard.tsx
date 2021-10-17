import { Cancel } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectFavourite, add, del } from '../features/favourites/favouritesSlice'

interface cardProps {
  Title: string,
  Type: string,
  Year: string,
  Poster: string
}

const useStyles = makeStyles({
  root: {}
})

const FavouriteCard = (props: cardProps) => {
  const classes = useStyles()
  const favourites = useAppSelector(selectFavourite)
  const dispatch = useAppDispatch()
  const handleClick = () => {
      dispatch(del(
        {
          Title: props.Title,
          Type: props.Type,
          Year: props.Year,
          Poster: props.Poster
        }
      ))
  }
  return (
    <Card sx={{ display: 'flex', height: 200, minWidth: 100 }}>
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.Title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {props.Year}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={handleClick}>
            <Cancel />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.Poster}
        alt={props.Title}
      />
    </Card>
  )
}

export default FavouriteCard
