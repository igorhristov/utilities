import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"

const form = () => {
  return (
    <Layout>
      <FormWrapper>
        <h1 class="section-title">submit form</h1>
        <div class="container">
          <header>
            <h2 class="header-title">submit a tool</h2>
            <button class="close-btn">
              <FaTimes />
            </button>
          </header>
          <form>
            <div class="form-control">
              <label for="name">
                name
                <input
                  type="text"
                  id="name"
                  placeholder="UI Desing Daily"
                  class="form-input"
                />
              </label>
            </div>
            <div class="form-control">
              <label for="resource">Link to resource
              <input
                type="text"
                id="resource"
                placeholder="https://www.uidesigndaily.com"
                class="form-input"
              />
              </label>
            </div>
            <div class="form-control">
              <label for="category">Category
              <select id="category" class="form-input">
                <option value="" selected disabled hidden>
                  select a category
                </option>
                <option value="first">first category</option>
                <option value="second">second category</option>
                <option value="third">third category</option>
              </select>
              </label>
            </div>
            <button class="submit-btn">submit</button>
          </form>
        </div>
      </FormWrapper>
    </Layout>
  )
}

const FormWrapper = styled.div`
  background: #f2f2fa;
  padding: 1rem;
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
  .section-title {
    text-align: center;
    margin: 4rem 0 6rem 0;
  }
  /*
=============== 
Form
===============
*/
  .container {
    width: 90vw;
    max-width: 625px;
    /* background: var(--clr-white);
    border-radius: var(--radius); */
    background: #fff;
    border-radius: 0.25rem;
    margin: 6rem auto;
    /* border-radius: var(--radius);
    box-shadow: var(--dark-shadow); */
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .container header {
    height: 211px;
    background: #20225e;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    /* background: var(--clr-ui-dark-blue);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius); */
    display: flex;
    align-items: center;
    justify-content: center;
    /* because button has position absolute */
    position: relative;
  }
  .header-title {
    color: #fff;
    /* color: var(--clr-white); */
  }
  .close-btn {
    width: 3rem;
    height: 3rem;
    background: #2f316e;
    border-color: transparent;
    border-radius: 50%;
    color: #fff;
    /* color: var(--clr-white); */
    display: grid;
    place-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .close-btn .fas {
    font-size: 1.2rem;
    cursor: pointer;
  }
  form {
    max-width: 391px;
    margin: 0 auto 4rem;
    padding: 4rem 0;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  .form-control label {
    display: block;
    font-size: 0.85rem;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
    padding-left: 0.5rem;
  }

  .form-input {
    width: 100%;
    border: none;
    border-bottom: 2px solid #d3d5f1;
    padding: 0.75rem 0.5rem;
    color: #151749;
  }
  .form-input::placeholder {
    color: #151749;
  }
  .submit-btn {
    width: 247px;
    height: 77px;
    margin: 0 auto;
    display: block;
    border-radius: 38.5px;
    border-color: transparent;
    color: #fff;
    /* color: var(--clr-white); */
    text-transform: capitalize;
    background: #20225e;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    /* background: var(--clr-ui-dark-blue);
    box-shadow: var(--dark-shadow); */
    font-size: 18px;
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
    margin-top: 4rem;
    cursor: pointer;
  }
`

export default form
