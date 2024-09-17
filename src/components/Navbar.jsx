import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropmenu from './Dropmenu';

function Navbar() {
    const [isMenuOn, setisMenuOn] = useState(false);

    const toggleMenu = () => {
        setisMenuOn(!isMenuOn);
    }

    return (
        <nav className="sticky z-10 top-2 mx-4 rounded-xl shadow-2xl backdrop-contrast-50 ">
            <div className='flex justify-between item-center px-7 p-3 font-serif text-white '>
                <span><Link className='font-portfolioFont text-3xl font-bold' to="/home">Personal</Link></span>

                <div className="flex md:hidden"> {/* ถ้าหน้าจอขนาดกลาง up hidden */}
                    <button className=' inline-block justify-end text-white' onClick={toggleMenu} >
                        <svg
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strok-width="2"
                            viewBox="0 0 24 24"
                            className='w-6 h-6'
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>

                        </svg>
                    </button>
                </div>

                <ul className="hidden md:flex p-1 justify-center item-center">
                    <li className=' py-1 px-3 font-describeFont rounded-full transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 
                    transition ease-out hover:duration-500 hover:hover:scale-110'
                    ><Link to="/home">Home</Link></li>
                    <li className=' ml-2 py-1 px-3 font-describeFont rounded-full transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 
                    transition ease-out hover:duration-500 hover:hover:scale-110'
                    ><Link to="/">Login</Link></li>
                </ul>

                {/* Mobile */}
                {/* check_isMenuOn */}
                {isMenuOn ? (
                    <ul className="block absolute p-2 end-6 top-14 text-stone-500 rounded-lg bg-stone-200  md:hidden">
                        <li className=' py-1 px-3 font-describeFont rounded-full transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 
                        transition ease-out hover:duration-500 hover:hover:scale-110'
                        ><Link to="/home">Home</Link>
                        </li>
                        <li className=' py-1 px-3 mt-2 font-describeFont rounded-full transition duration-110 delay-110 hover:delay-110 hover:text-orange-200 hover:bg-stone-600 
                        transition ease-out hover:duration-500 hover:hover:scale-110'
                        ><Link to="/">Login</Link>
                        </li>
                    </ul>
                ) : null}

            </div>
        </nav>
    )
}

export default Navbar