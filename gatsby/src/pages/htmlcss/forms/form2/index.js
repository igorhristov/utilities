import React from "react"
import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"

const form2 = () => {
  return (
    <Layout>
      <FormWrapper>
        <div class="container">
          <section class="services">
            {/* <!-- single service --> */}
            <article class="service">
              <span class="icon">
                <FaCheck />
              </span>
              <h4>quick and easy sign-up</h4>
              <p>Enter your email address to create an account.</p>
            </article>
            {/* <!-- single service --> */}
            <article class="service">
              <span class="icon">
                <FaCheck />
              </span>
              <h4>cross-platform solution</h4>
              <p>
                Preview your newsletters on any device before sending them out.
              </p>
            </article>
            {/* <!-- single service --> */}
            <article class="service">
              <span class="icon">
                <FaCheck />
              </span>
              <h4>start sending emails</h4>
              <p>Use our API or pick our pre-built templates.</p>
            </article>
          </section>
          <form class="form">
            <h2>create your account</h2>
            <div class="form-control">
              {/* <!-- input --> */}
              <label for="email">
                email
                <input
                  type="email"
                  id="email"
                  class="form-input"
                  placeholder="enter your email"
                />
              </label>
            </div>
            {/* <!-- input --> */}
            <div class="form-control">
              <label for="name">
                full name
                <input
                  type="text"
                  id="name"
                  class="form-input"
                  placeholder="enter your full name"
                />
              </label>
            </div>
            {/* <!-- input --> */}
            <div class="form-control">
              <label for="password">
                password
                <input
                  type="password"
                  id="password"
                  class="form-input"
                  placeholder="type to create a password"
                />
              </label>
            </div>
            <div class="updates">
              
              <input type="checkbox" name="" id="" />
              <p>get udpates and notifications about our product</p>
            </div>
            <button type="submit" class="btn">
              type to create a password
            </button>
          </form>
        </div>
      </FormWrapper>
    </Layout>
  )
}

const FormWrapper = styled.main`
  padding: 2rem;
  background: #c5bdeb;
  /* background: "#c5bdeb;"; */
  /* color: hsl(209, 61%, 16%); */
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
    background: #c5bdeb;
    color: hsl(209, 61%, 16%);
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
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
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
    color: white;
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
Sign up Form
===============
*/
  .services {
    display: none;
  }
  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    background: #fff;
    /* background: var(--clr-white); */
    padding: 2.5rem;
    border-radius: 0.25rem;
    /* border-radius: var(--radius); */
    width: 90vw;
    max-width: 1170px;
    /* max-width: var(--max-width); */
  }
  .form h2 {
    margin-bottom: 2rem;
    font-weight: 500;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  .form-control label {
    display: block;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .form-input {
    border: 1px solid hsl(212, 33%, 89%);
    border-radius: 0.25rem;
    /* border: 1px solid var(--clr-grey-9);
  border-radius: var(--radius); */
    padding: 1.25rem;
    width: 100%;
    color: hsl(209, 34%, 30%);
    /* color: var(--clr-grey-3); */
    font-size: 1rem;
  }
  .form-input::placeholder {
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
    text-transform: capitalize;
  }
  .updates {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.5rem;
    align-items: center;
    margin-bottom: 2rem;
  }
  input[type="checkbox"] {
    /* border: 1px solid var(--clr-grey-9); */
    width: 1.75rem;
    height: 1.75rem;
  }
  .updates p {
    margin-bottom: 0;
    text-transform: capitalize;
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
  }
  .btn {
    background: #6e59ce;
    /* background: var(--ui-clr-primary); */
    display: block;
    width: 100%;
    color: #fff;
    border-radius: 0.25rem;
    /* color: var(--clr-white);
  border-radius: var(--radius); */
    border-color: transparent;
    padding: 1.25rem 0;
    text-transform: capitalize;
    font-size: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    .services {
      display: block;
      padding: 4rem;
      background: linear-gradient(135deg, #ba91e9 0%, #6d58ce 100%);
      border-radius: 0.25rem;
      color: #fff;
      /* border-radius: var(--radius);
    color: var(--clr-white); */
      min-height: 785px;
    }
    .service {
      max-width: 240px;
      margin-bottom: 2.5rem;
    }
    .icon {
      width: 2rem;
      height: 2rem;
      display: block;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.23);
      display: grid;
      place-items: center;
      margin-bottom: 1.75rem;
    }
    .service h4 {
      font-weight: 500;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
      align-items: center;
    }
  }
`

export default form2
