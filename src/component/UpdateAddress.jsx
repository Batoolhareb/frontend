import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateAddress() {
  const { id } = useParams();
  const [data, setData] = useState({
    Location:[{Country:'',
    Porvince:'',
    city:'',
    Address:''},{Link:''}]
    
  });

  const handledata = (e) => {
    const newdata = { ...location };
    newdata[e.target.id] = e.target.value;
    setData(newdata)
    console.log(newdata)
  }


  const updateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:3000/api/changeEventLocation/${id}`, data);
      console.log('done')

    } catch (err) { console.log(err.message) }
  }
  const loading = async () => {
    const response = await axios.get(`http://localhost:3000/api/alleventsByid/${id}`);
    setData(response.data)
    setlocation(response.data.Location[0])
    console.log(response.data.Location)
  }
  const [location, setlocation] = useState({})
  useEffect(() => {
    loading();

  }, [])



  return (
    <>

      <div className='Container'>
        <div className='warpper'>
          <div className='Contact'>
            <span>Country</span>
            <input type='text' name='Country' id='Country' className='' onChange={handledata} defaultValue={location.Country} />
          </div>
          <div className='Contact'>
            <span>Porvince</span>
            <input type="text" id='Porvince' name='Porvince' onChange={handledata} defaultValue={location.Porvince}/>
          </div>
          <div className='Contact'>
            <span>City</span>
            <input type='text' id='City' className='' name='City' onChange={handledata} defaultValue={location.City} />
          </div>
          <div className='Contact'>
            <span>Address</span>
            <input type='text' id='Address' className='' name='Address' onChange={handledata} defaultValue={location.Address} />
          </div>
          <div className='Contact'>
            <span>Link</span>
            <input type='text' id='Link' className='' name='Link' onChange={handledata} defaultValue={location.Link} />
          </div>
          <div className='buttonSubmit'>
            <button onClick={updateSubmit} >UpdateAdress</button>
          </div>
        </div>

      </div>
    </>

  )
}
