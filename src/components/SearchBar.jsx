import React, { useState} from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState([]);
  

  return (
    <form className="search" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      document.getElementById("bar").value = "";
    }}>
      <input
        id="bar"
        type="text"
        placeholder="Ciudad..."
        className="barra"
        //value={city}
        onChange={e => setCity(e.target.value)}
        autocomplete ="off"
      />
      <button type="submit"  className="boton"><IoSearch/></button>
    </form>
  );
}
