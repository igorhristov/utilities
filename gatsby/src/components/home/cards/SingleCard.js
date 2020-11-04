import React from 'react'
import styled from 'styled-components'

const SingleCard = () => {
    return (
        <article className="card">
          <img
            src="https://www.bloginfohub.com/wp-content/uploads/2020/07/Why-React-JS-is-a-popular-choice-of-web-development-in-2020.png"
            alt=""
          />

          <div className="card-info">
            <h3>card title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              voluptates doloribus
            </p>
          </div>

          <div className="card-footer">
            <span>
              <Link className="myButton">React</Link>
            </span>
          </div>
        </article>
    )
}



export default styled(SingleCard)`



`;
