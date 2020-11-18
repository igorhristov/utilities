import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Card = ({ id, category, title, desc, urlLink, img, className }) => {
  return (
    <div className={className}>
      <article key={id + title} className="card">
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
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <h3>{title}</h3>

        <p>{desc}</p>
        <div class="card-footer">
          <Link to={urlLink}>Live</Link>
        </div>
      </article>
    </div>
  )
}

export default styled(Card)`
  .card {
    width: 33.33333vh;
    background: white;
    color: #444;
    transition: all 0.1s ease-in;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.7);
  }

  .thumb {
    padding-bottom: 70%;
    background-size: cover;
    background-position: top center;
  }
  .card:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  h3 {
    padding: 0.71rem 0;
    margin: 0;
    color: #1f425e;
    border-top: 3px solid #1f425e;
    text-align: center;
    font-weight: normal;
    min-height: 9vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  p {
    padding: 0 0.4rem 0.2rem;
    min-height: 6vh;
    display: flex;
    align-items: flex-end;
    text-align: start;
    font-size: 16px;
  }
  .card-footer {
    background: #49a6e9;
    text-align: center;
    
  }

  a {
    display: inline-block;
    background-color: none;
    color: #1f425e;
    font-size: 1.5rem;
    width: 100%;
    transition: all 0.25s linear;
    text-transform: uppercase;
  }

  a:hover {
    color: white;
    background: rgba(0, 0, 0, 0.5);
  }
`
