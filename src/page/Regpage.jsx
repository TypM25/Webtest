import React from 'react'
import RegisterBox from '../components/RegisterBox'

function Regpage() {
    return (
        <div className='flex justify-center h-full w-full m-6'>
            <div className="flex justify-center items-center rounded-xl w-5/6 bg-[url('./image/bg_login.jpeg')] md:justify-end ">
                <RegisterBox/>
    
            </div>
        </div>
      );
}

export default Regpage