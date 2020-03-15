import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MaxesForm from "../components/maxes-form"
import DupTable from "../components/dup-table"
import PeriodizationTable from "../components/periodization-table";
  


const CalanderView = ({data}) => (

  <Layout>
    <SEO title="Calander View" />
    <h1>Calander View</h1>

    <MaxesForm/>

    <DupTable/>
    
    <PeriodizationTable/>
        
    <Link to="/excercises">Go to Excercices</Link>
  </Layout>
)

export default CalanderView
