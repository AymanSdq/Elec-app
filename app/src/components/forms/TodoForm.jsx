import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

function TodoForm() {

  // ipcRenderer
  const ipcRenderer = window.ipcRenderer;

  // The initial value of the form
  const [descValue , setDescValue] = useState("");

  const handleChange = (event) => {
    setDescValue(event.target.value)
  }

  // On submit function
  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log(descValue);

    ipcRenderer.send("submit:todoForm", descValue)
  }




  return (
    <div>

      <form onSubmit={handleSubmit}>

          <input value={descValue} onChange={handleChange} name='description' id='description' />

          <button type="submit">Submit</button>

      </form>

    </div>
  )

}

export default TodoForm
