import React from "react"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
import Card from "../components/react-page/menu-elements/Card"
import data from "../context/pages-data"

const IndexPage = () => (
  <Layout>
    <HomePageWrapper>
      <div className="section">
        <div className="cards-center">
          {data.map((menuItem, ix) => {
            const { id, title, img, desc, urlLink, category } = menuItem
            return <Card {...{ id, title, img, desc, urlLink, category }} />
          })}
        </div>
      </div>
    </HomePageWrapper>
  </Layout>
)

const HomePageWrapper = styled.section`
  min-height: calc(100vh - 200px);
  padding: 2rem;
  margin-top: 50px;

  .cards-center {
    display: flex;
    margin: 4rem auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.4rem 1.5rem;
  }
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`

export default IndexPage
