import React, { useState } from "react";

function ToyCard(props) {
  const [likes, setLikes] = useState(props.likes)

  function handleDelete() {
    props.deleteFunction(props.id)
  }

  function handleLikes(e) {
    setLikes(e.target.value++)

    fetch(`http://localhost:3001/toys/${props.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: e.target.value
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))

    setLikes(e.target.value)
  }

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img
        src={props.image}
        alt={props.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button value={likes} className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button value={props.id} className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
