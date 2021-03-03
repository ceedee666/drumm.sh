import React from 'react'

import Navbar from './navbar'


const Header = ({siteTitle, pageInfo}) => {
  return (
    <header className="bg-dark header" >
    
      <Navbar pageInfo={pageInfo} />
    </header>
  )
}

export default Header
