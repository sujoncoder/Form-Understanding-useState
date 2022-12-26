import React, { useState } from 'react'

const ShortForm = () => {
  // useState
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // event handler
  const submision = (event) => {
    event.preventDefault()
    const data = {
      fname,
      lname,
      email,
      password
    }
  console.log(data);
  }
    
    const fastName = (e) => {
      setLname(e.target.value)
    }
  
    const lastName = (e) => {
      setFname(e.target.value)
    }
  
    const emailer = (e) => {
      setEmail(e.target.value)
    }
  
    const passcode = (e) => {
      setPassword(e.target.value);
    }
  

  return (
    <div className='flex h-screen items-center justify-center'>
      <form onSubmit={submision}>
        <div className='border p-8 rounded shadow space-y-2 border-t-cyan-200 border-b-red-300 border-l-yellow-200 border-r-gray-400'>

          <div>
            <h1 className='text-center text-lg mb-10 underline text-pink-500'>Short form using useReducer</h1>
          </div>
          
          <div>
            <label className='text-lg text-gray-600' htmlFor="firstName">First Name</label><br />
            <input onBlur={fastName} className='border px-2 rounded h-8 w-60 text-slate-600' type="text" name='firstName' />
          </div>

          <div>
            <label className='text-lg text-gray-600' htmlFor="laststName">Last Name</label><br />
            <input onBlur={lastName} className='border px-2 text-slate-600 rounded h-8 w-60' type="text" name='lastName' />
          </div>

          <div>
            <label className='text-lg text-gray-600' htmlFor="email">Email</label><br />
            <input onBlur={emailer} className='border px-2 rounded text-slate-600 h-8 w-60' type="email" name='email' />
          </div>

          <div>
            <label className='text-lg text-gray-600' htmlFor="password">Password</label><br />
            <input onBlur={passcode} className='border px-2 rounded h-8 w-60 text-slate-600' type="password" name='password' />
          </div>

          <div>
            <button className='border p-2 rounded bg-blue-300 mt-4 active:bg-blue-400' type='submit'>Submit</button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default ShortForm