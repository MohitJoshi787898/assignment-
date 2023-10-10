import { findAll, findBYEmail } from "@/lib/actions/form.Action"
import Table from "@/components/Table"




const page =async () => {

  
    const data=await findAll()
    console.log(data,"data")


    // useEffect( () =>{

    // setUsers(findAll())
    //     console.log(users)
    // },[])

  

    return (
        <div className=' flex w-full  items-center  flex-col'>
            <div className=" w-full max-w-[900px] flex items-center flex-col mt-[10px] gap-5">

            <h1 className="font-extrabold text-primary-500 text-5xl">Find Users </h1>
            <Table data={data}/>
            </div>
        </div>
    )
}

export default page
