import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assests/person-fill.svg'
import email_icon from '../Assests/envelope.svg'
import password_icon from '../Assests/lock-fill(1).svg'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
    
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="unserline"></div>
      </div>

      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="" id="" placeholder='Name'/>
        </div>}
        

        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name="" id="" placeholder='Email'/>
        </div>

        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name="" id="" placeholder='Password'/>
        </div>
      </div>

      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here...</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
