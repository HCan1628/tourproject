import "./Cards.css";
import { data } from "../../helpers/data";
console.log(data);
const Cards = () => {
  return (
    <div className="card-container">
      {data.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <div>
              <h2 className="title">{card.title}</h2>
            </div>

            <img src={card.image} alt={card.title} />

            <div>
              <p className="card-over">{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
