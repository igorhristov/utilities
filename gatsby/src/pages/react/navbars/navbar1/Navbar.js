import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { links, social } from "./data"
import styled from "styled-components"
import logo from "../../../../images/gatsby-icon.png"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks])
  return (
    <NavbarWrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map(link => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map(socialIcon => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`

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
    /* background: #380e3b; */
    /* color: #edca3f; */
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

  nav {
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: hsl(205, 78%, 60%);
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: hsl(205, 86%, 17%);
    transform: rotate(90deg);
  }
  .logo {
    height: 40px;
  }
  .links a {
    color: hsl(209, 34%, 30%);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
  }
  .links a:hover {
    background: hsl(205, 86%, 81%);
    color: hsl(205, 78%, 60%);
    padding-left: 1.5rem;
  }
  .social-icons {
    display: none;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: hsl(205, 78%, 60%);
      transition: all 0.3s linear;
    }
    .social-icons a:hover {
      color: hsl(205, 90%, 76%);
    }
  }
`

export default Navbar
