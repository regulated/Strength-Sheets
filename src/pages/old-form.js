import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MaxesForm from "../components/maxes-form"
import DupTable from "../components/dup-table"
import PeriodizationTable from "../components/periodization-table";
  


const OldForm = ({data}) => (

  <Layout>
    <SEO title="Old Form" />
    <h1>Old Form</h1>

    <MaxesForm/>

    <DupTable/>
    
    <PeriodizationTable/>
        
    <Link to="/">Go Home</Link>
  </Layout>
)

export default OldForm
