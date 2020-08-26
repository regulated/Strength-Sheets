import React from 'react'
//import { useStaticQuery, graphql } from "gatsby"
import GetMaxes from "../components/get-maxes"

const MaxesForm = () => {

  /*const data = useStaticQuery(graphql`
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
*/

  const EnterData = () => {
      alert(`Max Entered!
              Squat: ${inputs.Squat},
              Bench: ${inputs.Bench},
              Deadlift: ${inputs.Deadlift},
              OHP: ${inputs.OHP}
      `)
      // use a graphql transform or a useEffect here maybe 
      /*
      data.allDaysJson.edges[0].node.T1max = inputs.Squat
      data.allDaysJson.edges[1].node.T1max = inputs.Bench
      data.allDaysJson.edges[2].node.T1max = inputs.Deadlift
      data.allDaysJson.edges[3].node.T1max = inputs.OHP
      */
  }

  const {inputs, handleInputChange, handleSubmit} = GetMaxes({Squat: 100,Bench: 100,Deadlift: 100,OHP: 100,}, EnterData)

  return(
    <div class="container">
      <h2>Enter Training Maxes</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Squat:</label>
            <input type="number" name="Squat" value={inputs.Squat} onChange={handleInputChange} required/>
          </div>
          <div>
            <label>Bench:</label>
            <input type="number" name="Bench" value={inputs.Bench} onChange={handleInputChange} required/>
          </div>
          <div>
            <label>Deadlift:</label>
            <input type="number" name="Deadlift" value={inputs.Deadlift} onChange={handleInputChange} required/>
          </div>
          <div>
            <label>OHP:</label>
            <input type="number" name="OHP" value={inputs.OHP} onChange={handleInputChange} required/>
          </div>
          <button type="submit">Enter Maxes</button>
        </form>
    </div>
  )
}

export default MaxesForm
