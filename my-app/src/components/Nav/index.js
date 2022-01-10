import React from 'react'

export default function Nav(props) {
    const tabs = ['Home', 'Media Gallery', 'Services'];

    return (
        <nav className="">
        <div>
          <h1>CRYSTADIANEPHOTOGRAPHY</h1>
          <p>801-800-0771</p>
        </div>
        <ul className="">
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
          <button>More</button>
          <button>Get In Touch</button>
        </ul>
      </nav>
    )
}
