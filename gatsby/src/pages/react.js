import React from "react"
import Layout from "../components/layouts/layout"
import MenuApp from "../components/react-page/menu-elements/MenuApp"
const ReactPage = () => {
  return (
    <Layout>
      <div style={{ minHeight: "calc(100vh - 160px)", }}>
        <MenuApp />
      </div>
    </Layout>
  )
}

export default ReactPage
