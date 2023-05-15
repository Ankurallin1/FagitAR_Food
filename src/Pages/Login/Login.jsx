import './LoginStyle.css'
import {Link} from 'react-router-dom';
import {SocialLinks} from '../../utils/Data.js'
import {FiUser} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
const Login=()=>{
    return(
        
            <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FiUser size="32px" style={{"color":"	#C0C0C0","marginTop":"10px","marginLeft":"5px"}}/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <AiOutlineMail size="32px" style={{"color":"	#C0C0C0","marginTop":"10px","marginLeft":"5px"}}/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
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
export default Login;