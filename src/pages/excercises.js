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

        
    <Link style={{color: `#B19CD9`}} to="/calander-view">Go to Calander View</Link>
  </Layout>
)

export default Excercises 
