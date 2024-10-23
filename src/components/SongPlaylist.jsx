import { createRandomSong } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addSong,removeSong } from '../store/slices/songsSlice'; // Assuming you have a removeSong action in your store

function SongPlaylist() {
  const dispatch = useDispatch();

  const songPlaylist = useSelector((state) => state.songs);

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song)); // Dispatch removeSong action
  };

  const renderedSongs = songPlaylist.map((song, index) => {
    return (
      <li key={index}>
        {' '}
        {/* Using index as a fallback if song is not unique */}
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
