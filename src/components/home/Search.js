import React, { useState, useEffect } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { CityContext } from '../CityContext'
import Toast from '../Toast'

const Search = (props) => {
    const [input, setInput] = useState('tel aviv')
    const [errorMessage, setErrorMessage] = useState('')
    const [cityContext, setCityContext] = React.useContext(CityContext)

    const handleChange = (event) => {
        setCityContext('')
        if (verifyInput(event.target.value)) {
        setInput(event.target.value)
        } else {
            setErrorMessage('Invalid Character')
        }
    }

    useEffect(() => {
            props.specifySearch(input)
    }, [input])

    const verifyInput = (input) => {
        const acceptedCharacters = /^[A-Za-z\s]+$/
        if (input.match(acceptedCharacters)) {
            return true
        }
        else {
            return false
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setInput('')
    }

    // useEffect(() => {
    //     if (localStorage.getItem("weatherForcast")) {
    //         setInput(localStorage.getItem("weatherForcast"))
    //         localStorage.removeItem("weatherForcast")
    //     }
    // })

    return (
        <>
            <div className="search-container">
                <FormControl type="text" placeholder="Search" value={input} className="search-field" onChange={handleChange} />
                <Button variant="outline-info" type="submit" className="input-button" onClick={handleSubmit}>Search</Button>
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default Search