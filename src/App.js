import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards  from './components/Cards.jsx';



export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '79cd9ba3c0c6f51e69332a75e765e856'

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined && cities.length < 8 ){ 
          const ciudad = {
            act: Math.round(recurso.main.temp),
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else if(cities.length === 8){
          alert("Maximo de ciudades alcanzado")
        }else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav
        titulo= "Weather App"
        onSearch= {onSearch}
        />
      
      {cities.length > 0 ? (
            <>
              <Cards cities={cities} onClose={onClose} />
            </>
          ) : (
            <span
              className="empty"
            >
              Agrega una nueva ciudad
            </span>
          )}
      
        
      
  </div>
  );
}
