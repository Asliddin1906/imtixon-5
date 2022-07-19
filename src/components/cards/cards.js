
import { useContext } from "react";
import { CardsContext } from "../../contexts/cards";
import Card from "../card/card";
import Head from "../head/head";
import Suggestion from "../suggestion/suggestion";

import "./cards.scss"

const Cards = () => {
  
  const { cards }  = useContext(CardsContext);


  return ( 
    <>
    <Head/>
    <div className="body">
      <Suggestion className="suggestion"/>
      {cards?.map(card => <Card card={card} key={card.id} />)}
    </div>

    </>
  )
}



export default Cards;