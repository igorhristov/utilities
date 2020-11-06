import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaTimes, FaBars } from "react-icons/fa"
import { social, links } from "./data"
// import logo from "./logo.svg"
import logo from "../../../../images/gatsby-icon.png"

// import Sidebar from "./Sidebar"

// import './index.css'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

// import { useGlobalContext } from "./context"
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <ModalWrapper>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <h3>modal content</h3>
          <p>pisi tuka se </p>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}
const ModalWrapper = styled.div`
  /*
=============== 
Global Styles
===============
*/

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
    background: hsl(210, 36%, 96%);
    color: hsl(209, 61%, 16%);
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
    letter-spacing: 0.1rem;
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
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
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

  /*
=============== 
Modal
===============
*/
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: white;
    border-radius: 0.25rem;
    /* background: var(--clr-white);
    border-radius: var(--radius); */
    width: 90vw;
    height: 30vh;
    max-width: 620px;
    /* max-width: var(--fixed-width); */
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    /* color: var(--clr-red-dark); */
    cursor: pointer;
  }
`

// import { useGlobalContext } from "./context"
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  return (
    <HomeWrapper>
      <main>
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <button onClick={openModal} className="btn">
          show modal
        </button>
      </main>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  /*
=============== 
Global Styles
===============
*/

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
    background: hsl(210, 36%, 96%);
    color: hsl(209, 61%, 16%);
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
    letter-spacing: 0.1rem;
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
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
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

  /*
=============== 
Home
===============
*/

  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sidebar-toggle {
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    /* color: var(--clr-primary-5);
    transition: var(--transition); */
    cursor: pointer;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .btn {
    text-transform: uppercase;
    /* background: var(--clr-black);
    color: var(--clr-white); */
    background: #222;
    color: white;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
    display: inline-block;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
    font-size: 0.875rem;
    border: 2px solid #222;
    /* border: 2px solid var(--clr-black); */
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    /* border-radius: var(--radius); */
    border-radius: 0.25rem;
    margin: 0.5rem;
  }
  .btn:hover {
    color: #222;
    /* color: var(--clr-black); */
    background: transparent;
  }
`

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <SideBarWrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="coding addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(link => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <Link to={url}>
                  {icon}
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className="social-icons">
          {social.map(link => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </aside>
    </SideBarWrapper>
  )
}

const SideBarWrapper = styled.div`
  /*
=============== 
Global Styles
===============
*/

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
    background: hsl(210, 36%, 96%);
    color: hsl(209, 61%, 16%);
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
    letter-spacing: 0.1rem;
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
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
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

  /*
=============== 
Sidebar
===============
*/
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    /* color: var(--clr-primary-5);
  transition: var(--transition); */
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    /* color: var(--clr-red-dark); */
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: hsl(360, 71%, 66%);
    /* color: var(--clr-red-light); */
  }
  .logo {
    justify-self: center;
    height: 40px;
  }

  .links a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: hsl(209, 34%, 30%);
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
    /* color: var(--clr-grey-3);
  transition: var(--transition);
  letter-spacing: var(--spacing); */
  }

  .links a:hover {
    background: hsl(210, 36%, 96%);
    color: hsl(211, 39%, 23%);
    /* background: var(--clr-grey-10);
  color: var(--clr-grey-2); */
  }
  .links a svg {
    font-size: 1.5rem;
    /* color: var(--clr-grey-5); */
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
    margin-right: 1rem;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
  }
  .links a:hover svg {
    color: hsl(209, 28%, 39%);
    /* color: var(--clr-grey-4); */
  }
  .social-icons {
    justify-self: center;
    display: flex;
    padding-bottom: 2rem;
  }
  .social-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    /* color: var(--clr-primary-5);
  transition: var(--transition); */
  }
  .social-icons a:hover {
    color: hsl(205, 86%, 17%);
    /* color: var(--clr-primary-1); */
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    /* background: var(--clr-white); */
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    /* box-shadow: var(--clr-red-dark);
  transition: var(--transition); */
    box-shadow: hsl(360, 67%, 44%);
    transition: all 0.3s linear;
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
  }
  @media screen and (min-width: 676px) {
    .sidebar {
      width: 400px;
    }
  }
`

// import { AppProvider } from "./context"
function App() {
  return (
    <>
      <div style={{ background: "#F1F5F8" }}>
        <AppProvider>
          <Home />

          <Modal />
          <Sidebar />
        </AppProvider>
      </div>
    </>
  )
}

export default App
