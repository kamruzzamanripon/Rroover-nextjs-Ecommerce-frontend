import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../store_slices/data_fetch/authenticationDataFetch';

const ForgetPssword = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm(); 
    const dispatch = useDispatch();
    const messageLoading = useSelector(state=> state.authInfo?.authLoading)
    const mailSendMessage = useSelector(state=> state.authInfo?.userInfo?.message)

    //console.log("login page", userLoginSuccess)
    const fromHandleSubmit = (data)=>{
        dispatch(forgetPassword(data))
    }

    return (
        <div className='container '>
       
        <div className='flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-200 py-10 sm:mx-30 lg:mx-60 rounded-3xl'>
            <div className='grid '>
                
                <div className='w-full mb-10'>
                    <h2 className='text-4xl uppercase underline'>Forget Password Information</h2>
                </div>

                <div className='w-full'>
                    <form onSubmit={handleSubmit(fromHandleSubmit)}>
                        <label className="block mb-5">
                            <span className="block text-sm font-medium text-slate-700">Email</span>
                            
                            <input 
                                type="text" 
                                placeholder='Type you email' 
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
         

                        <label className="block mb-5 text-center mt-10 ">
                            <button className='w-full text-2xl font-semibold bg-orange-600 text-white active:bg-black px-12 py-2 rounded-lg'>
                                    {messageLoading ? "Loading..." : "Submit"}
                           </button>
                        </label>
                        
                        {mailSendMessage && <p className='text-white font-semibold'>{mailSendMessage}</p>}
                        
                        <label className="block mt-10 flex justify-between">
                            <Link href="/register"><a className='text-white text-lg active:text-black'>Register Account</a></Link>
                            <Link href="/login"><a className='text-white text-lg active:text-black'>Login</a></Link>
                        </label>
                        
                    </form>
                </div>

            </div>
        </div>
    </div>
    );
};

export default ForgetPssword;