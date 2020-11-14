import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"
const Footer = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <main>Content</main>
        <footer className="footer">
          <div className="footer-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg"
              alt="logo"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              harum fugit exercitationem nulla?
            </p>
            <div className="socials">
              <a href="#">
                <FaLinkedin className="react-icons" />
              </a>
              <a href="#">
                <FaInstagram className="react-icons" />
              </a>
              <a href="#">
                <FaTwitter className="react-icons" />
              </a>

              <a href="#">
                <FaGithub className="react-icons" />
              </a>
            </div>
          </div>

          <ul className="footer-right">
            <li>
              <h2>Product</h2>

              <ul className="box">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">HTML3/CSS3</Link>
                </li>
                <li>
                  <Link to="#">JavaScript</Link>
                </li>
                <li>
                  <Link to="#">React</Link>
                </li>
              </ul>
            </li>

            <li className="features">
              <h2>Useful Links</h2>

              <ul className="box">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">about</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </li>

            <li className="features">
              <h2>Address</h2>

              <ul className="box">
                <li>
                  <Link to="#">156, Some Street</Link>
                </li>
                <li>
                  <Link to="#">New York</Link>
                </li>
                <li>
                  <Link to="#">USA</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="footer-bottom">
            <p>
              All Right reserved by &copy; Your Company{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default styled(Footer)`
  font-family: sans-serif;
  margin: 0;
  display: grid;
  font-size: 14px;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    display: grid;
    font-size: 14px;
  }

  main {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9b9b9b;
    line-height: 3.8;
    font-size: 80px;
    text-transform: uppercase;
    font-weight: bold;
    height: 60vh;
  }

  footer {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-flow: row wrap;
    padding: 50px;
    color: #fff;
    background-color: #011c39;
  }

  .footer > * {
    flex: 1 100%;
  }

  .footer-left {
    margin-right: 1.25em;
    margin-bottom: 2em;
  }

  .footer-left img {
    color: white;
    fill: white;
    height: 100px;
  }

  h2 {
    font-weight: 600;
    font-size: 17px;
  }
  .footer ul {
    list-style: none;
    padding-left: 0;
  }

  .footer li {
    line-height: 2em;
    margin: 10px 10px 10px 0;
  }

  .footer a {
    text-decoration: none;
  }

  .footer-right {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-flow: row wrap;
  }

  .footer-right > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }

  .box a {
    color: #999;
  }

  .footer-bottom {
    text-align: center;
    color: #999;
    padding-top: 50px;
  }

  .footer-left p {
    padding-right: 20%20%;
    color: #999;
    margin: 10px 0;
  }

  .socials a {
    background: #364a62;
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-right: 10px;
  }

  /* .socials a i {
      color: #e7f2f4;
      padding: 10px 12px;
      font-size: 20px;
  } */

  /* .react-icons {
    fill: #e7f2f4;
    padding: 10px 12px;
    font-size: 20px;
  } */
  .react-icons {
    color: #e7f2f4;
    padding: 10px 12px;
    font-size: 40px;
  }

  @media screen and (min-width: 600px) {
    .footer-right > * {
      flex: 1;
    }
    .footer-left {
      flex: 1 0px;
    }

    .footer-right {
      flex: 2 0px;
    }
  }

  @media (max-width: 600px) {
    .footer {
      padding: 15px;
    }
    main {
      font-size: 55px;
    }
  }
`
