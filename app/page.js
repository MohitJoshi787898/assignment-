"use client"
import CounteryCode from '@/components/CounteryCode'
import { sumbitForm } from '@/lib/actions/form.Action'
import { connectToDB } from '@/lib/database'


import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [password,setPassword]=useState('')
  const [country,setCountry]=useState('IN')
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    sumbitForm({name,email,number,password,country})
  }


  return (

    <main className=' flex w-full h-full items-center justify-center flex-col bg-background-color gap-5'>

        <h1 className='mt-10 font-extrabold text-primary-500 text-5xl'>User Details</h1>

      <div className=" flex justify-center items-center flex-col w-full ">




        <form className=' flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder=" Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" name="name" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
         
          <div className="flex w-full justify-center items-center form-group" >
            <CounteryCode className="form-countery" country={country} setCountry={setCountry} />
            <input type="text" className="form-control " placeholder="Number" value={number} onChange={(e)=>setNumber(e.target.value)}  />
          </div>
          
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="submit" className=" bg-primary-500 rounded-md text-white h-[40px]">Submit</button>
        </form>
      </div>
    </main>
  )
}
