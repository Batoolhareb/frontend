import React,{useState} from 'react';

export default function Searchbar({event ,setEvent}) {

 const handleSearch =(e)=>{
  if(!e.target.value) return setEvent(event)
  console.log(e.target.value)
   const search = event.filter(item => item.Title.includes(e.target.value))
   setEvent(search)
   
   console.log(event)
 }

return (
    <>
      <div className='m-4 flex justify-center'><input type='text' id='Title' onChange={handleSearch} className='border-2 rounded-md w-96' /></div>
    </>
  
)
}
