/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../store_slices/data_fetch/authenticationDataFetch';


const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm(); 
    const dispatch = useDispatch();
    const router = useRouter();
    const newUserStatus = useSelector(state=>state.authInfo?.userInfo?.success);
    const serverError = useSelector(state=> state.authInfo?.userInfo?.data?.errors);
    const serverErrorArray = serverError && Object.entries(serverError);

    const registratiomForm = (data)=>{
        //console.log('registration page', data)
        dispatch(registration(data))
    }

    useEffect(()=>{
        if(newUserStatus){
            toast("your registration has successfully done, please Log In")
            router.replace('/login')
        }
    },[newUserStatus])

    //console.log('registration page', serverError && Object.entries(serverError))
    return (
        <div className='container '>
            <Toaster />
            <div className='flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-200 py-10 sm:mx-30 lg:mx-60 rounded-3xl'>
                <div className='grid '>
                    
                    <div className='w-full mb-10'>
                        <h2 className='text-4xl uppercase underline'>Register Information</h2>
                        {serverError && 
                            serverErrorArray.map((item, index)=>{
                                //console.log('Error map', item)
                               return <h4>{item}</h4>
                            })
                        }

                       
                    </div>

                    <div className='w-full'>
                        <form onSubmit={handleSubmit(registratiomForm)}>
                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Username</span>
                            
                                <input 
                                    type="text" 
                                    placeholder='username' 
                                    className="input-box"
                                    {...register("name", 
                                        {required: "required", 
                                        maxLength: {
                                            value:80,
                                            message:"user name maximum 80 cat."
                                        }
                                    })} 
                                />
                                {errors.name && <span className='text-red-500 font-semibold mt-1' role="alert">{errors.name.message}</span>}
                            </label>

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Email</span>
                            
                                <input 
                                    type="text" 
                                    placeholder='email' 
                                    className="input-box"
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

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Confiramation password</span>
                            
                                <input 
                                    type="password" 
                                    placeholder='Confiramation password'  
                                    className="input-box"
                                    {...register("password_confirmation", {
                                        required: "required",
                                        minLength: {
                                          value: 8,
                                          message: "min length is 8"
                                        }
                                      })}
                                />
                                 {errors.password_confirmation && <span className='text-red-500 font-semibold mt-1' role="alert">{errors.password_confirmation.message}</span>}
                            </label>

                            <label className="block mb-5 text-center mt-10 ">
                                <button className='w-full text-2xl font-semibold bg-orange-600 text-white active:bg-black px-12 py-2 rounded-lg'>Submit</button>
                            </label>

                            <label className="block mt-10 text-right">
                                <Link href="/login"><a className='text-white text-lg active:text-black'>Login Your Account</a></Link>
                            </label>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;