import React, { useState, useEffect } from "react"
import styled from "styled-components"

import "./index.css"
import Layout from "../../../../components/layouts/layout"

import data from "./data"


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

const ArticleWrapper = styled.div`
  /*
=============== 
Global Styles
===============
*/

  :root {
    --clr-bcg: #fff;
    --clr-font: #282c35;
    --clr-primary: #d23669;
  }

  .dark-theme {
    --clr-bcg: #282c35;
    --clr-font: #fff;
    --clr-primary: #ffa7c4;
  }
  .light-theme {
    --clr-bcg: #fff;
    --clr-font: #282c35;
    --clr-primary: #d23669;
  }
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    /* background: var(--clr-bcg);
    color: var(--clr-font); */
    background: #fff;
    color: #282c35;
    line-height: 1.5;
    font-size: 0.875rem;
    transition: all 0.3s linear;
  }

  .post {
    margin-bottom: 3rem;
  }
  .post h2 {
    /* color: var(--clr-primary); */
    color: #d23669;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 1.75rem;
  }
  .post-info {
    margin-bottom: 0.75rem;
    font-style: italic;
  }
  .post-info span {
    margin-right: 0.5rem;
  }
`

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
