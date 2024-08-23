import React from 'react'

function IndexPage() {

  return (
    <>
    <section className='flex w-full justify-center flex-col shadow-md rounded'>
      <h1 className='text-2xl text-center font-semibold bg-slate-500 py-1 px-4 rounded-t text-white'>TodoList</h1>
      <div className='px-4 py-6'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit iste nostrum reprehenderit adipisci est nesciunt dolor molestiae expedita! Vero excepturi rem fugit inventore a consequuntur voluptas, quisquam animi cum.</p>
      </div>
    </section>

    <div className='w-full flex justify-between items-center py-12'>

      <div className='w-24 h-24 border flex justify-center items-center  rounded shadow-lg'>
        <img src="/todo.svg" alt="Todo List" className='w-12 h-12' />
      </div>

      <div className='w-24 h-24 border flex justify-center items-center  rounded shadow-lg'>
        <img src="/productive.svg" alt="Todo List" className='w-12 h-12' />
      </div>

      <div className='w-24 h-24 border flex justify-center items-center  rounded shadow-lg'>
        <img src="/timer.svg" alt="Todo List" className='w-12 h-12' />
      </div>

      <div className='w-24 h-24 border flex justify-center items-center  rounded shadow-lg'>
        <img src="/cup.svg" alt="Todo List" className='w-12 h-12' />
      </div>

    </div>

    </>

  )

}

export default IndexPage
