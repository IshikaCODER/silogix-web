import React from 'react'
import '../styles/LoginForm.css'

function LoginForm() {
  return (
    <>
      <div id="container">
            <div id="form-box">
                <h2>Welcome Back!</h2>
                <p>Login to access your Dashboard</p>
                <br/>
                <form action="#" className="form">
                    <div className="mb-3">
                      <label for="exampleInputUsername" className="form-label">Username</label>
                      <input type="text" className="form-control" id="exampleInputUsername" placeholder="Enter Username" required/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="loginBtn">Login</button>
                </form>
            </div>
            <div id="side" className="gradient-div"></div>
        </div>
    </>
  )
}

export default LoginForm;
