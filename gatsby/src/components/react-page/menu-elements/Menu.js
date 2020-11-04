import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = ({ items }) => {
  return (
    <MenuWrapper>
      <section class="cards">
        <div className="cards-center">
          {items.map((menuItem, ix) => {
            const { id, title, img, desc, urlLink, category } = menuItem
            return (
              <article key={id + title + ix} className="card">
                <span
                  style={{
                    position: "absolute",
                    background: "none",
                    border: "none",
                    padding: "0.2rem 0",
                    marginTop: "-1.9rem",
                    color: "#380E3B",
                    fontWeight: "bold",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  {category}
                </span>
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <h3>{title}</h3>

                <p>{desc}</p>
                <div class="card-footer">
                  <Link to={urlLink} className="filter-btn">
                    Live
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  .filter-btn {
    display: block;
    width: 100%;
    border: none;
    background-color: #380e3b;
    color: #edca3f;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s linear;
  }
  .filter-btn:hover {
    background: #edca3f;
    color: #380e3b;
  }

  img {
    width: 100%;
    display: block;
  }

  .title {
    text-align: center;
  }

  .cards-center {
    margin: 3rem auto;
  }
  .card {
    background: white;
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    color: #444;
    transition: all 0.1s ease-in;
    /* border: 1px solid #380e3b; */
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.7);
  }

  .thumb {
    padding-bottom: 70%;
    background-size: cover;
    background-position: top center;
    border-bottom: 5px solid #380e3b;
  }
  .card:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  h3 {
    padding: 0.71rem;
    color: #1f425e;
    flex: 1;
  }
  p {
    padding: 0.5rem;
    flex: 1;
  }
  .card-footer {
    background: darkgray;
    /* padding: 0.5rem 1rem; */
    /* display: grid; */
    /* grid-template-columns: repeat(4, 1fr); */
    /* justify-items: center; */
  }

  /* .card-footer span {
    color: var(--primaryColor);
  } */

  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
  .cards-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }
`

export default Menu
