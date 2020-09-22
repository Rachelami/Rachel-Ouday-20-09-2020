import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import './style.css';
import HomePage from './components/home/HomePage'
import TopNavbar from './components/Navbar.js'
import Favorite from './components/favorite/Favorite'
import Search from './components/home/Search'


function App() {
  const [searchString, setSearchString] = useState('')

  const specifySearch = (userInput) => {
    setSearchString(userInput)
  }

  return (
    <div className="App">
      <TopNavbar />
      <Switch>
          <Route exact path="/">
            <Search specifySearch={specifySearch} />
            <HomePage searchString={searchString} />
          </Route>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
