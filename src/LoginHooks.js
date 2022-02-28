import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import './LoginHooks.css';
import { useNavigate } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from './utils/refreshToken';

const clientId = '327746320269-navidel5ajusr7n0bvmu67duq49e2kfp.apps.googleusercontent.com'

function LoginHooks() {
  let navigate = useNavigate();	

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    navigate('/profile');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    redirectUri: 'https://localhost:3000/home',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <div className="rounded-md shadow">
        <div
         className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 space-x-3"
        >
          <div><img className='signInIcon' src="google.svg"></img></div>
          <div>Sign in with Google</div>
        </div>
      </div>
    </button>
  );
}

export default LoginHooks;
