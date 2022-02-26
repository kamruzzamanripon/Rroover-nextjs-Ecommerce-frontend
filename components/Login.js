import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store_slices/data_fetch/authenticationDataFetch';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const userLoginSuccess = useSelector(state=> state.authInfo?.userInfo?.success);
    const serverError = useSelector(state=> state.authInfo?.userInfo?.error);
    const { register, handleSubmit, formState: { errors }, } = useForm(); 
    const [serverErrordata, setServerErrordata] = useState("");

    //console.log("login page", userLoginSuccess)
    const fromHandleSubmit = (data)=>{
        //e.preventDefault();
        //let data = {email, password}
        dispatch(login(data))
        
    }

    useEffect(()=>{
        if(userLoginSuccess){
            toast("Successfully Log In.")
            router.replace('/')
        }

        if(serverError){
            setServerErrordata(serverError)
        }
    },[userLoginSuccess, serverError])

    //console.log("user warning", email)
    return (
        <div className='container '>
            <Toaster />
            <div className='flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-200 py-10 sm:mx-30 lg:mx-60 rounded-3xl'>
                <div className='grid '>
                    
                    <div className='w-full mb-10'>
                        <h2 className='text-4xl uppercase underline'>Login Information</h2>
                        <h3>{serverErrordata && serverErrordata}</h3>
                    </div>

                    <div className='w-full'>
                        <form onSubmit={handleSubmit(fromHandleSubmit)}>
                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Username Or Email</span>
                                
                                <input 
                                    type="text" 
                                    placeholder='username or email' 
                                    className="input-box"
                                    onChange={e => setEmail(e.target.value)}
                                    {...register("email", {
                                        required: "required",
                                        pattern: {
                                          value: /\S+@\S+\.\S+/,
                                          message: "Entered value does not match email format"
                                        }
                                      })}
                                />
                                {errors.email && <span className='text-red-500 font-semibold mt-1' role="alert">{errors.email.message}</span>}
                            </label>

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">password</span>
                            
                                <input 
                                    type="password" 
                                    placeholder='password'  
                                    className="input-box"
                                    onChange={e => setPassword(e.target.value)}
                                    {...register("password", {
                                        required: "required",
                                        minLength: {
                                          value: 8,
                                          message: "min length is 8"
                                        }
                                      })}
                                />
                                {errors.password && <span className='text-red-500 font-semibold mt-1' role="alert">{errors.password.message}</span>}
                            </label>

                            <label className="block mb-5 flex justify-between">
                                <span><input type="checkbox" className="cursor-pointer mr-2" /> Remember me</span>
                                <Link href="/"><a>Lost Your Password</a></Link>
                            </label>

                            <label className="block mb-5 text-center mt-10 ">
                                <button className='w-full text-2xl font-semibold bg-orange-600 text-white active:bg-black px-12 py-2 rounded-lg'>Submit</button>
                            </label>

                            <label className="block mt-10 text-right">
                                <Link href="/register"><a className='text-white text-lg active:text-black'>Create New Account</a></Link>
                            </label>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;