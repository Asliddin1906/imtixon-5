import { useContext } from "react";
import { CardsContext } from "../../contexts/cards";

import "./pagination.scss"

const Pagination = () => {
  const {filteredCards, setActivePageNumber } = useContext(CardsContext);


  if (!filteredCards){
    return null;
  }

  const pagesCount = Math.ceil(filteredCards.length / 10);

  const handlePaginationClick = (evt)=> {
    if (evt.target.matches("button")) {
      
      setActivePageNumber(+evt.target.dataset.id);

    }
  };

  return (
    <ul onClick={handlePaginationClick} className="pages">
      {Array(pagesCount).fill().map((_, index) => (
        <li key={index}>
          <button data-id={index+1} key={index}>{index + 1}</button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination;
