import React from "react"

function Header() {
    const siteTitle = "Gladiator Card Database"
    const siteStatement = "The best place to find trading card information!"

    return (
        <div>
            <div id="mainInfoHeader">
                <img src="/images/logo.png" alt="Card Database logo" width="150" height="150" id="mainLogo" />
                <h1 id="mainTitle">{siteTitle}</h1>
                <h3 id="siteStatement">{siteStatement}</h3>
                <div id="userLoginOptions">
                    <div id="registerOption">
                        <p>Register</p>
                    </div>
                    <div id="loginOption">
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;