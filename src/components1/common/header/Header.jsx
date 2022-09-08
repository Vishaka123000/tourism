import React from 'react';

import './Header.css'
const Header = ()=> {
    return(
        
        <section className="Header">
            <form id="div">
            <section className="Header-top">
                <section className="Header-top-logo" id="logo">
                    Tourism In Goa 
                    <p>The coastal paradise, Goa is not unknown to anyone. This tiny state in West India is famous for its plethora of beautiful beaches, great seafood, amazing nightlife, and thrilling watersports.</p>
                </section>
                <span id="nav">
                <span id="home">Home</span><span id="st">Location</span><span id="in">Trips</span><span id="prof">Help</span>
                </span>
                
            </section>
            </form>
            
        </section>
    );
}

export default Header;
