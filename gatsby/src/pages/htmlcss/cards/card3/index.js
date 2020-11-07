import React from "react"
import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"

const card3 = () => {
  return (
    <Layout>
      <CardWrapper>
        <h1 class="section-title">pricing cards</h1>
        <div class="container">
          {/* <!-- card --> */}
          <article class="card">
            <header>
              <div class="card-title">
                <h3>free</h3>
                <p>for freelancers</p>
              </div>
              <div class="card-price">$0</div>
            </header>
            <div class="services">
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>1 users</p>
              </div>
              {/* <!-- end of single service --> */}
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>10 downloads per month</p>
              </div>
              {/* <!-- end of single service --> */}
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>raster files</p>
              </div>
              {/* <!-- end of single service --> */}
            </div>
            <button type="btn" class="btn">
              subscribe
            </button>
          </article>
          {/* <!-- end of card --> */}
          {/* <!-- card --> */}
          <article class="card card-black">
            <header>
              <div class="card-title">
                <h3>pro</h3>
                <p>for agencies</p>
              </div>
              <div class="card-price">$40</div>
            </header>
            <div class="services">
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>3 users</p>
              </div>
              {/* <!-- end of single service --> */}
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>unlimited downloads</p>
              </div>
              {/* <!-- end of single service --> */}
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>fully-editable files</p>
              </div>
              {/* <!-- end of single service --> */}
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>custom packs</p>
              </div>
              {/* <!-- end of single service --> */}
              {/* <!-- single service --> */}
              <div class="service">
                <span class="icon">
                  <FaCheck />
                </span>
                <p>200+ custom packs</p>
              </div>
              {/* <!-- end of single service --> */}
            </div>
            <button type="btn" class="btn">
              subscribe
            </button>
          </article>
          {/* <!-- end of card --> */}
        </div>
      </CardWrapper>
    </Layout>
  )
}
const CardWrapper = styled.section`
  padding: 2rem;
  background: #f4f2fd;
  color: hsl(209, 61%, 16%);
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
    /* background: var(--ui-clr-body-bcg);
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
    font-size: 2.5rem;
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
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3rem;
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
  .section-title {
    text-align: center;
    margin: 4rem 0 6rem 0;
  }
  /*
=============== 
Pricing Cards
===============
*/
  .container {
    width: 90vw;
    margin: 4rem auto;
    max-width: 992px;
    display: grid;
    gap: 4rem;
  }

  .card {
    /* background: var(--clr-white); */
    /* border-radius: var(--radius); */
    background: white;
    border-radius: 0.25rem;
    padding: 4rem 3.5rem;
    border-radius: 1.25rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .card header {
    padding-left: 4rem;
    margin-bottom: 5rem;
  }
  .card-title {
    margin-bottom: 2rem;
  }
  .card-title p {
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
    text-transform: capitalize;
  }
  .card-price {
    font-size: 52px;
    line-height: 65px;
    font-weight: 700;
  }
  .services {
    padding-left: 4rem;
    margin-bottom: 3rem;
  }
  .service {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.5rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .service p {
    margin-bottom: 0;
    color: hsl(209, 34%, 30%);
    /* color: var(--clr-grey-3); */
    font-size: 18px;
    text-transform: capitalize;
  }
  .icon {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    background: #222;
    /* background: var(--clr-black); */
    border-radius: 50%;
    color: white;
    /* color: var(--clr-white); */
  }
  .btn {
    background: #222;
    /* background: var(--clr-black);
    color: var(--clr-white); */
    color: #fff;
    display: block;
    width: 100%;
    text-transform: capitalize;
    padding: 1rem;
    border-radius: 0.25rem;
    /* border-radius: var(--radius); */
    font-size: 1rem;
    border-radius: 1.75rem;
    border-color: transparent;
    font-weight: 600;
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
    cursor: pointer;
  }
  .card-black {
    /* background: var(--clr-black);
    color: var(--clr-white); */
    background: #222;
    color: white;
  }
  .card-black .btn,
  .card-black .icon {
    /* background: var(--clr-white);
    color: var(--clr-black); */
    background: white;
    color: #222;
  }
  .card-black .service p {
    color: white;
    /* color: var(--clr-white); */
  }
  @media screen and (min-width: 576px) {
    .container {
      grid-template-columns: repeat(auto-fill, minmax(428px, 1fr));
      /* align-items: start; */
    }
  }
`
export default card3
