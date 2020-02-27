import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TierList from "../components/tier-list"

const Excercises = () => (

  <Layout>
    <SEO title="Excercises" />
    <h1>Excercises</h1>

    <TierList/>

        
    <Link to="/calander-view">Go to Calander View</Link>
  </Layout>
)

export default Excercises 
