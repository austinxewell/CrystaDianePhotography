import React from 'react'

export default function Nav(props) {
    const tabs = ['Home'];

    return (
        <nav className="">
          <h1>Crysta Diane Photography</h1>
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
        </ul>
      </nav>
    )
}
