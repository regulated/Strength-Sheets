import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TierList = () => {

  const data = useStaticQuery(graphql`
    query {
      allTiersJson {
        edges {
          node {
            T1
            T2a
          }
        }
      }
    }
  `) 

  return (
    <div class="container">
      <h2>Rotating DUP UHF</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            {data.allTiersJson.edges.map((i) => {
              return <th>Day</th>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.allTiersJson.edges.map((i) => {
              return <th>{i.node.T1} </th>
            })}
           </tr>
           <tr>
            {data.allTiersJson.edges.map((i) => {
              return <th>{i.node.T2a} </th>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TierList 
