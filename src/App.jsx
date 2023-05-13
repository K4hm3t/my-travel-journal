import React from "react";
import Header from "./componets/header";
import Card from "./componets/card"
import data from "./data";

export default function App() {

const cards = data.map(item => {
  return(
    <Card 
      key={item.id}
      item={item}
    />
  )
})

  return (
    <div>
      <Header />
      <div>{cards}</div>
    </div>
  );
}
