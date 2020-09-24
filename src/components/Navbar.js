import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'

const TopNavbar = () => {
    const [isFavoritePageActive, setIsFavoritePageActive] = useState(false)

    useEffect(() => {
        if (window.location.href.includes("favorite")) {
            setIsFavoritePageActive(true)
        } 
        else {
            setIsFavoritePageActive(false)
        }
    })

    return (
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link href="/" className={isFavoritePageActive ? null : "active"}>
                    <img src={isFavoritePageActive ? `../images/house.png` : `../images/red-house.png`} className="nav-logos" />
                    Home
                </Nav.Link>

                <Nav.Link href="/favorite" className={isFavoritePageActive ? "active" : null}>
                    <img src={isFavoritePageActive ? `../images/yellow-star.png` : `../images/star.png`} className="nav-logos" />
                Favorite
                </Nav.Link>
            </Nav>

            <Form inline>
                <img className="herolo-logo" src="../img/herolo.png" />
            </Form>
        </Navbar>
    )
}

export default TopNavbar