import React from 'React'
import {days, weeks, dupWeeks, dup, count} from "../components/objects"
import GetMaxes from "../components/get-maxes"

const SetMaxes = () => {

    const EnterData = () => {
        alert(`Max Entered!
                Squat: ${inputs.Squat},
                Bench: ${inputs.Bench},
                Deadlift: ${inputs.Deadlift},
                OHP: ${inputs.OHP}
        `)
        days[0].T1max = inputs.Squat
        days[1].T1max = inputs.Bench
        days[2].T1max = inputs.Deadlift
        days[3].T1max = inputs.OHP
    }

    const {inputs, handleInputChange, handleSubmit} = GetMaxes({Squat: 100,Bench: 100,Deadlift: 100,OHP: 100,}, EnterData)

    return (
        inputs,
        handleInputChange,
        handleSubmit
    )
}

export default SetMaxes