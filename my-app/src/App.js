import React, { useState } from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer'
import Home from './components/Home';
import Gallery from './components/Gallery';
import Services from './components/Services';


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
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>{renderPage(currentPage)}</div>
      <Footer />
    </body>
  )
}