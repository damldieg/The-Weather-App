import React from 'react';
import './Card.css';
import { IoCloseCircleOutline } from "react-icons/io5";


export default function Card ({min, max, name, img, onClose, id, weather, act,country}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="boton"><IoCloseCircleOutline/></button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}<span className="country">({country})</span></h5>
          <h5 className="card-temo">{act}°</h5>
          <h6 className="card-subtitle">({weather})</h6>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
