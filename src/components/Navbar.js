import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import {CityContext} from './CityContext'

const TopNavbar = () => {
    const [isFavoritePageActive, setIsFavoritePageActive] = useState(false)
    const [cityContext, setCityContext] = React.useContext(CityContext)

    useEffect(() => {
        console.log('change the nav')
        console.log(window.location.href.includes("favorite"))
        // setIsFavoritePageActive(false)
        if (window.location.href.includes("favorite")) {
            setIsFavoritePageActive(true)
        // } else {
        //     setIsFavoritePageActive(false)
        }
    },[isFavoritePageActive])
    useEffect(() => {
        console.log('change the nav with cityContext')
        console.log(window.location.href.includes("favorite"))
        // setIsFavoritePageActive(false)
        if (window.location.href.includes("favorite")) {
            setIsFavoritePageActive(true)
        } else {
            setIsFavoritePageActive(false)
        }
    },[cityContext])

    return (
        <Navbar bg="light" variant="light">
        {console.log(cityContext)}
            <Nav className="mr-auto">
                <Nav.Link href="/" className={isFavoritePageActive ? null : "active"}>
                    <img src={isFavoritePageActive ? `../images/house.png` : `../images/red-house.png`} className="nav-logos"/>
                    Home
                </Nav.Link>

                <Nav.Link href="/favorite" className={isFavoritePageActive ? "active" : null}>
                    <img src={isFavoritePageActive ? `../images/yellow-star.png` : `../images/star.png`} className="nav-logos"/>
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