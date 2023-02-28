import React from "react";
import data from "../data";
import Card from "./Card"
import {BiWorld} from 'react-icons/bi'



export default function App() {

  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    )
  })

  return (
    <main className="bg-lightWhite font-body">
      <div className="flex justify-center items-center space-x-1 p-3 bg-lightOrange text-white">
        <BiWorld className="text-xl"/>
        <h1 className="text-exs">my travel journal</h1>
      </div>
      <div className="flex justify-center items-center flex-col space-y-6 m-4 md:flex-row md:space-x-2 md:space-y-0 ">
        {cards}
      </div>
    </main>
  )
}