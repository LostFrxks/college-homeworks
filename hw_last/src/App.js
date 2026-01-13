import './App.css';

import { useEffect, useState } from "react";
import GuestCard from "./components/GuestCard/GuestCard";

function App() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState([]);

  function addGuest() {
    const n = name.trim();
    if (n === "") return;

    const newGuest = {
      id: Date.now(),
      name: n,
    };

    setGuests([...guests, newGuest]);
    setName("");
  }

  function deleteGuest(id) {
    const filtered = guests.filter((g) => g.id !== id);
    setGuests(filtered);
  }

  useEffect(() => {
    console.log("Guests changed:", guests.length);
  }, [guests]);

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">Guest List</h1>

        <div className="app__form">
          <input className="app__input" placeholder="Write guests name" value={name} onChange={(e) => setName(e.target.value)}/>
          <button className="app__btn" onClick={addGuest}>
            Add
          </button>
        </div>

        <div className="app__list">
          {guests.length === 0 && <p className="app__empty">No guests yet</p>}

          {guests.map((guest) => {
            return (
              <GuestCard key={guest.id} id={guest.id} name={guest.name} onDelete={deleteGuest}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
