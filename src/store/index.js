import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});
// console.log(songsSlice.actions.addSong("data"));

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});
// const startingState = store.getState();
// console.log(startingState);

export { store };
export const { addSong, removeSong } = songsSlice.actions;
