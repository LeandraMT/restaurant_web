import React from "react";
import './main-view.scss';

export const MainView = () => {
    return (
        <div>
            <div className="navigation-bar">
                <ul>
                    <li>Home</li>
                    <li>Our Story</li>
                    <li>Dishes</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="heading">
                <h1>Welcome to LatinoFood!</h1>
                <p>Give your life more enjoyment with our Latino dishes.</p>
            </div>

            <div className="bg-image">
                <img src="#" alt="Background photo" />
            </div>
        </div>
    )
}