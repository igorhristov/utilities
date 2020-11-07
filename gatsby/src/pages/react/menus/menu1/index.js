import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

import img1 from "./images/item-1.jpeg"
import img2 from "./images/item-2.jpeg"
import img3 from "./images/item-3.jpeg"
import img4 from "./images/item-4.jpeg"
import img5 from "./images/item-5.jpeg"
import img6 from "./images/item-6.jpeg"
import img7 from "./images/item-7.jpeg"
import img8 from "./images/item-8.jpeg"
import img9 from "./images/item-9.jpeg"

const items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: img1,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: img2,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: img3,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: img4,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: img5,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: img6,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: img7,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: img8,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: img9,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

// import Menu from "./Menu"

const Menu = ({ items }) => {
  return (
    <MenuWrapper>
      <div className="section-center">
        {items.map(menuItem => {
          const { id, title, img, desc, price } = menuItem
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          )
        })}
      </div>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  color: hsl(209, 61%, 16%);
  line-height: 1.5;

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;
  }
  .menu-item {
    display: grid;
    gap: 1rem 2rem;
    max-width: 25rem;
  }
  .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid #c59d5f;
    border-radius: 0.25rem;
    /* border: 0.25rem solid var(--clr-gold);
    border-radius: var(--radius); */
    display: block;
  }
  .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted hsl(210, 22%, 49%);
    /* border-bottom: 0.5px dotted var(--clr-grey-5); */
  }
  .item-info h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    /* color: var(--clr-gold); */
    color: #c59d5f;
  }
  .item-text {
    margin-bottom: 0;
    padding-top: 1rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }
    .photo {
      height: 175px;
    }
  }
  @media screen and (min-width: 1200px) {
    .section-center {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
    }
    .photo {
      height: 150px;
    }
  }
`

const Categories = ({ categories, filterItems }) => {
  return (
    <CategoriesWrapper>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </CategoriesWrapper>
  )
}
const CategoriesWrapper = styled.div`
  .btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }
  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: #c59d5f;
    /* color: var(--clr-gold); */
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
    /* transition: var(--transition);
    border-radius: var(--radius); */
  }
  .filter-btn:hover {
    background: #c59d5f;
    color: #fff;
    /* background: var(--clr-gold);
    color: var(--clr-white); */
  }
`

const allCategories = ["all", ...new Set(items.map(item => item.category))]

function App() {
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
    <Layout>
      <AppWrapper>
        <main style={{ minHeight: "100vh" }}>
          <section className="menu section">
            <div className="title">
              <h2>our menu</h2>
              <div className="underline"></div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </section>
        </main>
      </AppWrapper>
    </Layout>
  )
}

const AppWrapper = styled.div`
  background: #f1f5f8;

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
    /* background: var(--clr-grey-10);
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
    /* color: var(--clr-grey-5); */
    color: hsl(210, 22%, 49%);
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
  /*  global classes */

  /* section */
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    /* max-width: var(--max-width); */
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .menu {
    padding: 5rem 0;
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #c59d5f;
    /* background: var(--clr-gold); */
    margin-left: auto;
    margin-right: auto;
  }
`

export default App
