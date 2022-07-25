import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/card";
import { CardsContext } from "../../contexts/cards";
import Head from "../../components/head/head"
import Likes from "../../components/likes/likes";
import Footer from "../footer/footer"
import bodyImg from "../../assets/img/body-img.png"

import "./single-card.scss"
const  SingleCard = () => {
  const { id } = useParams();
  const { cards, setCards } = useContext(CardsContext);

  const currentCard = cards?.find(card => card.id === +id);
  const titleRef = useRef();

  if (!currentCard) {
    return <h1>Hech narsa yo'q</h1>
  }
  

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const editingItemIndex = cards.findIndex(card => card.id === currentCard.id);
    const newCard = [
      ...cards.slice(0, editingItemIndex),
      {
        ...currentCard,
        title: titleRef.current.value
      },
      ...cards.slice(editingItemIndex + 1)
    ];

    setCards(newCard);
  }

  return (
    
    <main>
      <Head/>
      <div className="singleCard">
        <Likes className="likes"/>
        <div className="singleCard-body">
          <Card card={currentCard} />
          <form onSubmit={handleFormSubmit}>
            <p>Edit title:</p>
            <input ref={titleRef} defaultValue={currentCard.title} type="text" className="editInp" />
            <button className="editBtn">Submit</button>
          </form>
          <img src={bodyImg} alt="" className="singPageImg" />
          <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.</article>
          <p className="infoTitle">Infomation overload</p>
          <article>Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor. 
          ‘Designing For Sustainability, Tim Frick, 2014'</article>
          <p>Lessons Learnt: Best Practice</p>
          <ul>
            <li>Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
            <li>Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
          </ul>
          <p className="infoTitle">More like this</p>
          <Card card={currentCard} />
          <Card card={currentCard} />

        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default SingleCard;