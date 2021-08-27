import React from 'react';
import './App.css';
// import Button from './components/Button/Button';
import GridMovies from './components/GridMovies/GridMovies.jsx';
import Header from './components/Header/Header';


function App() {

    return ( 
        <div className='App'>
            <Header/>
            {/* <Button/> */}
            <GridMovies/>
        </div>
    )
}

export default App;