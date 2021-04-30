import React, {useState, useEffect} from "react";
import './App.css';

const API_URL = "/locations?q="; // you should replace this with yours


function App() {

  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(API_URL + location)
      .then(res => {
        return res.ok ? res.json() : [];
      })
      .then(res => {
        setLocations(res);
      }).catch(err => {
        setLocations([]);
      });
  }, [location]);

  return (
    <div className="main">
      <div className="search">
        <input name="text" type="text" placeholder="Search for location (min 2 chars)" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
      {locations.length > 0 ? (<p>Found: {locations.length}</p>) : ""}
      <ul>
        {locations.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
