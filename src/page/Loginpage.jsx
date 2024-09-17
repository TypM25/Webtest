import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginBox from '../components/LoginBox';
import RegisterBox from '../components/RegisterBox';
import Navbar from '../components/Navbar';

function Loginpage() {

  return (
    <div className='flex justify-center h-full w-full m-6'>
      <div className="flex justify-center items-center rounded-xl w-5/6 bg-cover bg-center bg-[url('./image/bg_login.jpeg')] md:justify-end  ">
        <LoginBox />
      </div>
    </div>
  );
}

export default Loginpage;
