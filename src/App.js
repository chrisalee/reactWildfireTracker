import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';

const App = () => {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);

    }

    fetchEvents();
    // console.log(eventData);

  }, [])

  return (
    <div className='app'>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }      
    </div>
  )
}

export default App;