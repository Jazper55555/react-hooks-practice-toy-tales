import React, { useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, handleDelete}) {

  const toyCardDisplay = toyData.map((toy) => (
    <ToyCard deleteFunction={handleDelete} key={toy.id} name={toy.name} image={toy.image} likes={toy.likes} id={toy.id}/>
  ))

  return (
    <div id="toy-collection">{toyCardDisplay}</div>
  );
}

export default ToyContainer;
