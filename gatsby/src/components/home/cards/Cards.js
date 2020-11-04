import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const cardData = [
  {
    imgSrc:
      "https://www.bloginfohub.com/wp-content/uploads/2020/07/Why-React-JS-is-a-popular-choice-of-web-development-in-2020.png",
    title: "Card Title",
    text: "random text",
    urlLink: "/react",
  },
]

const Cards = ({ ...cardData }) => (
  <CardsWrapper>
    <div className="cards-center">
      {cardData.map(card => (
        <article className="card" key={card.title}>
          <img src={card.imgSrc} alt={card.title} />

          <div className="card-info">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>

          <div className="card-footer">
            <span>
              <Link to={card.urlLink} className="myButton">
                React
              </Link>
            </span>
          </div>
        </article>
      ))}
    </div>
  </CardsWrapper>
)

const CardsWrapper = styled.section``

export default styled(Cards)`
  padding: 4rem 0;

  .myButton {
    box-shadow: 0px 1px 0px 0px #bbdaf7;
    background-color: #79bbff;
    border-radius: 15px;
    border: 1px solid #84bbf3;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 9px 27px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #528ecc;
  }
  .myButton:hover {
    background-color: #378de5;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }

  img {
    width: 100%;
    max-height: 300px;
    display: block;
    object-fit: cover;
  }

  .cards-center {
    width: 80vw;
    max-width: 1170px;
    margin: 2rem auto;
  }
  .card {
    border: 1px solid black;
    margin-bottom: 3rem;
  }
  .card-info {
    padding: 1rem;
  }
  .card-footer {
    background: none;
    padding: 0.5rem 1rem;
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .card-footer span {
    color: green;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
  .cards-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    grid-column-gap: 2rem;
  }
`
