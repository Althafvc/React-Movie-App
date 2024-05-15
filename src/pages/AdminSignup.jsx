import React, { useState } from "react";
import BasicAlerts from '../components/Alerts'
import '../pages/AdminSignup.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function AdminSignup() {

  const [message, setMessage] = useState('')

  const [success, setsuccess] = useState(false)

  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const adminData = { name: '', phone: '', email: '', password: '', confirmpassword: ''}
  const [adminInputData, setadminInputData] = useState(adminData)

  function handleChange(e) {
    e.preventDefault()

    const { name, value } = e.target

    setadminInputData({ ...adminInputData, [name]: value })

  }


  function handleSubmit(e) {
    e.preventDefault()

    //ensuring that all the fields are filled
    if (adminInputData.name.trim() === '' || adminInputData.phone.trim() === '' || adminInputData.email.trim() === '' || adminInputData.password.trim() === '' || adminInputData.confirmpassword.trim() === '') {
      setMessage('All fields are mandatory')

    //ensuring that the password and confirmpassword are same 
    }else if (adminInputData.password != adminInputData.confirmpassword) {
        setMessage('Passwords does not match')


        //handling the correct area
    }else {
    setsuccess(true)

    //saving the data to redux
    dispatch({type:'adminAdd', payload:adminInputData}) 
    setMessage('Account created successfully')

    //rerouting to Login page after certain time
    setTimeout(() => Navigate('/admin/login'), 800);

  }

}
  //clearing the alerts after certain time
   if (message) setTimeout(() => setMessage(''), 800);
  return (

    <>

      <form onSubmit={handleSubmit} className="signup-form mt-20 border border-red-300">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="firstName"
            name="name"
            value={adminInputData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Phone">Phone:</label>
          <input
            type="tel"
            id="lastName"
            name="phone"
            value={adminInputData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={adminInputData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={adminInputData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmpassword"
            value={adminInputData.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>

        {message && <BasicAlerts type={success ? "success" : "error"} msg={message} />}
      </form>
    </>
  );
}

export default AdminSignup;
