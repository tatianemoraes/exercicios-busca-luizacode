class Movies {
  constructor(movies = []) {
    this.movies = movies;
  }

  get getMovies() {
    return this.movies
  }

  set setMovie({ movieName, movieDirector }) {
    this.movies.push({ movieName, movieDirector });
  }

  addNewMovie({ movieName, movieDirector }) {
    this.movies.push({ movieName, movieDirector })
  }

  removeMovie(movieName) {
    const newMovieList = this.movies.filter(movie => movie.name !== movieName);
    this.movies = newMovieList;
    return this.movies;
  }

  findMoviesFromDirector(movieDirector) {
    let moviesFound = [];
    for(var i = 0; i < this.movies.length; i++) {
      if(movieDirector === this.movies[i].movieDirector) {
        moviesFound.push(this.movies[i]);
      }
    }
    return moviesFound;
  }
}

const harryPotterMovies = new Movies();

harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Philosopher's Stone", movieDirector: 'Chris Columbus' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Chamber of Secrets", movieDirector: 'Chris Columbus' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Prisoner of Azkaban", movieDirector: 'Alfonso Cuarón' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Goblet of Fire", movieDirector: 'Mike Newell' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Order of the Phoenix", movieDirector: 'David Yatesi' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Half-Blood Prince", movieDirector: 'David Yates' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Deathly Hallows – Part 1", movieDirector: 'David Yates' });
harryPotterMovies.addNewMovie({ movieName: "Harry Potter and the Deathly Hallows – Part 2", movieDirector: 'David Yates' });

console.log(harryPotterMovies.getMovies);
console.log(harryPotterMovies.findMoviesFromDirector('Mike Newell'));
console.log(harryPotterMovies.findMoviesFromDirector('David Yates'));
