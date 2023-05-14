import React from 'react';
import Navbar from '../components/Navbar';


function NavBtns() {
    const navBtnData = [
        {
            id: 1,
            name: "About Me",
            login: "true"
        },
        {
            id: 2,
            name: "My Work",
            login: "false"
        },
        {
            id: 3,
            name: "Contact Me",
            login: "false"
        },
    ]

    return (
        <div className="navBtn-container">
            {
                navBtnData.map(navBtn => {
                    return <Navbar
                        id={navBtn.id}
                        name={navBtn.name}
                        login={navBtn.login}

                    />
                })
            }

        </div>
    )
}

export default NavBtns;