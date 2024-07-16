import React from 'react'
import '../styles/Logout.css'

function Logout() {
document.title = 'Log Out';
  return (
    <>
      <div className="Logout-section">
            <div className="logout-box">
                <i className="fa-solid fa-right-from-bracket logout-icon" style="color: #8B3DFF;"></i>
                <br/>
                <h2>You are logged out</h2>
                <p>Thank you for using our Services!!</p>
                <a href="/login" className="btn btn-primary" id="SignBtn">Sign In</a>
            </div>
        </div>
    </>
  )
}

export default Logout;
