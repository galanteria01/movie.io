import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Movie {
    Title: string,
    Type: string,
    Year: string,
    Poster: string
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: [] as Movie[],
    reducers: {
        add(state, action: PayloadAction<Movie>) {
            state.push(action.payload)
        },
        del(state, { payload: index }) {
            state.splice(index, 1)
        }
    }
})

export const { add, del } = favouritesSlice.actions

export const selectFavourite = (state: RootState) => state.favourites;

export default favouritesSlice.reducer