import "./css/style.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import data from "./data.js";

export default function App() {

    const cards = data.map(item => {
        return(
            <Card
                key={item.id}
                {...item}
            />
        )
    });
    
    return(
        <div className="app">
            <Navbar/>
            <div className="card--section">
                {cards}
            </div>
        </div>
    )
}