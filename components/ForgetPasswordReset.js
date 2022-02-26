import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPasswordReset } from '../store_slices/data_fetch/authenticationDataFetch';

const ForgetPasswordReset = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm(); 
    const router = useRouter();
    const token = router.query.token ? router.query.token : '';
    const dispatch = useDispatch();
    const messageLoading = useSelector(state=> state.authInfo?.authLoading)
    const confirmationStatus = useSelector(state=> state.authInfo?.userInfo.success)

    const fromHandleSubmit = (data)=>{
        dispatch(forgetPasswordReset(data))
    }

    useEffect(()=>{
        if(confirmationStatus){
            toast("your Password successfully Change, Please Login again")
            router.replace('/login')
        }else if(confirmationStatus == false){
            toast("Something Wrong, Please try again...")
        }
    },[confirmationStatus])
   
    return (
        <div className='container '>
            
            <div className='flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-200 py-10 sm:mx-30 lg:mx-60 rounded-3xl'>
                <div className='grid '>
                <Toaster />
                    <div className='w-full mb-10'>
                        <h2 className='text-4xl uppercase underline'>Login Information</h2>
                    </div>

                    <div className='w-full'>
                        <form onSubmit={handleSubmit(fromHandleSubmit)}>
                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Email</span>
                                
                                <input 
                                    type="text" 
                                    placeholder='email' 
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
                                <span className="block text-sm font-medium text-slate-700">Confirmation password</span>
                            
                                <input 
                                    type="password" 
                                    placeholder='Confirmation password'  
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

                            <input 
                                type="hidden" 
                                className="input-box"
                                value={token}
                                {...register("token")}
                            />

                            <label className="block mb-5 text-center mt-10 ">
                                <button className='w-full text-2xl font-semibold bg-orange-600 text-white active:bg-black px-12 py-2 rounded-lg'>
                                            {messageLoading ? "Loading..." : "Submit"}
                                </button>
                            </label>

                            
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ForgetPasswordReset;