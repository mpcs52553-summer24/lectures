import React, { useState } from 'react'
import Movie from './Movie.js'

function App() {

  const initialData = [
    { title: "The Princess Bride", id: 2493, poster_path: '/dvjqlp2sAhUeFjUOfQDgqwpphHj.jpg', release_date: '1999', vote_average: 10 },
    { title: "Spider - Man", id: 557, poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg', release_date: '1999', vote_average: 10 },
    { title: "Star Wars", id: 11, poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', release_date: '1999', vote_average: 10 },
    { title: "Jurassic Park", id: 329, poster_path: 'https://image.tmdb.org/t/p/w185//b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg', release_date: '1993', vote_average: 10 },
    { title: "Doctor Strange", id: 284052, poster_path: '/7WfK17BXE6szXlm4WOxfswgbdsL.jpg', release_date: '1999', vote_average: 10 },
    { title: "Apollo 13", id: 568, poster_path: '/kzj95o9FlVxKziQq36mjES3wxel.jpg', release_date: '1999', vote_average: 10 },
    { title: "The Matrix", id: 603, poster_path: '//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', release_date: '1999', vote_average: 10 },
    { title: "Toy Story", id: 862, poster_path: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg', release_date: '1999', vote_average: 10 },
  ]

  function handleOurMovies(event) {
    event.preventDefault()
    setData(initialData)
  }
  
  function handleTopRated(event) {
    event.preventDefault()
    const url = urlForMovies("top_rated")
    fetch(url).then((r) => r.json()).then((internet_data) => setData(internet_data.results))
  }

  function handleNowPlaying(event) {
    event.preventDefault()
    const url = urlForMovies("now_playing")
    fetch(url).then((r) => r.json()).then((internet_data) => setData(internet_data.results))
  }

  const [likes, setLikes] = useState( { } )
  const [data, setData] = useState(initialData)
  
  function incrementLikes(likedId) {
    const currentLikeCount = likes[likedId] || 0
    let obj = { }
    obj[likedId] = currentLikeCount + 1

    const newLikes = {...likes, ...obj }
    setLikes(newLikes)
  }

  const movies = data.map(movie_data => {
    return <Movie key={movie_data.title} movieId={movie_data.id} onLiked={incrementLikes} likes={likes[movie_data.id] || 0} title={movie_data.title} release_date={movie_data.release_date} poster_path={movie_data.poster_path} vote_average={movie_data.vote_average} />
  })

  function handleSearch(event) {
    event.preventDefault();
    const url = urlForSearch(searchTerm)
    fetch(url).then((r) => r.json()).then((internet_data) => setData(internet_data.results))
    setSearchTerm("")
  }

  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <div>
      <header className="row mb-5 justify-content-between">
        <form className="col-sm-4" onSubmit={handleSearch}>
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}   
              className="form-control" autoFocus name="searchTerm" type="text" placeholder="Search by title..." />
        </form>

        <p className="mt-2">
          <button onClick={handleOurMovies} className="btn btn-primary" >Our Movies</button>
          <button onClick={handleTopRated} className="btn btn-primary ms-3" >Top-Rated Movies</button>
          <button onClick={handleNowPlaying} className="btn btn-primary ms-3">Now Playing</button>
        </p>
      </header>

      <div className="row justify-content-between flex-wrap gy-5" id="movies">
        {movies}
      </div>
    </div>
  )
}

// Pass in the resource you want to retrieve: 'top_movies' or 'now_playing'
function urlForMovies(resource) {
  const apiKey = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
  const language = "language=en-US"
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/movie/${resource}`
  return `${base_url}?${apiKey}&${language}&${region}&${filter}`
}

// Pass in the movite title or keyword to search for
function urlForSearch(keyword) {
  const apiKey = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
  const language = "language=en-US"
  const search = `query=${keyword}`
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/search/movie`
  return `${base_url}?${apiKey}&${search}&${language}&${region}&${filter}`
}

// Pass in the movite title or keyword to search for
function urlForDetails(movieId) {
  const apiKey = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
  const language = "language=en-US"
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/movie/${movieId}`
  return `${base_url}?${apiKey}&${language}&${region}&${filter}`
}

export default App;

// To make development easier, we can make certain functions available to the browser
// by adding a reference into the built-in window object
window.urlForMovies = urlForMovies
window.urlForSearch = urlForSearch
window.urlForDetails = urlForDetails