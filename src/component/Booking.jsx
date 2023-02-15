import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link ,useParams } from 'react-router-dom';
import './Css/booking.css';

export default function Booking() {
  const {id} = useParams();
   const gettickets = async()=>{
    try{
           const findticket = await axios.get(`http://localhost:3000/api/book/${id}`)
           setBooking(findticket.data)
           setId(findticket.data.Event)
              
    }
    catch(err){
      console.log(err.message)
    }
   }
   const[book , setBooking] = useState({})
   const[Id, setId] = useState(); 
   const[tires , setTires] =useState({})
   const [Event , setEvent] = useState({})
   const getevent = async()=>{
    try{
          const getdata=await axios.get(`http://localhost:3000/api/alleventsByid/${Id}`)
          setTires(getdata.data.Tires[0])  
          setEvent(getdata.data)
    }
    catch(err){
          console.log(err.message)
    }
  }
   useEffect(()=>{
    gettickets();
    getevent();
   },[Id])

   const deleteTicket = async()=>{
    try{
         const Ticketdelete = await axios.delete(`http://localhost:3000/api/book/${id}`)
         console.log('ticket cancled')
    }
    catch(err){
      console.log(err.message)

    }
}

  return (
    <div class="box">
		<div class='inner'>
		<h1>{Event.Title}</h1>
		<div class='info clearfix'>
			<div class='wp'>Tickets<h2>{book.TicketBooked}</h2></div>
			<div class='wp'>Type<h2>{tires.TitleTires}</h2></div>
			<div class='wp'>INVITATION No.<h2>{book.INVITATION}</h2></div>
		</div>
		<div class='total clearfix'>
			<h2>Total : <p>$ {book.TotalPrice}</p></h2>
		</div>
    <div><Link  to="/" onClick={deleteTicket}>Cancele</Link></div>
		</div>
	</div>
  )
}
