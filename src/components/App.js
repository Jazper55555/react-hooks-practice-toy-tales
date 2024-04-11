import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToyData(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => {
        const updatedToys = toyData.filter((toy) => toy.id !== id);
        setToyData(updatedToys);
      });
  }

  function updateArray(newToy) {
    setToyData([...toyData, newToy])
  }

  // function handleDelete(id) {
  //   console.log(id)
  //   const updatedToys = toyData.filter((toys) => toys.id !== id)
  //   setToyData(updatedToys)
  //   console.log(toyData)
  // }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateArray={updateArray}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} handleDelete={handleDelete}/>
    </>
  );
}

export default App;

// App
  // Header
  // ToyForm
  // ToyContainer
    // ToyCard