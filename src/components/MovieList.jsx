import React from "react";

import { Link } from "react-router-dom";

const MovieList = (props) => {
  // movie cartidi. propsla gelen movies-i mapleyerek kartin icini melumatlarla doldururuq. AddFavorite ve removefavoriteni-ni propsla buraya getirib istifade edirik
  const FavoriteComponent = props.favoriteComponent;
  return (
    <div>
      {props.movies.map((movie, index) => (
        <>
          <div className="movielist-container">
            <img src={movie.Poster} alt="movie" width={100} />
            <div className="right-section">
              <p>{movie.Title.slice(0, 25)}...</p>
              <div onClick={() => props.handleFavoritesClick(movie)}>
                <FavoriteComponent />
              </div>
              <Link to={`/movie/${movie.imdbID}`}>
                <button type="submit">Read More</button>
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MovieList;
