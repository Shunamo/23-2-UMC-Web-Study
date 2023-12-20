import React from 'react';
import { MovieContainer, MovieImage, MovieInfo, MovieRating, MovieTitle,MovieHover, AppContainer} from './Movie.style';
import PropTypes from 'prop-types';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, vote_average, id, overview}) {
  return (
    <AppContainer>
    <MovieContainer>
    <MovieHover>
        <h6>{title}</h6>
        <p>{overview}</p>
    </MovieHover>
      <MovieImage src={`${IMG_BASE_URL}${poster_path}`} alt="영화포스터" />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieRating>{vote_average}</MovieRating>
        <p>{id}</p>
      </MovieInfo>
    </MovieContainer>
    
    </AppContainer>
  );
  
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
