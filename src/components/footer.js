import React from 'react'

import { GiTeapotLeaves } from 'react-icons/gi';
import { IconContext  } from "react-icons";

const Footer = () => {
  return (
      <footer className={`footer py-2 bg-dark`}>
        <div className="text-center text-secondary">
          <IconContext.Provider value={{ color: "LightGreen" }}>
            Made with lots of  <GiTeapotLeaves />.
          </IconContext.Provider>
        </div>
      </footer>
  )  
}

export default Footer
