import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TierList from "../components/tier-list"

const Excercises = () => (

  <Layout>
    <SEO title="Exercises" />
    <h2 style={{paddingTop: `10px`}}>Exercises</h2>

    <TierList/>

        
    <Link style={{color: `#B19CD9`}} to="/calendar-view">Go to Calendar View</Link>
    <br></br>
    <Link style={{color: `#B19CD9`}} to="/">Go Home</Link>
  </Layout>
)

export default Excercises 
