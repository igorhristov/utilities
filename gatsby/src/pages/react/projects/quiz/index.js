import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

const categories = [
  {
    id: "any",
    name: "Any Category",
  },
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 10,
    name: "Entertainment: Books",
  },
  {
    id: 11,
    name: "Entertainment: Film",
  },
  {
    id: 14,
    name: "Entertainment: Television",
  },
  {
    id: 15,
    name: "Entertainment: Video Games",
  },
  {
    id: 18,
    name: "Science: Computers",
  },
  {
    id: 20,
    name: "Mythology",
  },

  {
    id: 21,
    name: "Sports",
  },
]

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const Question = ({ question, answerQuestion }) => {
  const answers = [...question.incorrect_answers, question.correct_answer]
  shuffleArray(answers)

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {answers.map((answer, index) => (
        <button
          key={(answer, index)}
          onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  )
}

const CategorySelector = ({ category, chooseCategory }) => {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select value={category} onChange={e => chooseCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option
            key={category + index}
            value={category.id}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </select>
    </div>
  )
}

const ResultModal = ({ isCorrect, question, getQuestion }) => {
  return (
    <div className={`result-modal ${isCorrect ? "is-correct" : "is-wrong"}`}>
      <div className="overlay">
        <div className="result-modal-content">
          {isCorrect && (
            <h3>
              <span role="icon">🤩🤩🤩</span>
              <br />
              YOU WON!
            </h3>
          )}
          {!isCorrect && (
            <h3>
              <span role="icon">😢😢😢 </span>
              <br />
              YOU LOST!
            </h3>
          )}

          {!isCorrect && (
            <div className="correct-answer">
              <small>The correct answer was:</small>
              <br />
              <strong
                dangerouslySetInnerHTML={{ __html: question.correct_answer }}
              />
            </div>
          )}

          <button onClick={getQuestion}>
            Go to next question
            <span role="icon" style={{ marginLeft: "10px" }}>
              {" "}
              👉{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

const Scoreboard = ({ correctScore, wrongScore }) => {
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrongScore}</strong>
        <strong>wrong</strong>
      </div>
      <div className="correct">
        <strong>{correctScore}</strong>
        <strong>correct</strong>
      </div>
    </div>
  )
}

const QuizApp = ({ className }) => {
  const [question, setQuestion] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("any")
  const [isCorrect, setIsCorrect] = useState(null)
  const [correctScore, setCorrectScore] = useState(0)
  const [wrongScore, setWrongScore] = useState(0)

  const getQuestion = useCallback(() => {
    setIsCorrect(null)

    let url = `https://opentdb.com/api.php?amount=1`
    if (selectedCategory !== "any") {
      url += `&category=${selectedCategory}`
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setQuestion(data.results[0])
      })
  }, [selectedCategory])

  useEffect(() => {
    getQuestion()
  }, [getQuestion, selectedCategory])

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setCorrectScore(score => score + 1)
    } else {
      setWrongScore(score => score + 1)
    }
  }

  return (
    <Layout>
      <div className={className}>
        <div className="app">
          {/* show the result modal */}
          {isCorrect !== null && (
            <ResultModal
              isCorrect={isCorrect}
              question={question}
              getQuestion={getQuestion}
            />
          )}

          {/* question header */}
          <div className="question-header">
            <CategorySelector
              category={selectedCategory}
              chooseCategory={setSelectedCategory}
            />
            <Scoreboard correctScore={correctScore} wrongScore={wrongScore} />
          </div>

          {/* the qustion itself */}
          <div className="question-main">
            {question && (
              <Question
                question={question}
                answerQuestion={handleQuestionAnswered}
              />
            )}
          </div>

          {/* question footer */}
          <div className="question-footer">
            <button onClick={getQuestion}>Go to next question</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default styled(QuizApp)`
  * {
    box-sizing: border-box;
  }

  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-size: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  color: #454545;

  .app {
    max-width: 500px;
    padding-bottom: 30px;
    padding-top: 30px;
  }

  .streak-checker {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .streak-checker progress {
    margin: 0;
  }

  /* header section ---------------------- */

  .question-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .category-selector {
    max-width: 60%;
  }

  .category-selector select {
    font-size: 16px;
    width: 100%;
    color: #edca3f;
    background: #380e3b;
    border: none;
    padding: 0.6rem 0.81rem 0.5rem 0.1rem;
    cursor: pointer;
    border: 1px solid #1f425e;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #380e3b 0%, #380e3b 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right 0.7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: 0.65em auto, 100%;
  }

  .category-selector p {
    margin: 0;
    font-size: 16px;
    color: #380e3b;
  }

  .scoreboard {
    display: flex;
    align-items: center;
    text-align: right;
    font-size: 16px;
    line-height: 1;
    color: #380e3b;
    background: rgba(237, 202, 63, 0.5);
    border-radius: 0.5em;
    padding: 0.5rem 0.81rem 0.1rem 0.5rem;
    text-shadow: 3px 3px 8px black;
  }

  .scoreboard > div:first-child {
    margin-right: 15px;
  }

  .scoreboard .wrong strong:nth-child(1) {
    color: #f41734;
  }

  .scoreboard .correct strong:nth-child(1) {
    color: green;
  }

  .scoreboard strong {
    font-size: 25px;
    display: block;
    margin-bottom: 3px;
  }

  .result-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .result-modal .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .result-modal-content {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #fff;
    border-radius: 5px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    padding: 30px;
    width: 400px;
    margin: 0 auto;
    max-width: 90%;
    text-align: center;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='119' height='119' viewBox='0 0 200 200'%3E%3Cpolygon fill='%2300c3c3' fill-opacity='0.08' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  }

  .result-modal.is-correct h3 {
    color: rgb(63, 162, 63);
  }

  .result-modal.is-wrong h3 {
    color: rgb(211, 79, 79);
  }

  .result-modal-content h3 {
    font-size: 30px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .result-modal-content .correct-answer {
    margin-bottom: 20px;
  }

  .result-modal-content .correct-answer small {
    color: #777;
  }

  .result-modal-content .correct-answer strong {
    font-size: 40px;
  }

  /* main section ---------------------- */

  .question-main {
    background: #380e3b;
    padding: 2.5rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.9);
    min-width: 500px;
    max-width: 90%;
    min-height: 350px;
    display: flex;
    align-items: center;
    border-radius: 0px 50px 0px 100px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%230a030b' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23160817' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%231e0c20' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23260e29' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%232f0f32' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23380e3b' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }

  .question {
    width: 100%;
  }

  .question h2 {
    color: #edca3f;
    margin-top: 0;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }

  button {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    font-size: 16px;
    cursor: pointer;
    color: #1f425e;
    box-shadow: 0 4px 9px 2px rgba(0, 0, 0, 1);
    padding: 0.8rem;
    border-width: 1px;
    border-radius: 0.25rem;
    border-color: #38a89d;
    background-color: #00c3c3;
    transition: 0.2s ease all;
    line-height: 1;
  }

  button:hover {
    background-color: #0ff5f5;
    box-shadow: none;
  }

  /* footer section ---------------------- */

  .question-footer {
    margin-top: 15px;
    text-align: right;
  }

  .question-footer button {
    background: #00c3c3;
    border-color: #1f425e;
    color: #1f425e;
    width: auto;
    margin-left: auto;
    font-size: 12px;
    padding: 10px 20px;
  }

  /* putting down here because the svg pattern is so long */
  background-color: #a68e2c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23b0962f' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ba9f32' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23c4a834' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23cfb037' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23d9b93a' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23e1bf3c' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23e8c63e' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f0cc40' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f7d342' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffd944' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`
