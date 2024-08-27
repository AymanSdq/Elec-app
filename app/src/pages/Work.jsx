import React, { useEffect, useState } from 'react'
import TodoForm from '../components/forms/TodoForm';
import axios from 'axios';

function Work() {

  const [listTask, setListTask] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:3366/get/todolist')
        .then(result => {
            setListTask(result.data.todolists);
        })
        .catch(error => {
            console.error("There was an error fetching the todo list!", error);
        });
}, []);


  const electron = window.electron;


  return (
    <div>

      <TodoForm />

      <div className='w-full'>
      {listTask.map((task) => (
                    <li key={task._id}>{task.description}</li>
                ))}

      </div>

    </div>
  )
}

export default Work
