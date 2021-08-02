import React from 'react';
import styles from './About.module.css';


export default function About (text) {

    return (

        <div className={styles.container}>
            <h3 className={styles.title}>About me</h3>
            <p>Hola! 😁 soy Damian Diego</p>
            <p>Actualmente me encuentro cursando el bootcamp de Desarrollo Web FullStack en Soy Henry 🚀</p>
            <p>Esta es mi primer app desarrollada con React, la cual consume datos de la API de OpenWeather</p>
            <p>Si deseas contactar conmigo encontraras mis redes mas abajo 👇</p>
        </div>
      
    );
};