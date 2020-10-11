import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./calander-view.css"

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
    squat: 100,
    bench: 100,
    deadlift: 100,
    ohp: 100
  });

  const [display, setDisplay] = useState({
    squat: 100,
    bench: 100,
    deadlift: 100,
    ohp: 100
  });


  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    event.persist();
    setDisplay(display => ({
      ...display,
      squat: inputs.squat,
      bench: inputs.bench,
      deadlift: inputs.deadlift,
      ohp: inputs.ohp,
    }))
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const inputValues = Object.values(display)


  return (
    
    <div>

    <div class="wrapper">

    <div class="inner-1">
      <p>
        Enter your current max lifts to see your daily undulating periorized program.
        <br></br>
        <br></br>
        The program cycles through 3 differend days over a 4 week periorized
        <br></br>
        <br></br>
        High Volume:   3 sets of 8 reps at 80% of max<br></br>
        Medium Volume: 4 sets of 5 reps at 85% of max<br></br>
        Low Volume:    5 sets of 3 reps at 90% of max<br></br>
      </p>
    </div>


    <form onSubmit={handleSubmit}>
      <div class="inner-2">
        <label>Squat:</label>
        <input
          type="text"
          name="squat"
          value={inputs.squat}
          onChange={handleInputChange}
          required
        />
      </div>

      <div class="inner-2">
        <label>Bench:</label>
        <input
          type="text"
          name="bench"
          value={inputs.bench}
          onChange={handleInputChange}
          required
        />
      </div>

      <div class="inner-2">
        <label>Deadlift:</label>
        <input
          type="text"
          name="deadlift"
          value={inputs.deadlift}
          onChange={handleInputChange}
          required
        />
      </div>

      <div class="inner-2">
        <label>OHP:</label>
        <input
          type="text"
          name="ohp"
          value={inputs.ohp}
          onChange={handleInputChange}
          required
        />
      </div>

      <div class="inner-2">
        <button style={{backgroundColor: "#B19CD9"}} type="submit" onClick={handleSubmit}>Submit</button>
      </div>

    </form>


    </div>

    
    <div class="container">
      <table class="table">
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
              return <td>{j.node.T1} {data.allDupJson.edges[(count-1)%3].node.reps} @ 
              {(inputValues[count%4] * data.allDupJson.edges[(count-1)%3].node.perc) - (inputValues[count%4] * data.allDupJson.edges[(count-1)%3].node.perc)%5}</td>
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