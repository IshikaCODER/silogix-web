import React from 'react'
import '../styles/RegisterForm.css'

function RegisterForm() {
  return (
    <>
      <div id="container">
            <div className="form-box">
                <h2>Welcome to Silogix!!</h2>
                <br/>
                <p>Create an Account</p>
                
                <form action="#" id="signup-form">
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Company Name" required/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Owner Name" required/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputUsername" placeholder="Registration Number" required/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" required/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                        <label className="form-check-label" for="exampleCheck1">By using our website or services, you agree to our <a href="terms.html">terms and conditions</a> in full.</label>
                    </div>
                    <button type="submit" className="btn btn-primary" id="regBtn">Sign Up</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default RegisterForm;
