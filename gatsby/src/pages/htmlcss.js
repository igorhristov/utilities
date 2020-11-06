import React from 'react'
import Layout from '../components/layouts/layout'
import MenuApp from "../components/react-page/menu-elements/MenuApp"
import data from "../context/elements-data/htmlcss-page-data"

const HTMLCSSPage = () => {
    return (
        <Layout>
      <div style={{ minHeight: "calc(100vh - 160px)" }}>
        <MenuApp data={data} title="HTML/CSS3"/>
      </div>
    </Layout>
    )
}

export default HTMLCSSPage
