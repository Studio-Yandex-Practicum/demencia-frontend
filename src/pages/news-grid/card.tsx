/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import cursorPointer from "../../images/cursor_pointer.svg";

const StyledCard = styled.li<{ place: string }>`
  margin: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  transition: all 1s ease;
  max-width: 456px;
  padding: ${({ place }) => {
    switch (place) {
      case "newsGrid":
        return `16px 16px 16px 16px`;
      case "wNew":
        return `6px`;
      default:
        return `6px`;
    }
  }};
  min-height: ${({ place }) => {
    switch (place) {
      case "newsGrid":
        return `592px`;
      case "wNew":
        return `180px`;
      default:
        return `592px`;
    }
  }};
  ${({ place }) => {
    switch (place) {
      case "wNew":
        return `width: 137px;`;
      default:
        return ``;
    }
  }}
  ${({ place }) => {
    switch (place) {
      case "newsGrid":
        return `
          &:hover {
            transform: scale(1.1);
          }
        `;
      case "wNew":
        return `
          width: 137px;
          min-height: 180px;

          @media (max-width: 960px) {
            & {
              width: 197px;
              min-height: 152px;
            }
          }
        `;
      default:
        return ``;
    }
  }}

  @media (max-width: 1500px) {
    & {
      width: 420px;
      min-height: 546px;
    }
  }

  @media (max-width: 1020px) {
    & {
      width: 380px;
      min-height: 494px;
    }
  }

  @media (max-width: 650px) {
    & {
      width: 400px;
      min-height: 442px;
    }
  }

  @media (max-width: 420px) {
    & {
      width: 304px;
      min-height: 394px;
    }
  }

  .card__image {
    object-fit: cover;
    transition: all 1s ease;
    height: 320px;
    width: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `424px`;
        case "wNew":
          return `100%`;
        default:
          return `424px`;
      }
    }};
    ${({ place }) => {
      switch (place) {
        case "wNew":
          return `max-height: 50%;`;
        default:
          return ``;
      }
    }}
  }

  @media (max-width: 1500px) {
    .card__image {
      width: 390px;
      height: 290px;
    }
  }

  @media (max-width: 1020px) {
    .card__image {
      width: 350px;
      height: 250px;
    }
  }

  @media (max-width: 650px) {
    .card__image {
      width: 370px;
      height: 270px;
    }
  }

  @media (max-width: 420px) {
    .card__image {
      width: 270px;
      height: 170px;
    }
  }

  .card__case {
    flex-grow: 1;
    max-height: 190px;
    margin: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `0 0 1em 0`;
        case "wNew":
          return `0`;
        default:
          return `0 0 1em 0`;
      }
    }};
  }

  .card__heading {
    color: #5b5b5b;
    text-transform: uppercase;
    font-weight: 600;
    font-style: normal;
    font-size: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `22px`;
        case "wNew":
          return `8px`;
        default:
          return `22px`;
      }
    }};
    line-height: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `1.1`;
        case "wNew":
          return `1.3`;
        default:
          return `1.1`;
      }
    }};
    margin: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `0.5em auto`;
        case "wNew":
          return `5px auto`;
        default:
          return `0.5em auto`;
      }
    }};
    ${({ place }) => {
      switch (place) {
        case "wNew":
          return `
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `;
        default:
          return ``;
      }
    }}
  }

  ${({ place }) => {
      switch (place) {
        case "wNew":
          return `
          @media (max-width: 540px) {
            .card__heading {
              font-size: 7px;
            }
          }
        `;
        default:
          return ``;
      }
  }}

  @media (max-width: 1080px) {
    .card__heading {
      font-size: 18px;
    }
  }

  @media (max-width: 700px) {
    .card__heading {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    .card__heading {
      font-size: 14px;
    }
  }

  .card__text {
    color: #5b5b5b;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `18px`;
        case "wNew":
          return `8px`;
        default:
          return `18px`;
      }
    }};
    -webkit-line-clamp: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `4`;
        case "wNew":
          return `3`;
        default:
          return `4`;
      }
    }};
    max-width: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `424px`;
        case "wNew":
          return `200px`;
        default:
          return `424px`;
      }
    }};
    max-height: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `125px`;
        case "wNew":
          return `50px`;
        default:
          return `125px`;
      }
    }};
    ${({ place }) => {
      switch (place) {
        case "wNew":
          return `line-height: 1.2;`;
        default:
          return ``;
      }
    }}
  }

  ${({ place }) => {
      switch (place) {
        case "wNew":
          return `
            @media (max-width: 540px) {
              .& {
              font-size: 7px;
              }
            }

            @media (max-width: 521px) {
              .& {
                -webkit-line-clamp: 2;
              }
            }
          `;
        default:
          return ``;
      }
    }
  }

  @media (max-width: 1080px) {
    .card__text {
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    .card__text {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    .card__text {
      font-size: 12px;
    }
  }

  .card__caption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .card__date {
    line-height: 1.15;
    font-weight: 600;
    color: #5b5b5b;
    font-size: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `18px`;
        case "wNew":
          return `8px`;
        default:
          return `18px`;
      }
    }};
  }

  ${({ place }) => {
      switch (place) {
        case "wNew":
          return `
            @media (max-width: 540px) {
              .card__date {
              font-size: 7px;
              margin: 0;
              margin-bottom: 5px;
              }
            }
          `;
        default:
          return ``;
      }
    }};

  .card__button {
    color: #6d097a;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    font-style: normal;
    cursor: url(${cursorPointer}), pointer;
    font-size: ${({ place }) => {
      switch (place) {
        case "newsGrid":
          return `18px`;
        case "wNew":
          return `8px`;
        default:
          return `18px`;
      }
    }};
    ${({ place }) => {
      switch (place) {
        case "wNew":
          return `
            border: 0;
            background-color: rgba(0, 0, 0, .0);
          `;
        default:
          return ``;
      }
    }}
  }

  ${({ place }) => {
      switch (place) {
        case "wNew":
          return `
            @media (max-width: 540px) {
              .card__button {
                font-size: 7px;
                margin: 0;
                margin-bottom: 5px;
              }
            }
          `;
        default:
          return ``;
      }
    }};

  .card__button:hover {
    font-weight: 800;
    opacity: 0.7;
    transition: opacity font-weight 2s ease-in;
  }
`;

interface CardProps {
  imageSource: string;
  cardHeading: string;
  cardText: string;
  cardDateTime: string;
  cardDateTimeText: string;
  cardLinkTo: string;
  place: string;
}

const Card: React.FC<CardProps> = ({
  imageSource,
  cardHeading,
  cardText,
  cardDateTime,
  cardDateTimeText,
  cardLinkTo,
  place,
}) => {
  return (
    <StyledCard place={place}>
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
    </StyledCard>
  );
};

export default Card;
