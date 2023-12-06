import React from 'react';
import LoginForm from './components/LoginForm';
import Lines from '../../components/Lines';


const Login = () => {

  return (
    <div className="flex h-screen">
      <Lines />
      <div className="flex-1 flex items-center justify-center">
        <div className="border border-gray-300 shadow-xl shadow-gray-300 p-6 w-[300px] rounded-xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
  
  
  
  
};

export default Login;

