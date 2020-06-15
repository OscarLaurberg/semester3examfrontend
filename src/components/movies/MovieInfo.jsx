import React from 'react';
import { apiUtils } from '../../utils/apiUtils';
import { Button, Input } from 'semantic-ui-react';

export default function MovieInfo() {
  const [movieTitleInput, setmovieTitleInput] = React.useState('');
  const [movie, setMovie] = React.useState({});

  const handleSubmit = () => {
    console.log(movieTitleInput);
    const opts = apiUtils.makeOptions('GET');
    apiUtils
      .fetchData(`/movie-info/${movieTitleInput}`, opts)
      .then((response) => {
        setMovie(response);
      })
      .catch(console.log);
  };

  React.useEffect(() => {
    console.log('yoyo');
  });

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

            <p>
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
          </div>
        </div>
      )}
    </>
  );
}
