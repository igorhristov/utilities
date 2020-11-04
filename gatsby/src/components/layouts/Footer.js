import React from "react"

const Footer = () => {
  return (
      <footer
        style={{
          padding: '2rem',
          background: 'black',
          color: 'white',
          textAlign: 'center'
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
  )
}

export default Footer
