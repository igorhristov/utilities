import React, { useState, useEffect } from "react"
import Layout from "../../../../components/layouts/layout"
import styled from "styled-components"

import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import data from "./data"
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Layout>
      <TestemonialWrapper>
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>reviews
            </h2>
          </div>
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person

              let position = "nextSlide"
              if (personIndex === index) {
                position = "activeSlide"
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide"
              }

              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              )
            })}
            <button className="prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </TestemonialWrapper>
    </Layout>
  )
}

const TestemonialWrapper = styled.div`
height: 100vh;
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: hsl(210, 36%, 96%);
  color: hsl(209, 61%, 16%);
  /* background: var(--clr-grey-10);
  color: var(--clr-grey-1); */
  line-height: 1.5;
  font-size: 0.875rem;
}
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
  /* letter-spacing: var(--spacing); */
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
  /* color: var(--clr-grey-5); */
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

  .section {
    width: 90vw;
    margin: 5rem auto;
    max-width: 1170px;
    /* max-width: var(--max-width); */
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
  /*
=============== 
Slider
===============
*/
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .title h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
  .title span {
    font-size: 0.85em;
    /* color: var(--clr-primary-5); */
    color: hsl(21, 62%, 45%);
    margin-right: 1rem;
    font-weight: 700;
  }
  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .person-img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid hsl(210, 31%, 80%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    /* border: 4px solid var(--clr-grey-8); */
    /* box-shadow: var(--dark-shadow); */
  }
  }
  article h4 {
    text-transform: uppercase;
    color: hsl(21, 62%, 45%);
    /* color: var(--clr-primary-5); */
    margin-bottom: 0.25rem;
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    color: hsl(209, 34%, 30%);
    /* color: var(--clr-grey-3); */
  }
  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
  }
  .icon {
    font-size: 3rem;
    margin-top: 1rem;
    color: hsl(21, 62%, 45%);
    /* color: var(--clr-primary-5); */
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background:  hsl(210, 22%, 49%);
    color: #fff;
    /* background: var(--clr-grey-5);
    color: var(--clr-white); */
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s linear;
    /* border-radius: var(--radius);
    transition: var(--transition); */
  }
  .prev:hover,
  .next:hover {
    background: hsl(21, 62%, 45%);
    /* background: var(--clr-primary-5); */
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`

export default App
