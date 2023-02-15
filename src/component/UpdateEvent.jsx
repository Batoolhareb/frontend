import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateEvent() {
    const {id} = useParams();
    const [data, setData] = useState({
      Title:'',
      Desc:'',
      Date:''
    });
    
      const handledata = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata)
        console.log(newdata)
      }
        
     
      const updateSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.patch(`http://localhost:3000/api/updateEvent/${id}`,data);
          
        }catch(err){console.log(err.message)}
     }
     const loading = async()=>{
      const response =  await axios.get(`http://localhost:3000/api/alleventsByid/${id}`);
      setData(response.data)
      console.log(response.data)
     }
     useEffect(() => {
      loading();

  },[])
    
  

  return (
    <>
    
     <div className='is-flex  is-flex-wrap-wrap is-justify-content-center'>
      <div className='is-flex is-flex-direction-column is-justify-content-space-between p-6 WarpperForm m-4'>
        <div className='is-flex is-flex-direction-column'>
          <span>Title</span>
          <input type='text' name='Title' id='Title' onChange={handledata} defaultValue={data.Title} className='input is-warning p-4' />
        </div>
        <div className='is-flex is-flex-direction-column'>
          <span>Descriptaion</span>
          <textarea id='Desc' onChange={handledata} name="desc" className='textarea is-warning p-4' defaultValue={data.Desc} ></textarea>
          
        </div>
        <div className='is-flex is-flex-direction-column'>
          <span>Date</span>
          <input type='text' id='Date' className='input is-warning p-4 mb-4' name='Date' onChange={handledata} defaultValue={data.Date} />
        </div>
        <div className='is-flex is-flex-direction-column'>
          <button onClick={updateSubmit} >Update Event</button>
        </div>
      </div>

    </div>
    </>
   
  )
}
