import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
   !isAuthenticated && (
    <div>
        <div className="container-login">
          <div className="login-form-1">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <input required type="text" className="input-form-control-login" placeholder="Your Email *"  />
              </div>
              <div className="form-group">
                <input required type="password" className="input-form-control-login" placeholder="Your Password *"  />
              </div>
              <div className="form-group">
                <div className="form-button-login">
                  <input type="submit" className="btnSubmit" value="Login" />
                  <button  style={{backgroundColor:"red"}} className="btnSubmit color-red" onClick={() => loginWithRedirect()}>Google</button>
                </div>
              </div>
              <div className="form-group">
                <div className="form-button-login">
                <u><a href="###" className="ForgetPwd">Forget Password?</a></u>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="##https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
        </footer>
      </div>
  )
    )
  
}

export default Login;