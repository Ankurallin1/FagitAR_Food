import Login from "../Login/Login";
import Register from "../Register/Register";
import SignUPLogo from '../../Images/log.svg'
import SignINLogo from '../../Images/register.svg'
import { useState } from "react";
const LoginRegister=()=>{
    const [animation,setAnimation]=useState(true);
    const handleAnimation=()=>{setAnimation(!animation)}
    return (
        <div className={animation?"container sign-up-mode":"container"}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login/>
          <Register/>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleAnimation}>
              Sign up
            </button>
          </div>
          <img src={SignUPLogo} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleAnimation}>
              Sign in
            </button>
          </div>
          <img src={SignINLogo} className="image" alt="" />
        </div>
      </div>
    </div>
    )
}
export default LoginRegister;