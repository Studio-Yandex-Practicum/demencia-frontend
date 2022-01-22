// import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { ScreenSize } from "../ui/types";
import { Subtitle3, Text3 } from "../ui/controls/typography";
import { Box, Link, LinkButton } from "../ui/controls";

const StyledCard = styled.div`
  margin: 0;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  transition: all 1s ease;
  max-width: 100%;
  width: 100%;
  height: 592px;
  padding: 16px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      height: 540px;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      height: 500px;
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    & {
      width: 92%;
      height: 430px;
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  .card__image {
    object-fit: cover;
    transition: all 1s ease;
    width: 100%;
    height: 320px;
    flex-shrink: 0;
  }

  @media (max-width: ${ScreenSize.Large}px) {
    .card__image {
      height: 290px;
    }
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    .card__image {
      height: 250px;
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    .card__image {
      height: 170px;
    }
  }

  .card__date {
    line-height: 1.15;
    font-weight: 600;
    color: #5b5b5b;
    font-size: 18px;
  }
`;

interface CardProps {
  imageSource: string;
  cardHeading: string;
  cardText?: string;
  cardDateTime?: string;
  cardDateTimeText: string;
  cardLinkTo: string;
}

const Card: React.FC<CardProps> = ({
  imageSource,
  cardHeading,
  cardText,
  cardDateTime,
  cardDateTimeText,
  cardLinkTo,
}) => {
  return (
    <StyledCard>
      <img className="card__image" src={imageSource} alt="news-photo" />
      <Box>
        <Subtitle3 mt={1} mb={1}>
          {cardHeading}
        </Subtitle3>
        <Text3 newsGrid>{cardText}</Text3>
      </Box>
      <Box flex between marginTopAuto>
        <time className="card__date" dateTime={cardDateTime}>
          {cardDateTimeText}
        </time>
        <Link
          zoomTextOnHover={false}
          borderBottomOnHover={false}
          to={cardLinkTo}
        >
          <LinkButton>подробнее</LinkButton>
        </Link>
      </Box>
    </StyledCard>
  );
};

export default Card;
