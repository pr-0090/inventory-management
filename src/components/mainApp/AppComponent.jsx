import React from 'react'
import {useNavigate} from "react-router-dom"
// import { Outlet } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import TabComponent from './tabComponent/TabComponent';


export default function AppComponent() {
  
  const getUserName=localStorage.getItem("userName");
  const getPassword=localStorage.getItem("password");

  return (
    <div>
      { getUserName && getPassword?
        
      <div>
      <HeaderComponent />
      
      {/* <button onClick={()=>navigate("records")}>View Records</button>
      <button onClick={()=>navigate("add-records")}>Add Records</button>
      <Outlet /> */}
      <TabComponent />
      </div>:<div> <h1>Your are not logged in</h1> 
        <a href="/">click here to go to home</a>
      </div>
    }
    </div>
  )
}
