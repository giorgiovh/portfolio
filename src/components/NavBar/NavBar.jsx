import React from 'react';

const NavBar = (props) => {
    return (
        <header className="App-header">
            <img 
                src=""
                style={{ width: "100px", height: "100px" }}
                className="App-logo"
                alt="logo"
            />
            {props.navItems.map((navItem, index) => (
                <a key={index} href={navItem.url}>{navItem.name}</a>
            ))}
        </header>
    )
}

export default NavBar;