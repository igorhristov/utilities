import React from "react"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
import Card from "../components/react-page/menu-elements/Card"
import data from "../context/pages-data"

const IndexPage = () => (
  <Layout>
    <HomePageWrapper>
      {data.map((menuItem, ix) => {
        const { id, title, img, desc, urlLink, category } = menuItem
        return <Card {...{ id, title, img, desc, urlLink, category }} />
      })}
      
    </HomePageWrapper>
  </Layout>
)

const HomePageWrapper = styled.section`
  min-height: calc(100vh - 249px);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  margin: 3rem auto;
`

export default IndexPage
