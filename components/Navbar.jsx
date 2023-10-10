
import Link from 'next/link'



const Navbar = () => {
   
  return (
    <div className=' w-[100vw] flex justify-between items-center h-[50px] px-[10px] bg-slate-500 '>   
    <h1>
        Snaabb-tech
        </h1> 
        <div className=' flex gap-2'>

        <Link className=' bg-primary-500 w-[100px] rounded-md h-[30px] justify-center items-center flex ' href='/'>Add User</Link>
        <Link className=' bg-primary-500 w-[100px] rounded-md flex items-center justify-center' href='/find-user'>Find</Link>
        </div>
         
    
 
    </div>
  )
}

export default Navbar
