import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DUPprogram from "../components/dup-program"
  


const CalendarView = ({data}) => (

  <Layout>
    <SEO title="DUP Program" />
    <h2 style={{paddingTop: `10px`}}>DUP Program</h2>

    <DUPprogram/>

    <Link style={{color: `#B19CD9`}} to="/exercises">Exercise Selection</Link>
    <br></br>
    <Link style={{color: `#B19CD9`}} to="/">Home</Link>
  </Layout>
)

export default CalendarView
