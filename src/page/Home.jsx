import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import InfoBox from '../components/InfoBox';

function Home() {
  return (
    <div className="h-full w-full p-[17px] bg-auto bg-[url('./image/bg1.jpeg')] ">
      <Navbar />
      <div className='flex justify-center my-[100px]'>
        <InfoBox />
      </div>
    </div>
  )
}

export default Home