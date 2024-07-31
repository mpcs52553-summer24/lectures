import React from 'react'

export default function LikeButton(props) {
  function handleClick(event) {
    event.preventDefault()
    props.onClicked(props.movieId)
  }
  return (
    <button onClick={handleClick} className="text-decoration-none btn text-danger ">&hearts; <span>{props.counter}</span></button>
  )
}
