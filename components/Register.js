import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className='container '>
            <div className='flex justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-200 py-10 sm:mx-30 lg:mx-60 rounded-3xl'>
                <div className='grid '>
                    
                    <div className='w-full mb-10'>
                        <h2 className='text-4xl uppercase underline'>Register Information</h2>
                    </div>

                    <div className='w-full'>
                        <form>
                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Username</span>
                            
                                <input type="text" placeholder='username' className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                            </label>

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Email</span>
                            
                                <input type="text" placeholder='email' className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                            </label>

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">password</span>
                            
                                <input type="password" placeholder='password'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                            </label>

                            <label className="block mb-5">
                                <span className="block text-sm font-medium text-slate-700">Confiramation password</span>
                            
                                <input type="password" placeholder='Confiramation password'  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
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