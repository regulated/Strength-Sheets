import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TierList = () => {

  const data = useStaticQuery(graphql`
    query {
      allTiersJson {
        edges {
          node {
            Tier
            Lift
          }
        }
      }
    }
  `) 

  return (
    <div class="container">
      <table class="table table-bordered">
       {/* <thead>
          <tr>
            <th></th>
            {data.allTiersJson.edges.map((i) => {
              return <th>Day</th>
            })}
          </tr>
        </thead>
          */}
        <tbody>
          {data.allTiersJson.edges.map((i) => {
            return <tr>
              <td>{i.node.Tier}</td>
              {i.node.Lift.map((j) => {
                return <td>{j}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TierList 
