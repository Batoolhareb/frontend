import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
//show address details and style//

export default function Eventprofile() {
   const { id } = useParams();

   const getData = async () => {
      const res = await axios.get(`http://localhost:3000/api/alleventsByid/${id}`);
      setEvent(res.data);
      setDs(res.data.Date.split('T')[0])
      setTs(res.data.Date.split('T')[1].split(':00.000Z'))
      setLocation(res.data.Location[0]);
      setdsD(res.data.Tires[0].SplitDate.split('T')[0])

   }


   const [event, setEvent] = useState([]);
   const [ds, setDs] = useState('');
   const [Ts, setTs] = useState('');
   const [dsD, setdsD] = useState('');
   const [TsD, setTsD] = useState('')
   const [Location, setLocation] = useState({})
   useEffect(() => {
      getData();

   }, [])


   return (
      <>
         <div className='is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center m-4  has-background-grey-lighter p-6  is-family-monospace'>
            <div className='is-flex is-flex-direction-column is-justify-content-space-between'>
               <div >
                  <div>
                     <h3 className='has-text-centered is-capitalized has-text-weight-bold'>{event.Title}</h3>

                     {event.isOnline ? <small className='has-text-success'>Online</small> : <p></p>}
                     {!event.isPaid ? <><p className='has-text-success'>Free event</p></> : <><p></p></>}
                  </div>
                  <div>
                     <p className='is-italic'>{event.Desc}</p>
                  </div>
                  <div className='mt-2'>
                     <p>{ds}</p>
                     <p>{Ts}</p>
                  </div>


               </div>
               <div className='is-flex is-flex-direction-coulmn mb-4'>
                  {event.isOnline ? <div>
                     <Link to={Location.Link} className='has-text-weight-bold is-underlined'>{Location.Link}</Link>

                  </div> :
                     <>
                        <div className='is-flex is-flex-direction-row is-justify-content-space-between'>
                           <p>{Location.Country}</p>
                           <p>{Location.Province}</p>,
                           <p>{Location.City}</p>,
                           <p>{Location.Address}</p>,

                        </div>
                     </>

                  }
               </div>
               <div className='has-text-weight-bold' >
                  {event.isPaid ? <><p>{event.Tires[0].TitleTires}</p><p>{event.Tires[0].TotalTickets} Tickets</p><p>{event.Tires[0].Price}$</p> {event.Tires[0].isDate ? <><p>{dsD}</p><p>{event.Tires[0].fPrice}$</p><p>{event.Tires[0].sPrice}$</p></> : <p></p>}</> : <p></p>}
               </div>
               <div className='buttons'>
                  {event.isPaid ? <Link to={`/ticket/${event._id}`} className='button is-primary'>Get Ticket</Link> : <Link to='/' className='button is-primary'>Get Tiket</Link>}
                  <Link to={`/updateEvent/${event._id}`} className='button is-primary'>Update Event</Link>
                  <Link to={`/updateAdress/${event._id}`}>Update Adress</Link>
               </div>

            </div>
         </div>
      </>


   )
}
