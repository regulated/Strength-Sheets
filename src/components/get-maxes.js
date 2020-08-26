/*
This component contains a list of drop down boxes for the user to enter in
their max lifts under the label of the lift
*/
import {useState} from "react"

const GetMaxes = (initialValues, callback) => {

  const [inputs, setInputs] = useState(initialValues)

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    callback()
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  return {
    inputs,
    handleInputChange,
    handleSubmit
  }
}

export default GetMaxes