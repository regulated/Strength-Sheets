import React from 'React'
import SetMaxes from "../components/set-maxes"
//import {days, weeks, dupWeeks, dup, count} from "../components/objects"


const MaxesForm = () => {
  return(
    <div class="container">
      <h2>Enter Current Maxes</h2>
        <form onSubmit={SetMaxes.handleSubmit}>
          <div>
            <label>Squat:</label>
            <input type="number" name="Squat" value={SetMaxes.inputs.Squat} onChange={SetMaxes.handleInputChange} required/>
          </div>
          <div>
            <label>Bench:</label>
            <input type="number" name="Bench" value={SetMaxes.inputs.Bench} onChange={SetMaxes.handleInputChange} required/>
          </div>
          <div>
            <label>Deadlift:</label>
            <input type="number" name="Deadlift" value={SetMaxes.inputs.Deadlift} onChange={SetMaxes.handleInputChange} required/>
          </div>
          <div>
            <label>OHP:</label>
            <input type="number" name="OHP" value={SetMaxes.inputs.OHP} onChange={SetMaxes.handleInputChange} required/>
          </div>
          <button type="submit">Enter Maxes</button>
        </form>
    </div>
  )
}

export default MaxesForm