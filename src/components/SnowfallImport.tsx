"use client";
import React from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'


const SnowfallImport = () => {
    return (
        <div style={{ height: "100vh", width: "100%", position: 'fixed', zIndex: 1000, pointerEvents: "none" }}>

            <Snowfall />
        </div>
    );
};

export default SnowfallImport;