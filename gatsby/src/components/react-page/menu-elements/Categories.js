import React from "react"
import styled from "styled-components"

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
    display: flex;
    justify-content: center;
  }

  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: #380E3B;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
  }
  .filter-btn:hover {
    background: #edca3f;
    color: white;
  }
`

export default Categories
