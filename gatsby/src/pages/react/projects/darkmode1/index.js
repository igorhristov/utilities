import React, { useState, useEffect } from "react"
// import styled from "styled-components"

import "./index.css"
import Layout from "../../../../components/layouts/layout"

const data = [
  {
    id: 1,
    title: 'the WET Codbase',
    date: "nekoja data",
    // date: new Date(2020, 9, 4),
    length: 11,
    snippet: `Come waste your time with me`,
  },
  {
    id: 2,
    title: 'goodby, clean code',
    date: "druga data",
    // date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Let clean code guide you. Then let it go.`,
  },
  // {
  //   id: 3,
  //   title: 'my decade in review',
  //   date: new Date(2018, 7, 11),
  //   length: 5,
  //   snippet: `A personal reflection.`,
  // },
  // {
  //   id: 4,
  //   title: 'what are the react team principles',
  //   date: new Date(2015, 5, 4),
  //   length: 5,
  //   snippet: `UI Before API.`,
  // },
]

// import data from "./data"


const Article = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{date}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

// const ArticleWrapper = styled.div`

//   :root {
//     --clr-bcg: #fff;
//     --clr-font: #282c35;
//     --clr-primary: #d23669;
//   }

//   .dark-theme {
//     --clr-bcg: #282c35;
//     --clr-font: #fff;
//     --clr-primary: #ffa7c4;
//   }
//   .light-theme {
//     --clr-bcg: #fff;
//     --clr-font: #282c35;
//     --clr-primary: #d23669;
//   }
//   *,
//   ::after,
//   ::before {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   body {
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//       Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//     /* background: var(--clr-bcg);
//     color: var(--clr-font); */
//     background: #fff;
//     color: #282c35;
//     line-height: 1.5;
//     font-size: 0.875rem;
//     transition: all 0.3s linear;
//   }

//   .post {
//     margin-bottom: 3rem;
//   }
//   .post h2 {
//     /* color: var(--clr-primary); */
//     color: #d23669;
//     text-transform: capitalize;
//     letter-spacing: 2px;
//     font-size: 1.75rem;
//   }
//   .post-info {
//     margin-bottom: 0.75rem;
//     font-style: italic;
//   }
//   .post-info span {
//     margin-right: 0.5rem;
//   }
// `

function App() {
  const [theme, setTheme] = useState("light-theme")

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])
  return (
    <Layout>
      <main style={{height: '85vh'}} className="darkmode-main">
        <nav>
          <div className="darkthemenav-center">
            <h1>overreacted</h1>
            <button className="btn" onClick={toggleTheme}>
              toggle
            </button>
          </div>
        </nav>
        <section className="articles">
          {data.map(item => {
            return <Article key={item.id} {...item} />
          })}
        </section>
      </main>
    </Layout>
  )
}

export default App
