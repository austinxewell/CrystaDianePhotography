import React from 'react'
import Home from '../Home';

export default function Nav(props) {
    const tabs = ['Home', 'Media Gallery', 'Services'];

    return (
        <nav className="flex-row">
        <div className='container'>
            <div className='vertical-center'>
                <h1>CRYSTADIANEPHOTOGRAPHY</h1>
                <p className='headerPhone'>801-800-0771</p>
            </div>
        </div>
        <ul className="flex-row noBullets">
          {tabs.map(tab => (
            <li className="" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                props.currentPage === tab ? 'nav-linkActive' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))}
            <div class="dropdown">
                <span className='more-button'>More</span>
                <div class="dropdown-content">
                    <ul className='dropdown-list'>
                        <li><a className='navDropdownLink' href='#contact'>Contact</a></li>
                        <li><a className='navDropdownLink' href='#quote'>Quote</a></li>
                    </ul>
                </div>
            </div>
          <a className='getInTouchButton' href='#contact'>Get In Touch</a>
        </ul>
      </nav>
    )
}
