import React, { useState } from 'react'
import axios from 'axios';
import Formvalidation from './Formvalidation';
//validation onChange//

export default function Eventform() {
  const [data, setData] = useState(
    {
      isPaid: false,
      isOnline: false,
      isDate: false,
      Country: 'Lebanone'
    }
  );
  const handleCheckedbox = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.checked
    setData(newdata);
  }
  const handledata = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    console.log(newdata)
    setError({ newdata })
    setData(newdata)
  }
  const [error, setError] = useState({})

  const submit = async (e) => {


    try {
      e.preventDefault()
      const response = await axios.post('http://localhost:3000/api/event', {
        Creator: data.Creator,
        Title: data.Title,
        Desc: data.Desc,
        Date: data.Date,
        AttendeesNumber: data.AttendeesNumber,
        isPaid: data.isPaid,
        isOnline: data.isOnline,
        Tires: {
          isDate: data.isDate,
          TitleTires: data.TitleTires,
          TotalTickets: data.TotalTickets,
          SplitDate: data.SplitDate,
          fPrice: data.fPrice,
          sPrice: data.sPrice,
          Price: data.Price,
        },
        Location: {
          Link: data.Link, Country: data.Country,
          Porvince: data.Porvince,
          City: data.City,
          Address: data.Address
        },
        Status: data.Status,

      })
      console.log(response)
    }
    catch (err) {
      console.log(err.message)
    }
    setError(Formvalidation(data))


  }
  return (
    <div className='is-flex  is-flex-wrap-wrap is-justify-content-center '>
      <div className='is-flex is-flex-direction-column is-justify-content-space-between p-6 WarpperForm m-4'>
        <form action="" className='is-flex is-flex-direction-column p-4' >
          <div className='is-flex is-flex-direction-column'>
            <span>Creator</span>
            <input type='text' name='Creator' id='Creator' className='input is-warning' onChange={handledata} required />
          </div>
          <div className='is-flex is-flex-direction-column'>
            <span>Tiltle</span>
            <input type='text' name='title' id='Title' className='input is-warning' onChange={handledata} required />
            {error.title && <p id='error'>{error.title}</p>}
          </div>
          <div className='is-flex is-flex-direction-column'>
            <span>Descriptaion</span>
            <textarea id='Desc' onChange={handledata} name="desc" className='textarea is-warning '></textarea>
            {error.desc && <p id='error'>{error.desc}</p>}
          </div>
          <div className='is-flex is-flex-direction-column'>
            <span>Date</span>
            <input type='datetime-local' id='Date' className='input is-warning' name='date' onChange={handledata} />
            {error.date && <p id='error'>{error.date}</p>}
          </div>
          <div className='is-flex is-flex-direction-column'>
            <span>AttendeesNumber</span>
            <input type='number' id='AttendeesNumber' name='AttendeesNumber' onChange={handledata} className='input is-warning' />
            {error.AttendeesNumber && <p id='error'>{error.AttendeesNumber}</p>}
          </div>
          <div className='is-flex is-flex-direction-column'>
            <div>
              <span>Paid</span>
              <input type='checkbox' name='Paid' id='isPaid' onChange={handleCheckedbox} />
              {
                data.isPaid === true ?
                  <div>
                    <div className='is-flex is-flex-direction-column'>
                      <span>Tiltle Of Tires</span>
                      <input type='text' id='TitleTires' name='titletires' onChange={handledata} className='input is-warning' />
                      {error.titletires && <p id='error'>{error.titletires}</p>}
                    </div>
                    <div className='is-flex is-flex-direction-column'>
                      <span>TotalTickets</span>
                      <input type='number' id='TotalTickets' name='totaltickets' className='input is-warning' onChange={handledata} />
                      {error.totaltickets && <p id='error'>{error.totaltickets}</p>}
                    </div>
                    <div>
                      <span>isDate</span>
                      <input type='checkbox' name='isDate' id='isDate' onChange={handleCheckedbox} />
                      {data.isDate === true ?
                        <div>
                          <div className='is-flex is-flex-direction-column'>
                            <span>Enter a Date</span>
                            <input type='date' id='SplitDate' name='splitdate' className='input is-warning' onChange={handledata} />
                            {error.splitdate && <p id='error'>{error.splitdate}</p>}
                          </div>
                          <div className='is-flex is-flex-direction-column'>
                            <span>First tickets Price</span>
                            <input type='number' id='fPrice' name='fprice' className='input is-warning' onChange={handledata} />
                            {error.fprice && <p id='error'>{error.fprice}</p>}
                          </div>
                          <div className='is-flex is-flex-direction-column'>
                            <span>Scoundry tickets Price</span>
                            <input type='number' id='sPrice' name='sprice' className='input is-warning' onChange={handledata} />
                            {error.sprice && <p id='error'>{error.sprice}</p>}
                          </div>
                          <div className='is-flex is-flex-direction-column'>
                            <span>Price</span>
                            <input type='number' id='Price' name='price' className='input is-warning' onChange={handledata} />
                            {error.price && <p id='error'>{error.price}</p>}
                          </div>
                        </div> :
                        <div className='is-flex is-flex-direction-column'>
                          <span>Price</span>
                          <input type='number' id='Price' onChange={handledata} className='input is-warning' />
                          {error.price && <p id='error'>{error.price}</p>}
                        </div>
                      }

                    </div>
                  </div> : <div></div>
              }
            </div>
            <div >
              <span>Online</span>
              <input type='checkbox' name='Online' id='isOnline' onChange={handleCheckedbox} />
              {data.isOnline === true ?
                <div className='is-flex is-flex-direction-column'>
                  <span>link to join</span>
                  <input type='text' name='link' id='Link' onChange={handledata} className='input is-warning' />
                  {error.link && <p id='error'>{error.link}</p>}
                </div> :
                <div  >
                  <div >
                    <div className='is-flex is-flex-direction-column'>
                      <span>Country</span>
                      <select id='Country' onChange={handledata} className='is-warning'>
                        <option value='Lebanon' className=''>Lebanon</option>
                      </select>
                    </div>
                    <div className='is-flex is-flex-direction-column'>
                      <span>Porvince</span>
                      <input type='text' id='Porvince' name='porvince' className='input is-warning' onChange={handledata} />
                      {error.porvince && <p id='error'>{error.porvince}</p>}
                    </div>

                  </div>
                  <div >
                    <div className='is-flex is-flex-direction-column'>
                      <span>City</span>
                      <input type='text' id='City' name='city' className='input is-warning' onChange={handledata} />
                      {error.city && <p id='error'>{error.city}</p>}
                    </div>
                    <div className='is-flex is-flex-direction-column'>
                      <span>Address</span>
                      <input type='text' id='Address' name='address' className='input is-warning' onChange={handledata} />
                      {error.address && <p id='error'>{error.address}</p>}
                    </div>
                  </div>


                </div>
              }
            </div>
          </div>
          <div className=' is-flex is-justify-content-center'>
            <button onClick={(e) => submit(e)} className=''>Create Event</button>
          </div>
        </form>

      </div>

    </div>
  )
}
