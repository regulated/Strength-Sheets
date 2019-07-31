import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import { days, weeks, dupWeeks, dup, count } from  "../components/objects"
import MaxesForm from "../components/maxes-form"
import DupTable from "../components/dup-table"
  


const CalanderView = ({data}) => (

//  console.log(data)

  <Layout>
    <SEO title="Calander View" />
    <h1>Calander View</h1>

    <DupTable/>
    {/*<MaxesForm/>
    */}

    <div class="container">
      <h2>12 Week Periodization</h2>
      <table class="table table-bordered">

        <thead>
          <tr>
            <th></th>
            {data.allDaysJson.edges.map((value) => {
              return <th>{value.node.day}</th>
            })}
          </tr>
        </thead>

        <tbody>
          {data.allWeeksJson.edges.map((value) => {
            return <tr>
            <th>{value.node.week}</th>
            {data.allDaysJson.edges.map((array) => {
              // return Lift-Reps-Weights(rounded down to nearest 5)
              return <td>{array.node.T1} {
                         value.node.T1reps} @ {
                         (value.node.T1perc * array.node.T1max)-(value.node.T1perc * array.node.T1max)%5}</td>
            })}
            </tr>
          })}
        </tbody>

      </table>
    </div>

    <br></br>
        
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CalanderView

export const query = graphql`
  query {
    allDaysJson {
      edges {
        node {
          T1
          T1max
          day
        }
      }
    }
    allWeeksJson {
      edges {
        node {
          T1perc
          T1reps
          week
        }
      }
    }
    allDupWeeksJson {
      edges {
        node {
          week
        }
      }
    }
    allDupJson {
      edges {
        node {
          perc
          reps
        }
      }
    }
  }`


