import React from "react";
import loginImg from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export default function Login2() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img
        className='absolute w-full h-full object-cover mix-blend-overlay'
        src={loginImg}
        alt='/'
      />

      <div className=' flex justify-center items-center h-full'>
        <div className=' max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg'>
          <h2 className='text-4xl font-bold text-center py-4'>N3XTzION.</h2>
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-lg'>
              <AiFillFacebook className='mr-2' /> FaceBook
            </p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-lg'>
              <FcGoogle className='mr-2' /> Google
            </p>
          </div>
          <div className='flex flex-col mb-4 relative'>
            <label>Username</label>
            <input
              className='border relative bg-gray-100 p-2 rounded-lg'
              type='text'
            />
          </div>
          <div className='flex flex-col relative'>
            <label>Password</label>
            <input
              className='border relative bg-gray-100 p-2 rounded-lg'
              type='password'
            />
          </div>
          <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white rounded-lg'>
            Sign In
          </button>
          <p className='flex items-center relative mt-2'>
            <input className='mr-2' type='checkbox' />
            Remember Me
          </p>
          <p className='text-center mt-8 relative'>Not a member? Sign up now</p>
        </div>
      </div>
    </div>
  );
}
