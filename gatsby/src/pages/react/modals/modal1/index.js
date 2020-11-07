import React, { useState, useContext } from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import Layout from "../../../../components/layouts/layout"

// import './index.css'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
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
  const { openModal } = useGlobalContext()
  return (
    <HomeWrapper>
      <main>
        {/* <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button> */}
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
  /* .sidebar-toggle {
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear; */
  /* color: var(--clr-primary-5);
    transition: var(--transition); */
  /* cursor: pointer;
    animation: bounce 2s ease-in-out infinite;
  } */

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

// import { AppProvider } from "./context"
function App() {
  return (
    <>
      <Layout>
        <AppProvider>
          <Home />
          <Modal />
        </AppProvider>
      </Layout>
    </>
  )
}

export default App
