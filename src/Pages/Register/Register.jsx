import './RegisterStyle.css'
import {SocialLinks} from '../../utils/Data.js'
import {Link} from 'react-router-dom';
import {FiUser} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
const Register=()=>{
    return(
        <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FiUser size="32px" style={{"color":"	#C0C0C0","marginTop":"10px","marginLeft":"5px"}}/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <AiOutlineMail size="32px" style={{"color":"	#C0C0C0","marginTop":"10px","marginLeft":"5px"}}/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <RiLockPasswordLine size="32px" style={{"color":"	#C0C0C0","marginTop":"10px","marginLeft":"5px"}}/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              {
                SocialLinks.map(({icon},index)=>{
                    return(
                        <Link className='social-icon' key={index} to='/'>{icon}</Link>
                    )
                })
              }
            </div>
          </form>
    )
}
export default Register;