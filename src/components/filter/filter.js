import { useContext, useRef } from "react";
import {CardsContext} from "../../contexts/cards"
import zoom from "../../assets/img/Icon color.png"


import "./filter.scss"


const Filter = () => { 
  const inputRef = useRef();
  const {cards, setFilteredCards} = useContext(CardsContext)  

  const handleFilterSubmit = (evt) => {
    evt.preventDefault()

    const inputValue = inputRef.current.value;

      const filteredCards =cards.filter(card => card.title.includes(inputValue))

      setFilteredCards(filteredCards);
  }
  return (
    <form onSubmit={handleFilterSubmit} method="get" className="filter" >
      <input ref={inputRef} type="search" placeholder="Search" className="filter-inp"/>
      <button><img src={zoom} alt="" className="inp-icon" /></button>
    </form> 

  )
};

export default Filter;