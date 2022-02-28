import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '327746320269-navidel5ajusr7n0bvmu67duq49e2kfp.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
