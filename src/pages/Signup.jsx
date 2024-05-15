import React, { useState } from "react";
import "../pages/Signup.css";
import BasicAlerts from '../components/Alerts'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Signup() {
    const Navigate = useNavigate()
    const userData = { name: '', phone: '', email: '', password: '', confirmPassword: ''}
    const [inputData, setinputData] = useState(userData)
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    function navigateToLogin (e) {
        e.preventDefault()

        Navigate('/login')
    }

    function handleData(e) {
        const { name, value } = e.target
        setinputData({ ...inputData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (inputData.name.trim() === "" || inputData.phone.trim() === "" || inputData.email.trim() === "" || inputData.password.trim() === "" || inputData.confirmPassword.trim() === "") {
            setMessage('All fields are mandatory')
        } else if (inputData.password !== inputData.confirmPassword) {
            setMessage('Passwords did not match')
        } else {
            setSuccess(true)
            dispatch({ type: 'userAdd', payload: inputData })
            setMessage('Account created successfully')
            setTimeout(() => Navigate('/login'), 800);
        }


    }

    if (message) setTimeout(() => setMessage(''), 800);

    return (
        <>
            <div className="container">
                <div className="form-area">
                    <h2 className="font-extrabold">Sign up</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="labename">Name:</label>
                        <input type="text" className="inp" name="name" id="name" value={inputData.name} onChange={handleData} />

                        <label>Phone:</label>
                        <input type="number" className="inp" name="phone" id="phone" value={inputData.phone} onChange={handleData} />

                        <label className="labemail">E-mail:</label>
                        <input type="email" className="inp" name="email" id="email" value={inputData.email} onChange={handleData} />

                        <label className="labepassword">Password:</label>
                        <input type="password" className="inp" name="password" id="password" value={inputData.password} onChange={handleData} />

                        <label className="labeconfirmpassword">Confirm Password:</label>
                        <input type="password" className="inp" name="confirmPassword" id="confirmpassword" value={inputData.confirmPassword} onChange={handleData} />
                        {message && <BasicAlerts type={success ? "success" : "error"} msg={message} />}
                        <div className="btn-area">
                            <button type="submit">Submit</button>
                        </div>
                                <p onClick={navigateToLogin} className="text-center text-muted mt-5 mb-0 " style={{cursor:'pointer'}}> Already have an account? <u>Login here</u></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
