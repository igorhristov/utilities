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
    display: flex;

    margin: 4.5rem 0;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.9rem 1.5rem;

    min-height: 56vh;
  }
`

export default Menu
