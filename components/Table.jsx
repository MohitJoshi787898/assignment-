"use client"
import { findBYEmail } from "@/lib/actions/form.Action"
import { useState, useEffect } from "react"
const Table = ({ data }) => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {

  }, [])
  const search = async () => {
    const result = await findBYEmail(searchTerm)
    await setUsers(result)

    console.log(users, "hiii")
  }
  return (
    <main className=" w-full flex justify-center form-area flex-col gap-2">
      <div className="form-group flex gap-2">
        <input type="text" className="form-control" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        <button className="w-[100px] rounded-md bg-primary-500" onClick={() => search()}>Submit</button>


      </div>
      <div className="w-full flex bg-slate-500 mt-5 justify-between px-4 py-2 rounded-md">
        <h1>User Name</h1>
        <h1>Email</h1>
        <h1>country</h1>
        <h1>Number</h1>

      </div>
      {
        users?.map((user) => (
          <div key={user._id} className="w-full flex  justify-between rounded-md form-control ">
            <h1 className=" text-center w-[100px]">{user?.userName}</h1>
            <h1 className=" text-center w-[100px]">{user?.email}</h1>
            <h1 className=" text-center w-[100px]">{user?.country}</h1>
            <h1 className=" text-center w-[100px]">{user?.number}</h1>

          </div>
        ))
      }
      {
        data?.map((user) => (
          <div key={user._id} className="w-full flex  justify-between rounded-md form-control ">
            <h1 className=" text-center w-[100px]">{user?.userName}</h1>
            <h1 className=" text-center w-[100px]">{user?.email}</h1>
            <h1 className=" text-center w-[100px]">{user?.country}</h1>
            <h1 className=" text-center w-[100px]">{user?.number}</h1>

          </div>
        ))
      }

    </main>
  )
}

export default Table
