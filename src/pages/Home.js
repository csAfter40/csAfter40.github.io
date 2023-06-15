import React from "react";
import profilePic from "../images/pp.jpg"

export default function Home() {
    return (
        <div id="home">
            <div id="home-card">
                <img id="home-profile-picture" src={profilePic} alt="profile" />
                <div id="home-card-text-container">
                    <h1 id="home-card-name">Muzaffer Barış Yavuz</h1>
                    <h3 id="home-card-title">Software Developer &bull; Mechanical Engineer</h3>
                    <p id="home-card-text">With a background in engineering and a newfound love for programming, I'm ready to embark on an exciting journey in the software development field.</p>
                </div>
            </div>
        </div>
    )
}