import React from "react"
import styled from "styled-components"
import { FaFacebook } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"

const card2 = () => {
  return (
    <Layout>
      <CardsWrapper>
        <article className="card card-1">
          <header></header>
          <img
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            alt="person"
          />
          <h4>hulda terry</h4>
          <p>
            A well renowned Mobile Application Development Company in Europe
          </p>
          <button className="btn">follow</button>
        </article>

        <article className="card card-2">
          <img
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            alt="person"
          />
          <div>
            <h4>hulda terry</h4>
            <p>University of Nevada</p>
            <p>PhD of Information Systems</p>
            <button className="btn">contact</button>
          </div>
        </article>

        <article className="card card-3">
          <img
            src="https://www.w3schools.com/w3css/img_avatar3.png"
            alt="person"
          />
          <div className="card-3-info">
            <h4>Amanda Graham</h4>
            <div className="card-3-links">
              <a href="https://google.com" className="card-3-link">
                <FaFacebook style={{ marginBottom: "-3px" }} /> website.com
              </a>
              <a href="https://google.com" className="card-3-link">
                <FaFacebook style={{ marginBottom: "-3px" }} /> website.com
              </a>
            </div>
          </div>
          <div>
            <button className="btn">view profile</button>
          </div>
        </article>
      </CardsWrapper>
    </Layout>
  )
}

const CardsWrapper = styled.div`
  margin: 0;
  padding: 20px;
  background: #f2f2fa;
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: #f2f2fa;
    color: hsl(209, 61%, 16%);
    /* background: var(--clr-ui-grey);
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
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */

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
  }
  @media (min-width: 800px) {
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

  /*
=============== 
Card 1
===============
*/
  .section-title {
    text-align: center;
    margin: 1rem 0 6rem 0;
  }
  .card {
    width: 90vw;
    margin: 4rem auto;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    /* background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow); */
  }
  .card img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
  }

  .card-1 {
    max-width: 446px;
    text-align: center;
    padding-bottom: 3.5rem;
  }
  .card-1 header {
    height: 197px;
    background: url("https://pbs.twimg.com/profile_images/587985684054552576/NMHDSfGQ_400x400.jpg")
      center/cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    /* border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius); */
  }
  .card-1 img {
    border: 5px solid #fff;
    /* border: 5px solid var(--clr-white); */
    margin-top: -65px;
    margin-bottom: 0.5rem;
  }
  .card-1 h4 {
    font-size: 22px;
  }
  .card-1 p {
    margin-bottom: 2rem;
    font-size: 18px;
    padding: 0 2rem;
    color: var(--clr-grey-3);
  }

  .btn {
    padding: 1rem 2rem;
    letter-spacing: 1.6px;
    font-size: 1rem;
    color: #fff;
    background: #141f64;
    border-radius: 0.25rem;
    /* color: var(--clr-white);
  background: var(--clr-ui-dark-blue);
  border-radius: var(--radius); */
    border-color: transparent;
    text-transform: uppercase;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
    cursor: pointer;
  }

  /*
=============== 
Card 2
===============
*/
  .card-2 {
    max-width: 641px;
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 2rem 2.5rem;
    column-gap: 3rem;
  }
  .card-2 h4 {
    font-size: 26px;
  }
  .card-2 p {
    font-size: 18px;
    margin-bottom: 0;
  }
  .card-2 .btn {
    margin-top: 1.5rem;
    background: transparent;
    border: 2px solid #141f64;
    color: #141f64;
    /* border: 2px solid var(--clr-ui-dark-blue);
  color: var(--clr-ui-dark-blue); */
    font-weight: bold;
  }
  @media (max-width: 776px) {
    .card-2 {
      max-width: 446px;
      grid-template-columns: 1fr;
      justify-items: center;
      grid-template-rows: auto 1fr;
      row-gap: 1rem;
      text-align: center;
    }
  }
  /*
=============== 
Card 3
===============
*/
  .card-3 {
    max-width: 771px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 3rem;
    align-items: center;
    padding: 2rem 3rem;
  }
  .card-3 h4 {
    font-size: 26px;
  }
  .card-3 .btn {
    align-self: flex-start;
  }

  .card-3-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card-3-link {
    font-size: 1rem;
    color: hsl(205, 72%, 37%);
    /* color: var(--clr-grey-3); */
  }
  @media (max-width: 992px) {
    .card-3 {
      max-width: 446px;
      grid-template-columns: 1fr;
      justify-items: center;
      grid-template-rows: auto 1fr 1fr;
      row-gap: 1rem;
      /* text-align: center; */
    }
    .card-3-info {
      margin-top: 1.5rem;
    }
  }
`

export default card2
