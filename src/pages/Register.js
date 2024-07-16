import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
// import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

function Register() {
  document.title = 'Registeration';
  return (
    <>
      <Navbar/>
      <RegisterForm/>
      {/* <SocialMedia/> */}
      <Footer/>
    </>
  )
}

export default Register;
