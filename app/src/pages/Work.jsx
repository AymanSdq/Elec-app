import React from 'react'
import TodoForm from '../components/forms/TodoForm';

function Work() {


  const electron = window.electron;


  return (
    <div>
      <p>The Home directory is on : {electron.homeDir()} </p>
      <p>The Version of the PC is : {electron.osVersion()}</p>
      <p>The Architect of the PC is : {electron.arch()} bits</p>

      <TodoForm />

    </div>
  )
}

export default Work
