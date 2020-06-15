import React from 'react';
import { apiUtils } from '../../utils/apiUtils';
import { Button, Input } from 'semantic-ui-react';

export default function MovieInfoWRatings() {
  const [movieTitleInput, setmovieTitleInput] = React.useState('');
  const [movie, setMovie] = React.useState({});

  const handleSubmit = () => {
    const opts = apiUtils.makeOptions('GET');
    apiUtils
      .fetchData(`/movie-info-all-ratings/${movieTitleInput}`, opts)
      .then((response) => {
        setMovie(response);
      })
      .catch(console.log);
  };

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Input
          placeholder='movie title'
          value={movieTitleInput}
          onChange={(e) => setmovieTitleInput(e.target.value)}
        />
        <Button
          content='Primary'
          primary
          disabled={movieTitleInput.length <= 0}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      {movie.poster && (
        <div style={{ display: 'flex' }}>
          <div>
            <img
              alt='poster'
              style={{ maxHeight: '300px' }}
              src={movie.poster}
            />
          </div>
          <div style={{ padding: 20 }}>
            <h2 style={{ margin: 0 }}>
              {movie.title} ({movie.year})
            </h2>
            <p>{movie.genres}</p>

            <p style={{ maxWidth: '400px' }}>
              <b>Plot: </b>
              {movie.plot}
            </p>
            <p>
              <b>Director: </b>
              {movie.directors}
            </p>
            <p>
              <b>Actors: </b>
            </p>

            <ul>
              {movie.cast.split(',').map((a) => {
                return <li key={a}>{a}</li>;
              })}
            </ul>
            <p>Rotten tomatoes score: {movie.tomatoRating} / 10</p>
            <p>IMDB score: {movie.imdbRating} / 10</p>
            <p>Metacritis score: {movie.metacriticRating} / 100</p>
          </div>
        </div>
      )}
    </>
  );
}
