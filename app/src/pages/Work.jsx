import React, { useState } from 'react'
import TodoForm from '../components/forms/TodoForm';
import axios from 'axios';

function Work() {




  axios.get("http://localhost:3366/get/todolist")
    .then(result => {
      const listTask = result.data.todolists
      console.log(listTask[0])

    }).catch(error => {
      console.log(error)
    })



  const electron = window.electron;


  return (
    <div>

      <TodoForm />

      <div className='w-full'>


      </div>

    </div>
  )
}

export default Work
