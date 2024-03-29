import React, { useState } from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import styled from "styled-components"

// import items from "./reactDataElements"

function App({ data: items, title }) {
  const allCategories = ["all", ...new Set(items.map(item => item.category))]
  const [menuItems, setMenuItems] = useState(items)
  const [categories] = useState(allCategories)

  const filterItems = category => {
    if (category === "all") {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <MainWrapper>
      <section className="menu section">
        <div className="title">
          <h2>{title} Elements</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  h2 {
    margin: 2.5rem auto 1.5rem;
    color: #1f425e;
    text-shadow: 0 4px 5px rgba(0,0,0,0.4);

  }

  .menu {
    padding: 1rem 0;
    /* min-height: 100vh; */
  }

  .title {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .underline {
    margin: 10px auto 20px;
    width: 5rem;
    height: 0.25rem;
    background: #edca3f;
    margin-left: auto;
    margin-right: auto;
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
`

export default App
