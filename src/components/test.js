import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"

const Test = () => {


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

  var count = 3

  const [inputs, setInputs] = useState({
    squat: 455,
    bench: 265,
    deadlift: 475,
    ohp: 175
  });


  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const inputValues = Object.values(inputs)


  return (
    
    <div>
    <h2>Form</h2>

    <form onSubmit={handleSubmit}>
      <div>
        <label>squat:</label>
        <input
          type="text"
          name="squat"
          value={inputs.squat}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>bench:</label>
        <input
          type="text"
          name="bench"
          value={inputs.bench}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>deadlift:</label>
        <input
          type="text"
          name="deadlift"
          value={inputs.deadlift}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>ohp:</label>
        <input
          type="text"
          name="ohp"
          value={inputs.ohp}
          onChange={handleInputChange}
          required
        />
      </div>

    </form>
    <button type="submit" onClick={handleSubmit}>Submit</button>

    
    <div class="container">
      <h2>Test</h2>
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
              return <td>{j.node.T1} {data.allDupJson.edges[count%3].node.reps} @ 
              {(inputValues[count%4] * data.allDupJson.edges[count%3].node.perc) - (inputValues[count%4] * data.allDupJson.edges[count%3].node.perc)%5}</td>
            })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Test