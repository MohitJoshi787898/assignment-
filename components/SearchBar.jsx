import { useState, useEffect } from "react"

const SearchBar = () => {
    return (
        <div className=' flex w-full items-center h-[100vh] flex-col gap-5'>
            <h1 className="mt-10 font-extrabold text-primary-500 text-5xl">Find Users </h1>
            <div className=" max-w-[700px] flex gap-1">
                <input type="email" className="form-control" placeholder="find by email or user name" name="name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="w-[100px] px-[15px] py-[19px] text-[1rem] bg-primary-500 rounded-md">Search</button>
            </div>

        </div>
    )
}

export default SearchBar
