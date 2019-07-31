import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DupTable = () => {

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

  var count = 0

  return (
    <div class="container">
      <h2>Rotating DUP UHF</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            {data.allDaysJson.edges.map((i) => {
              return <th>{i.node.day}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {data.allDupWeeksJson.edges.map((i) => {
            return <tr>
            <th>{i.node.week}</th>
            {data.allDaysJson.edges.map((j) => {
              count++
              // return Lift-Reps-Weights(rounded down to nearest 5)
              return <td>{j.node.T1} {data.allDupJson.edges[count%3].node.reps} @ {(j.node.T1max * data.allDupJson.edges[count%3].node.perc) - (j.node.T1max * data.allDupJson.edges[count%3].node.perc)%5}</td>
            })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DupTable