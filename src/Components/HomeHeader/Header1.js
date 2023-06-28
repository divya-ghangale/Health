import React from 'react'
import classes from './Header1.module.css'
// import Dashboard from '../../assets/icons/Dashboard'
// import suncheck from '../../assets/icons/Images/SunCheck.png'
import HomeIcon from '../../assets/icons/Images/Home-icon.png'
import DashboardIcon from '../../assets/icons/Images/Dashboard icon.png'
import UserIcon from '../../assets/icons/Images/User icon.png'
// import GroupIcon from '../../assets/icons/Images/Group 74.png'
// import upArrowIcon from '../../assets/icons/Images/upArrow.png'
// import SunNuclear from '../../assets/icons/Images/Sun_Nuclear_White_logo.png'

function Header1(props) {
    
  return (
    <div>
      <nav className={classes.homeHead}>
       
       <img style={{height:"65%",cursor:'pointer'}} title="Home" src={HomeIcon}  alt="Home-icon" />
       <img style={{height:"65%",cursor:'pointer'}} title="Patient List" src={UserIcon}  alt="User icon" />
       {/* <img style={{height:"65%",cursor:'pointer'}} title="SNC Routine Dashboard"src={GroupIcon}  alt="Group 74" /> */}
       <img  onClick={props.showDashboard} title="Depict data as a trend graph" style={{height:"65%",cursor:'pointer',marginRight:"700px"}}src={DashboardIcon}  alt="Dashboard icon" />
       
        {/* <img style={{height:"65%"}} src={SunNuclear}  alt="Sun_Nuclear_White_logo" /> */}
        
    </nav>
{/* <div className={classes.black} ></div> */}
<div>
  
</div>

    </div>
  )
}

export default Header1
