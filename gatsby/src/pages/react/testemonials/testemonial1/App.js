import React, { useState } from "react"
import Layout from "../../../../components/layouts/layout"

import styled from "styled-components"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
// import Review from "./Review"

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <ReviewWrapper>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </ReviewWrapper>
  )
}

const ReviewWrapper = styled.div`
  .review {
    background: white;
    /* background: var(--clr-white); */

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    /* border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition); */
    text-align: center;
  }
  .review:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    /* box-shadow: var(--dark-shadow); */
  }
  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: hsl(205, 78%, 60%);
    color: white;
    /* background: var(--clr-primary-5);
  color: var(--clr-white); */
  }
  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: hsl(205, 78%, 60%);
    /* background: var(--clr-primary-5); */
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
  .author {
    margin-bottom: 0.25rem;
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: hsl(205, 78%, 60%);
    /* color: var(--clr-primary-5); */
    font-size: 0.85rem;
  }
  .info {
    margin-bottom: 0.75rem;
  }
  .prev-btn,
  .next-btn {
    color: hsl(205, 90%, 76%);
    /* color: var(--clr-primary-7); */
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: hsl(205, 78%, 60%);
    /* color: var(--clr-primary-5); */
  }
  .random-btn {
    margin-top: 0.5rem;
    /* background: var(--clr-primary-10); */
    background: hsl(205, 100%, 96%);
    color: hsl(205, 78%, 60%);
    /* color: var(--clr-primary-5); */
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    /* border-radius: var(--radius);
    transition: var(--transition); */
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: hsl(205, 78%, 60%);
    color: hsl(205, 86%, 17%);
    /* background: var(--clr-primary-5);
    color: var(--clr-primary-1); */
  }
`

function App() {
  return (
    <Layout>
      <TestemonialAppWrapper>
        <main>
          <section className="container">
            <div className="title">
              <h2>our reviews</h2>
              <div className="underline"></div>
            </div>
            <Review />
          </section>
        </main>
      </TestemonialAppWrapper>
    </Layout>
  )
}

export default App

const TestemonialAppWrapper = styled.div`
  background: hsl(210, 36%, 96%);
  color: hsl(209, 61%, 16%);
  line-height: 1.5;
  font-size: 0.875rem;

  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: hsl(205, 78%, 60%);
    /* background: var(--clr-primary-5); */
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    width: 80vw;
    max-width: 1170px;
    /* max-width: var(--fixed-width); */
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  /* globals */

  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
`
