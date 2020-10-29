import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ paddingTop: `10px`}}>Welcome to Strength Sheets.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <div style={{position: `relative`, bottom: 0, left: 0}}>
    <Link style={{color: `#B19CD9`}} to="/calendar-view">DUP Program</Link>
    <br></br>
    <Link style={{color: `#B19CD9`}} to="/exercises">Exercise Selection</Link>
    </div>
    {/*<br></br>
    <Link style={{color: `#B19CD9`}} to="/old-form">Go to Old Form</Link>
    */}
  </Layout>
)

export default IndexPage
