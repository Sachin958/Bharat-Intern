const api = {
  nowPlaying:
    "https://api.themoviedb.org/3/movie/popular?api_key=5d58f812de1f10f05cfc70312b8d67cb",
  popularMovie:
    "https://api.themoviedb.org/3/discover/tv?api_key=5d58f812de1f10f05cfc70312b8d67cb",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=5d58f812de1f10f05cfc70312b8d67cb",
  upcoming:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=5d58f812de1f10f05cfc70312b8d67cb",
  discover:
    "https://api.themoviedb.org/3/discover/movie?api_key=5d58f812de1f10f05cfc70312b8d67cb",
};

// Image url
let url = "https://image.tmdb.org/t/p/w500";

// now playing movies
fetch(api.nowPlaying)
  .then((res) => res.json())
  .then((movielist) => {
    const movies = movielist.results;
    // console.log(movies)
    movies.map((item) => {
      // console.log(item.poster_path)
      let poster = url + item.poster_path;
      const movie = `<li><img src= "${poster}"></li>`;
      document.getElementById("centerdiv").innerHTML += movie;
    });
  });

// Most popular movie fetching  == comedy movies
fetch(api.popularMovie)
  .then((res) => res.json())
  .then((popularMovie) => {
    const PM = popularMovie.results;
    PM.map((Pmovie) => {
      let poster = url + Pmovie.backdrop_path;
      const Popmovie = `<li><img src= "${poster}"></li>`;
      document.getElementById("Comedy").innerHTML += Popmovie;
    });
  });

// Top rated movies fetching  === adventure movies
fetch(api.topRated)
  .then((res) => res.json())
  .then((TRmovies) => {
    const TRM = TRmovies.results;
    TRM.map((TRmovie) => {
      let Poster = url + TRmovie.backdrop_path;
      let Topmovies = `<li><img src= "${Poster}"></li>`;
      document.getElementById("Adventure").innerHTML += Topmovies;
    });
  });

// Upcoming movies list fetching  == animation movies
fetch(api.discover)
  .then((res) => res.json())
  .then((TRmovies) => {
    const TRM = TRmovies.results;
    TRM.map((TRmovie) => {
      let Poster = url + TRmovie.backdrop_path;
      let Topmovies = `<li><img src= "${Poster}"></li>`;
      document.getElementById("animation").innerHTML += Topmovies;
    });
  });

// Drama movies
fetch(api.nowPlaying)
  .then((res) => res.json())
  .then((nowPlayingMovie) => {
    const NPM = nowPlayingMovie.results;
    NPM.map((item2) => {
      let poster = url + item2.backdrop_path;
      const Nowmovie = `<li><img src= "${poster}"></li>`;
      document.getElementById("Drama").innerHTML += Nowmovie;
    });
  });
