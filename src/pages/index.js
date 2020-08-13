import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h2 >Welcome to Strength Sheets.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/calander-view">Go to Calander View</Link>
    <br></br>
    <Link to="/excercises">Go to Excercices</Link>
    <br></br>
    <Link to="/old-form">Go to Old Form</Link>
  </Layout>
)

export default IndexPage
