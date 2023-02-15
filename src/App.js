import Eventform from "./component/Eventform";
import EventList from "./component/EventList";
import Eventprofile from "./component/Eventprofile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEvent from "./component/UpdateEvent";
import Ticketbook from "./component/Ticketbook";
import UpdateAddress from "./component/UpdateAddress";
import Booking from "./component/Booking";



function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<EventList />} />
            <Route path="/profile/:id" element={<Eventprofile />} />
            <Route path="/Event" element={<Eventform />} />
            <Route path="/ticket/:id" element={<Ticketbook />} />
            <Route path="/updateEvent/:id" element={<UpdateEvent />} />
            <Route path="/updateAdress/:id" element={<UpdateAddress />} />
            <Route path="/book/:id" element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
