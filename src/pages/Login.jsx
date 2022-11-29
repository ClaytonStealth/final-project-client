import React from "react";
import { useState } from "react";
import loginImg from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useAuth } from "../Hooks/auth.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [signUpButton, setSignUpButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img
        className='absolute w-full h-full object-cover mix-blend-overlay'
        src={loginImg}
        alt='/'
      />

      <div className=' flex justify-center items-center h-full '>
        <div className=' max-w-[400px] w-full mx-auto bg-white dark:bg-zinc-500 p-8 rounded-lg relative'>
          <h2 className='text-4xl font-bold text-center py-4 dark:text-white'>
            N3XTzION.
          </h2>
          {registerMessage && <h3 className='font-bold'>{registerMessage}</h3>}
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl dark:hover:shadow-zinc-800 px-6 py-2 relative flex items-center rounded-lg dark:text-zinc-300'>
              <AiFillFacebook className='mr-2' /> FaceBook
            </p>
            <p className='border shadow-lg hover:shadow-xl dark:hover:shadow-zinc-800 px-6 py-2 relative flex items-center rounded-lg dark:text-zinc-300'>
              <FcGoogle className='mr-2' /> Google
            </p>
          </div>
          <div className='flex flex-col mb-4 relative'>
            <label>Email</label>
            <input
              className='border relative bg-gray-100 p-2 rounded-lg dark:bg-zinc-500 dark:text-white'
              type='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='flex flex-col relative'>
            <label>Password</label>
            <input
              className='border relative bg-gray-100 p-2 rounded-lg dark:bg-zinc-500 dark:text-white'
              type='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {signUpButton ? (
            <button
              className='w-full py-3 mt-8 bg-indigo-600 hover:bg-transparent dark:hover:text-zinc-300 relative text-white rounded-lg'
              onClick={async () => {
                const registerResult = await auth.register(email, password);
                if (registerResult.success) {
                  setSignUpButton(false);
                }
                if (!registerResult.success) {
                  setRegisterMessage(registerResult.message);
                }
              }}
            >
              Sign up
            </button>
          ) : (
            <button
              className='w-full py-3 mt-8 bg-indigo-600 hover:bg-transparent dark:hover:text-zinc-300 relative text-white rounded-lg'
              onClick={async () => {
                const loginResult = await auth.login(email, password);
                if (loginResult.success) {
                  navigate("/home");
                }
              }}
            >
              Sign In
            </button>
          )}

          <p className='flex items-center relative mt-2 dark:text-zinc-300'>
            <input className='mr-2' type='checkbox' />
            Remember Me
          </p>
          <p
            className='text-center mt-8 relative dark:text-zinc-300 hover:text-indigo-400 dark:hover:text-indigo-400 cursor-pointer'
            onClick={() => setSignUpButton(!signUpButton)}
          >
            {signUpButton
              ? "Already a member? Sign in"
              : "Not a member? Sign up"}
          </p>
        </div>
      </div>
    </div>
  );
}
