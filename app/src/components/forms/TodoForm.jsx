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
    <div className='w-full shadow-lg border rounded-md my-6 py-8'>

      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>

          <input placeholder='Description ' className='border-2 w-[80%] px-4 py-2 rounded ' value={descValue} onChange={handleChange} name='description' id='description' />

          <button className="bg-green-600  w-[50%] py-2 text-white rounded-lg" type="submit">Submit</button>

      </form>

    </div>
  )

}

export default TodoForm
