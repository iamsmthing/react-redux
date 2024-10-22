import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      // console.log(state.length)
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      // console.log(index);
      state.splice(index, 1);
    },
  },
  extraReducers(builder){
    builder.addCase(movieSlice.actions.reset,(action,state)=>{
      return [];
    })
 }
});

const movieSlice=createSlice({
  name:'movie',
  initialState:[],
  reducers:{
    addMovie(state,action){
      state.push(action.payload);

    },
    removeMovie(state,action){
      const index=state.indexOf(action.payload);
      state.splice(index,1);
    },
    reset(state,action){
       console.log(state);
       return [];
    }
  },
 
})

// console.log(songsSlice.actions.addSong("data"));

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies:movieSlice.reducer
  },
});
// const startingState = store.getState();
// console.log(startingState);

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie,reset } = movieSlice.actions;
