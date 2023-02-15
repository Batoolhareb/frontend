import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import './Css/ticket.css';
import { FaRegCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";


export default function Ticketbook() {
  const { id } = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:3000/api/alleventsByid/${id}`);
    setEvent(res.data);
    setDs(res.data.Date.split('T')[0])
    setTs(res.data.Date.split('T')[1].split(':00.000Z'))
    setLocation(res.data.Location[0])
    setSr(res.data.Tires[0])

  }


  const [ticket, setTicket] = useState({

  })
  const handledata = (e) => {
    const newdata = { ...ticket };
    newdata[e.target.id] = e.target.value;
    console.log(newdata)
    setTicket(newdata)
  }
  const bookTicket = async (e) => {

    try {
      e.preventDefault()
      const ticketbook = await axios.post(`http://localhost:3000/api/book/${id}`, {
        ticket,
        TicketBooked: ticket.TicketBooked

      });
      setTicket(ticketbook.data)
      console.log(ticketbook.data)

    }
    catch (err) {
      console.log(err.message)
    }

  }


  const [event, setEvent] = useState([]);
  const [ds, setDs] = useState('');
  const [Ts, setTs] = useState('');
  const [sr, setSr] = useState('');
  const [book, setBook] = useState({})
  const [Location, setLocation] = useState({})

  useEffect(() => {
    getData();
  }, [])


  return (
    <>

      <div class="container">
        <h1 class="upcomming">upcomming Event</h1>
        <div class="item">
          <div class="item-right">

            <h2 class="num">{ds.split('-')[2]}</h2>
            <p class="day">{ds.split('-')[1]}</p>
            <span class="up-border"></span>
            <span class="down-border"></span>
          </div>

          <div class="item-left">
            <p class="event">{event.Title}</p>
            <h2 class="title">{event.isOnline ? <p>Online Event</p> : <><p>Offline Event</p></>}</h2>

            <div class="sce">
              <div class="icon">
                <FaRegCalendarAlt />
              </div>
              <p>{ds} <br /> {Ts}</p>
            </div>
            <div class="fix"></div>
            <div class="loc">
              <div class="icon">
                < FaMapMarkedAlt />
              </div>
              {event.isOnline ?
                <p>{Location.Link}</p>
                :
                <>
                  <p>{Location.Country},{Location.Province},{Location.City}<br />{Location.Address}</p>
                </>

              }
              <input type='number' id='TicketBooked' name='TicketBooked' onChange={handledata} className='ticketinput' placeholder='Enter number of ticket' />
            </div>
            <div class="fix">
              {/*<p>{sr.Price}$</p>*/}

            </div>
            <div class='fix'></div>
            <Link class="tickets" onClick={(e) => bookTicket(e)} >Tickets</Link>
            <div class='fix' className=''><Link to={`/book/${ticket._id}`} class="booked">Book</Link></div>
          </div>

        </div>
      </div>
    </>
  )
}
