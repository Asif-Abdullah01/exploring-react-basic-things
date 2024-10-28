import React, { useState } from 'react';
import Link from '../Link/Link';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaRegWindowClose } from "react-icons/fa";

const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' }
];


const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-yellow-200 p-6'>
            <div className='md:hidden text-2xl' onClick={()=> setOpen(!open)}>
                {
                    open? <FaRegWindowClose></FaRegWindowClose> : <HiOutlineMenuAlt1></HiOutlineMenuAlt1> 
                }


            </div>
            <ul className={`md:flex duration-1000 absolute md:static
                ${open? 'top-16':'-top-60'}
                bg-yellow-200 px-5`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;