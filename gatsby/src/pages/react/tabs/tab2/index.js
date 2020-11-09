import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

const Tab = ({ children }) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 })

  function moveHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    })
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    })
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  )
}

const HomeComponenet = () => <div>Heloo from home component</div>
// const AboutComponenet = () => <div>Heloo from About component</div>
// const ContactComponenet = () => <div>Heloo from Contact component</div>

const App = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <section className="app">
          <div className="browser">
            <div className="tabs">
              <Tab>
                <Link active activeClassName="is-active" to="/">
                  home
                </Link>
              </Tab>
              <Tab>
                <Link activeClassName="is-active" to="/react">
                  React
                </Link>
              </Tab>
              <Tab>
                <Link activeClassName="is-active" to="/htmlcss">
                  Contact
                </Link>
              </Tab>
            </div>
            <div className="viewport">
              <HomeComponenet />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default styled(App)`
  /* * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    /* font-size: 2rem; */
  /* margin: 0;
    padding: 0;
  }  */

  .app {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #634cec;
    min-height: 100vh;
  }

  .browser {
    display: flex;
    flex-direction: column;
    background: #ffb91f;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    min-width: 60%;
    min-height: 50vh;
  }

  .tabs {
    flex-shrink: 1;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    padding-top: 10px;
  }

  .tab {
    position: relative;
    background: #6e45df;
    min-width: 120px;
    font-size: 14px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: 0.3s ease all;
    overflow: hidden;
    cursor: pointer;
  }

  .tab a {
    display: block;
    padding: 12px 25px;
    color: #e1daf5;
    text-decoration: none;
  }

  .tab a.is-active {
    background: #5131a9;
    color: #eee;
  }

  .address-bar {
    background: #5533b3;
    padding: 8px;
  }

  .address-bar input {
    background: #3a2081;
    color: #eee;
    border-radius: 20px;
    border: none;
    outline: none;
    width: 100%;
    padding: 8px 20px;
    font-size: 18px;
  }

  .viewport {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5131a9;
    color: #dacff7;
    flex: 1;
    flex-grow: 1;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .highlight {
    display: block;
    position: absolute;
    height: 80px;
    width: 300px;
    top: -10px;
    left: -100px;
    border-radius: 50%;
    transition: 0.3s ease all;
    opacity: 0.8;
    pointer-events: none;
    background: radial-gradient(red, rgba(157, 128, 238, 0));
  }
`
