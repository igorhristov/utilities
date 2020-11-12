import React from "react"
import styled from "styled-components"
import Card from "./Card"

const Menu = ({ items }) => {
  return (
    <MenuWrapper>
      <section class="cards">
        <div className="cards-center">
          {items.map((menuItem, ix) => {
            const { id, title, img, desc, urlLink, category } = menuItem
            return <Card {...{ id, title, img, desc, urlLink, category }} />
          })}
        </div>
      </section>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  .cards-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    margin: 3rem auto;
  }
`

export default Menu
