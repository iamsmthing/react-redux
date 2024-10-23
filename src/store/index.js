import { configureStore} from '@reduxjs/toolkit';
// import { songsSlice } from './slices/songsSlice';
// import { movieSlice } from './slices/moviesSlice';

import {songsReducer} from './slices/songsSlice'
import {moviesReducer} from './slices/moviesSlice'
// const store = configureStore({
//   reducer: {
//     songs: songsSlice.reducer,
//     movies:movieSlice.reducer
//   },
// });   it works also


const store=configureStore({
  reducer:{
    songs:songsReducer,
    movies:moviesReducer
  }
})
export { store };


