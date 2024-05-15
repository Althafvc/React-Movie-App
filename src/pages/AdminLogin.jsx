import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicAlerts from "../components/Alerts";


function AdminLogin({setAdmin}) {

    const [loginData, setloginData] = useState({ email: '', secretkey: '' })


    const [message, setMessage] = useState('')

    const [success, setSuccess] = useState(false)

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    function navigatetoSignup() {

        Navigate('/signup')
    }

    const adminExist = useSelector(state => state.adminData)

    function handleLoginData(e) {
        e.preventDefault()
        const { name, value } = e.target
        setloginData({ ...loginData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        //checking if any fiealds are empty
        if (loginData.email.trim() === '' || loginData.secretkey.trim() === '') {
            setMessage('All fields are mandatory')

        } else {

            const emailMatching = adminExist.find((data) => data.email === loginData.email)
            const sectretkeymatching = import.meta.env.VITE_SECRET_KEY == loginData.secretkey

            //comparing the details entered with the datas in the storage
            if (!emailMatching || !sectretkeymatching) {
                setMessage('nvalid Admin entry request')

                //dealing with data matching case
            } else {
                setSuccess(true)
                setMessage('Admin logging in successfully')
               dispatch({type:'AdminLogged'})
                setTimeout(() => Navigate('/admin/home'), 800)
            }

        }
    }


    if (message) setTimeout(() => setMessage(''), 800)

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
                                            <input onChange={handleLoginData} value={loginData.email} autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 text-sm" placeholder="email " />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">email</label>
                                        </div>
                                        <div className="relative">
                                            <input value={loginData.secretkey} onChange={handleLoginData} id="password" name="secretkey" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Secret key" />
                                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Secret key</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-cyan-500 text-white rounded-md px-2 py-1" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <span onClick={navigatetoSignup}>Do not have an account ? Sign in</span>
                            </button>
                        </div>
                        <div className=" mt-7">
                            {message && <BasicAlerts type={success ? 'success' : 'error'} msg={message} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin