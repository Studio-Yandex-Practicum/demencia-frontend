import { Link } from "react-router-dom";

interface ICard {
  imageSource: string;
  cardHeading: string;
  cardText: string;
  cardDateTime: string;
  cardDateTimeText: string;
  cardLinkTo: string;
}

const Card: React.FC<ICard> = ({
  imageSource,
  cardHeading,
  cardText,
  cardDateTime,
  cardDateTimeText,
  cardLinkTo,
}) => {
  return (
    <li className="card card_section_news-grid">
      <img className="card__image" src={imageSource} alt="news-photo" />
      <div className="card__case">
        <h2 className="card__heading">{cardHeading}</h2>
        <p className="card__text">{cardText}</p>
      </div>
      <div className="card__caption">
        <time className="card__date" dateTime={cardDateTime}>
          {cardDateTimeText}
        </time>
        <Link to={cardLinkTo} className="card__button">
          подробнее
        </Link>
      </div>
    </li>
  );
};

export default Card;
