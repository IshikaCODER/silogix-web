import React from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
// import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'


function Login() {
  document.title = 'Log In';
  return (
    <>
      <Navbar/>
      <LoginForm/>
      {/* <SocialMedia/> */}
      <Footer/>
    </>
  )
}

export default Login
