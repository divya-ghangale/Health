import React from 'react'
import classes from './Footer.module.css'
import SunNuclear from '../../assets/icons/Images/Sun_Nuclear_White_logo.png'

function Footer() {
  return (
    <div>
        <body>
    <footer className={classes.Footer}>
    <img style={{height:"65%",cursor:'pointer',marginTop:"15px"}} title="Home" src={SunNuclear}  alt="Sun_Nuclear_White_logo" />
    {/* <p>Copyright 2020 Your Name</p>
    <p>Contact: <a href="mailto:you@example.com">you@example.com</a></p> */}
  </footer>
  </body>
      
    </div>
  )
}

export default Footer
