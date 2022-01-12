//package imports
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//component imports
import Nav from './components/Nav';
import Footer from './components/Footer'
import Home from './components/Home';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';


export default function App() {  
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = (currentPage) => {
      switch(currentPage) {
        case 'Home':
          return <Home />;
        case 'Media Gallery':
          return <Gallery />;
        case 'Services':
          return <Services />;
      }
    };

  return (
    <body>
      <Router>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          <Switch>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/mediagallery" component ={Gallery} />
            <Route exact path = "/Services" component ={Services} />
            <Route exact path = "/Contact" component ={Contact} />

            <Route component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </body>
  )
}