import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "Smurfs: The Lost Village", "Home Alone 3"];
      const listMovies = movies.map(movie => <li className={classes.movieText}>{movie}</li>)
      return (
      <div className={classes.border}>
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            {listMovies}
         </ol>
      </div>
      );
   }
}

export default MovieList;