import React, { useState } from "react"
import styled from "styled-components"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import Layout from "../../../../components/layouts/layout"

import data from "./data"

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <QuestionWrapper>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </QuestionWrapper>
  )
}


function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <Layout>

    <AccordionWrapper>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {questions.map(question => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              )
            })}
          </section>
        </div>
      </main>
    </AccordionWrapper>
    </Layout>

  )
}

export default App

export const AccordionWrapper = styled.div`
/*
=============== 
Global Styles
===============
*/

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
  background: #380E3B;
  color: hsl(209, 61%, 16%);
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
  color:  hsl(205, 78%, 60%);
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
/*  global classes */

/* section */
.section {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}


  background: #380E3B;

  main {
    min-height: 100vh;
    /* using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 90vw;
    margin: 5rem auto;
    background: white;
    border-radius: 0.25rem;
    padding: 2.5rem 2rem;
    max-width: 1170px;
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
  @media screen and (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
  }
`




export const QuestionWrapper = styled.div`

  .question {
    padding: 1rem 1.5rem;
    border: 2px solid  #eae6eb;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .question h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: #eae6eb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #b4345c;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
  }
`



