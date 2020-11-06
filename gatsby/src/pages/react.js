import React from "react"
import Layout from "../components/layouts/layout"
import MenuApp from "../components/react-page/menu-elements/MenuApp"

import data from "../context/elements-data/react-page-data"
const ReactPage = () => {
  return (
    <Layout>
      <div style={{ minHeight: "calc(100vh - 160px)" }}>
        <MenuApp data={data} title="My React"/>
      </div>
    </Layout>
  )
}

export default ReactPage
