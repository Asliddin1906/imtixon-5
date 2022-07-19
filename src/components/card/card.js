import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <article>
      <h3><Link to={`/card/${card.id}`}>{card.title}</Link></h3>
      <time>{card.date}</time>
      <p>Likes: {card.likes}</p>
    </article>
  );
}

export default Card;