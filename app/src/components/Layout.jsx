import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (

    <section className=' px-24'>

          {/* The Header of the page */}
          <div className='w-full  py-8 flex justify-between items-center'>

            <h1 className='text-xl font-bold'><a href="/">Electron app</a></h1>

          <div>
              <ul className='flex gap-8 items-center'>

                <li className='text-md'><a href="/work">Work</a></li>

                <li className='text-md'><a href="/">Parent</a></li>

                <img src="/computer.webp" alt="User" className='w-10 h-10 rounded-full' />

              </ul>
          </div>

          </div>



          <Outlet />
    </section>

  )
}

export default Layout
