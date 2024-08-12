import React, { useEffect, useState } from 'react'
const generated=()=>{
    return Math.floor(Math.random()*100)
}
export default function Todolist() {
    useEffect(()=>{
document.body.style.backgroundColor='#F8F9FA'
    },[])
    const[todos,setTodos]=useState([])
    const[input,setInput]=useState('')
    const handlesubmit=()=>{
        setTodos(todos=>
            todos.concat({
                text:input,
                id:generated(),
            })
        )
            setInput("")
       
    }
    const RemoveTodo=(id)=>{
        setTodos(todos=>todos.filter((remove)=>remove.id !==id));
    }
  return (
    <div className='  mt-[6rem] w-[700px] h-[400px] mx-auto space-y-4 relative '>
      <h1 className=' text-center my-[3rem] text-[2.6rem] font-semibold '>To 
        <span className='text-blue-500'> Do App</span></h1>
      <div className=" ">
        <input 
        className=' w-[300px] h-[46px] bg-gray-200
         rounded-md px-3 '
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Make To Do'
         />
      </div>
      <button className=' py-2 px-6 bg-blue-500 text-white rounded-sm' onClick={handlesubmit}>Add</button>
      <div className="grid grid-cols-2 grid-row-2 space-y-3 items-center   ">
        {
            todos.map(({text,id})=>{
           return     <li key={id} className=' list-none  bg-white w-[300px] 
             h-[160px] rounded-md px-2 border-2 border-gray-300 space-y-2'>
                    <span className=''>{text} </span> <br />
                   <div className="">
                   <button className='py-1 px-3 rounded-md mt-[3rem] bg-red-500 text-white  '
                    onClick={()=> RemoveTodo(id)}>remove</button>
                   </div>
                </li>
            })
        }
      </div>
    </div>
  )
}
