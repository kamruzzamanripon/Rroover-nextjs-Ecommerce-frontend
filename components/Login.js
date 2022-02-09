import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <div className='container '>
            <div className='flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-200 py-10 sm:mx-30 lg:mx-60 rounded-3xl'>
                <div className='grid '>
                    
                    <div className='w-full mb-10'>
                        <h2 className='text-4xl uppercase underline'>Login Information</h2>
                    </div>

                    <div className='w-full'>
                        <form>
                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Username Or Email</span>
                            
                                <input type="text" placeholder='username or email' className="input-box"/>
                            </label>

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">password</span>
                            
                                <input type="password" placeholder='password'  className="input-box"/>
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