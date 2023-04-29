import React from 'react'
import './app.css';

const App = () => {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <h1>Login Page</h1>
          <div>
            <input type="text" placeholder='user name' className='name' /> 
          </div> <br />
          <div>
            <input type="password" placeholder='password' className='name' />
          </div>
          <div className='login-button'>
            <button>Login</button>
          </div>
          <div>
            <p className='Link'>
              <a href="a">Forgot Password ?</a> Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App