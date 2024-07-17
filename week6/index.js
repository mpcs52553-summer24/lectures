// -----------------------------------------------
// New React code goes here:
// -----------------------------------------------

function App() {
  const movies = [
    { title: "The Mandalorian", img: 'images/mando.jpg', desc: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic." },
    { title: "Spider - Man", img: 'images/spidey.jpg', desc: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider- Man." },
    { title: "Star Wars", img: 'images/star_wars.jpg', desc: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire." },
    { title: "Doctor Strange", img: 'images/doctor.jpg', desc: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary." },
    { title: "Apollo 13", img: 'images/apollo_13.jpg', desc: "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy." },
    { title: "Toy Story", img: 'images/toy_story.jpg', desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." },
  ]

  const movie_components = movies.map(m => <Movie title={m.title} img={m.img} desc={m.desc} />)

  return (
    <div>
      {movie_components}
    </div>
  )
}

function Movie(props) {
  return (
    <article>
      <h2>{props.title}</h2>

      <img src={props.img} />
      <p>
        {props.desc}
      </p>
      <div className="actions">
        <LikeButton></LikeButton>
      </div>
    </article>
  )
}

class LikeButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handleClickEvent = (e) => {
    e.preventDefault()
    this.setState( { count: this.state.count + 1 } )
  }

  render() {
    return (
      <a onClick={this.handleClickEvent}  className="like">&hearts; <span>{this.state.count}</span></a>
    )
  }
}






















// -----------------------------------------------
// OLD CODE FROM WEEK 5 WITHOUT REACT
// -----------------------------------------------

// data = [
//   { title: "The Mandalorian", img: 'images/mando.jpg', desc: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic." },
//   { title: "Spider - Man", img: 'images/spidey.jpg', desc: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider- Man." },
//   { title: "Star Wars", img: 'images/star_wars.jpg', desc: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire." },
//   { title: "Doctor Strange", img: 'images/doctor.jpg', desc: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary." },
//   { title: "Apollo 13", img: 'images/apollo_13.jpg', desc: "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy." },
//   { title: "Toy Story", img: 'images/toy_story.jpg', desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." },
// ]

// class Movie {
//   constructor(title, img_source, description) {
//     this.title = title;
//     this.img_source = img_source
//     this.description = description
//   }

//   render() {
//     const container = document.querySelector("#app")

//     const movieContent = document.querySelector("#movie-template").content
//     const newMovie = movieContent.cloneNode(true)
//     newMovie.querySelector("h2").textContent = this.title
//     newMovie.querySelector("img").src = this.img_source
//     newMovie.querySelector("p").textContent = this.description

//     // newMovie.querySelector(".like").addEventListener("click", handleLikeCounter)

//     container.appendChild(newMovie)
//   }  
// }
// const renderMovies = function () {
//   for (movie of data) {
//     m = new Movie(movie.title, movie.img, movie.desc)
//     m.render()
//   }

//   // newMovie.querySelectorAll(".like").forEach(function(z) {
//   //   link.addEventListener("click", function(event) {
//   //     // ....
//   //   })
//   // })

// }

// function handleLikeCounter(event) {
//   event.preventDefault();
//   console.log(event)
//   // TO DO: increment the like counter
// }

// document.addEventListener("DOMContentLoaded", renderMovies)