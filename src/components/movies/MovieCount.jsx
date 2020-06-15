import React from 'react';
import { apiUtils } from '../../utils/apiUtils';
import { Button, Input } from 'semantic-ui-react';

export default function MovieCount() {
  const [movieTitleInput, setmovieTitleInput] = React.useState('');
  const [foundMovieTitle, setFoundMovieTitle] = React.useState();
  const [count, setCount] = React.useState();

  const handleSubmit = () => {
    console.log(movieTitleInput);
    const opts = apiUtils.makeOptions('GET');
    apiUtils
      .fetchData(`/movie-count/${movieTitleInput}`, opts)
      .then((response) => {
        setCount(response);
        setFoundMovieTitle(movieTitleInput);
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
      {count && (
        <h3>
          {`Title: "${foundMovieTitle}" have been searched for ${count} times`}
        </h3>
      )}
    </>
  );
}
