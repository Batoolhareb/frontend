import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Css/card.css'
//style css//



export default function EventList() {

    const getData = async () => {
        const res = await axios.get('http://localhost:3000/api/event');
        setEvent(res.data);
    }


    const [event, setEvent] = useState([]);
    useEffect(() => {
        getData();

    }, [])
    return (<><div className='container' >
        {event.length > 0 ? event.map(e => (<>

            <div className='Warpper' key={e._id}>
                <div className='Cardtitle' >
                    <h2 >{e.Title}</h2>
                    <div className='Online'>{e.isOnline ? <small className=''>Online</small> : <></>}
                        {!e.isPaid ? <><small className=''>Free event</small></> : <></>}
                    </div>
                </div>
                <div className='Carddesc'>
                   <div className='descp'>{e.Desc}</div> 
                </div>
                <div className='Cardfooter' >
                    <footer className=''>
                       <Link to={`/profile/${e._id}`} className='Link'>more about</Link>
                    </footer>
                    
                </div>
            </div>

        </>)) : <div><h1>no event</h1></div>}</div>
    </>)
}