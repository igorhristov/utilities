import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layouts/layout"

const IndexPage = () => (
  <Layout>
    <HomePageWrapper>
      <h1>home page</h1>
      <div className="project-dirs">
        <h2>
          <Link to="/react">react Projects</Link>
        </h2>
        <h2>
          <Link to="/htmlcss">HTML/CSS Projects</Link>
        </h2>
      </div>
    </HomePageWrapper>
  </Layout>
)

const HomePageWrapper = styled.section`
  padding: 3rem;
  text-align: center;
  background: #f1f5f8;
  height: 85vh;

  h1 {
    text-shadow: 0 4px 5px rgba(0,0,0,0.4);
    margin-bottom: 3rem;
  }

  .project-dirs {
    padding: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex: 1;
    flex-wrap: wrap;
    gap: 2rem;
  }
  h2 {
  }
  a {
    display: block;
    background: #380e3b;
    padding: 4rem 2rem;
    color: #edca3f;
    border-radius: 10px;
    color: #edca3f;
box-shadow: 0 4px 5px rgba(0,0,0,0.4);
    transition: all 0.2s linear;
  }
  a:hover {
    color: #49a6e9;
  }
`

export default IndexPage
