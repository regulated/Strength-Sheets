import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PeriodizationTable = () => {

  const data = useStaticQuery(graphql`
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
    }
  `) 

  return (
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
    <br></br>
    </div>
  )
}

export default PeriodizationTable