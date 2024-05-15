import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import BasicAlerts from "../components/Alerts";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

    const Navigate = useNavigate();

    const userExist = useSelector(state => state.userData);
    const [loginData, setloginData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch()

    function navigateToSignup(e) {
        e.preventDefault();
        Navigate('/Signup');
    }

    function handleloginData(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setloginData({ ...loginData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (loginData.email.trim() === '' || loginData.password.trim() === '') {
            setMessage('All fields are mandatory');
        } else {
            const emailExist = userExist.find((data) => data.email === loginData.email);
            const passwordExist = userExist.find((data) => data.password === loginData.password);

            if (emailExist && passwordExist) {
                setSuccess(true);
                setMessage('Login successful');
                dispatch ({type:'userLogged'})
                setTimeout(() => Navigate('/home'), 800);
            } else {
                setMessage('Incorrect email or password');
            }
        }
    }

    if (message) {
        setTimeout(() => {
            setMessage('');
        }, 800);
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative">
                                            <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 text-sm" placeholder="email " value={loginData.email} onChange={handleloginData} />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">email</label>
                                        </div>
                                        <div className="relative">
                                            <input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" onChange={handleloginData} value={loginData.password} />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-cyan-500 text-white rounded-md px-2 py-1" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={navigateToSignup}>
                                <p className="text-center text-muted mt-5 mb-0 "> Do not have an account? <a href="/admin/login" className="fw-bold text-body login font-bold"><u>Signup here</u></a></p>
                            </button>
                        </div>
                        <div className=" mt-7">
                            {message && <BasicAlerts type={success ? 'success' : 'error'} msg={message} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
