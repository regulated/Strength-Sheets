import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MaxesForm from "../components/maxes-form"
import DupTable from "../components/dup-table"
import PeriodizationTable from "../components/periodization-table";
import Test from "../components/test"
  


const CalendarView = ({data}) => (

  <Layout>
    <SEO title="Calendar View" />
    <h2 style={{paddingTop: `10px`}}>Calendar View</h2>

    <Test/>

    <Link style={{color: `#B19CD9`}} to="/exercises">Go to Exercises</Link>
    <br></br>
    <Link style={{color: `#B19CD9`}} to="/">Go Home</Link>
  </Layout>
)

export default CalendarView
