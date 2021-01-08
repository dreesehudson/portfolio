import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Main from './Components/Main'
//import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App container">
        <Header/>
        <Main/>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
