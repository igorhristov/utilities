import React from "react"
import Layout from "../components/layouts/layout"
import MenuApp from "../components/react-page/menu-elements/MenuApp"
import data from "../context/elements-data/javascript-page-data"

const JavaScriptPage = () => {
  return (
    <Layout>
      <div style={{ minHeight: "calc(100vh - 160px)" }}>
        <MenuApp data={data} title="JavaScript"/>

      </div>
    </Layout>
  )
}

export default JavaScriptPage
