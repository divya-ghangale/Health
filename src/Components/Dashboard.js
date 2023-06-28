import React from 'react'
import classes from './Dashboard.module.css'
import Header1 from './HomeHeader/Header1'



function Dashboard() {

  return (
    <>
      <Header1 />
      <div className={classes.dashStyle}>
        <h1 style={{ marginLeft: "520px"}}>Dashboard</h1>
        {/* <a 
      target="_"
       href="http://18.223.151.129:31479/superset/dashboard/5/">Machine Dashboard</a>
      <p><a href="">Completed Patient Dashboard</a></p>
      <p><a href="">Active Patient Dashboard</a></p>
      <p><a href="">System Dashboard</a></p> */}


        <table style={{ border: "1px solid grey", margin: "5px" , marginLeft: "auto",marginRight: "auto"}}>
          <tr style={{ border: "1px solid rgba(128, 128, 128, 0.251)" }} >
            <th style={{ border: "1px rgba(128, 128, 128, 0.968)", background: "grey", color: "white" }}>Username</th>
            <th style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>Status</th>
            <th style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>Date</th>
            <th style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>URL</th>
            <th style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>Button</th>
           

          </tr>

          <tr style={{ border: "1px solid grey", textAlign: "center" }}>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", background: "grey", color: "white" }}>User1</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>true</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
          </tr>

          <tr style={{ border: "1px solid grey", textAlign: "center" }}>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", background: "grey", color: "white" }}>User2</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>false</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            

          </tr>

          <tr style={{ border: "1px solid grey", textAlign: "center" }}>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", background: "grey", color: "white" }}>User3</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>true</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
           

          </tr>


          <tr style={{ border: "1px solid grey", textAlign: "center" }}>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", background: "grey", color: "white" }}>User4</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}>false</td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            <td style={{ border: "1px solid rgba(128, 128, 128, 0.251)", padding: "5px" }}></td>
            
          </tr>
        </table>
      </div>



    </>
  )
}

export default Dashboard
