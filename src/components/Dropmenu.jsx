import { useState } from 'react';

function Dropmenu() {
  const [isDrop, setisDrop] = useState(false);
  const dropmenuOn = () => {
    setisDrop(true);
  }
  const dropmenuOff = () => {
    setTimeout(() => {
      setisDrop(false);
    }, 100);
  }

  return (
    <div onMouseLeave={dropmenuOff}>
      <button className='py-1 px-3 font-describeFont rounded-full transition duration-110 delay-110 hover:text-orange-200 hover:bg-stone-600
      transition ease-out hover:duration-500 hover:hover:scale-110'
        onMouseOver={dropmenuOn}>Contact</button>

      {isDrop && (<ul className='right-9 top-15 rounded-lg block absolute py-2 px-3 h-auto w-40 bg-white'>
        <li className='pl-2 py-1 font-describeFont rounded-md text-stone-500 hover:bg-gray-100'><a href="https://www.facebook.com/pin.thanyaporn.3/" target="_blank" >Facebook</a></li>
        <li className='pl-2 py-1 font-describeFont rounded-md text-stone-500 hover:bg-gray-100'><a href="https://www.instagram.com/niq.myt/" target="_blank">Instagram</a></li>
        <li className='pl-2 py-1 font-describeFont rounded-md text-stone-500 hover:bg-gray-100'><a href="https://line.me/ti/p/Jwvsu5KOlj" target="_blank">Line</a></li>
      </ul>)}
    </div>
  )
}


export default Dropmenu