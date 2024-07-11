import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import { AuthContext } from '../../../Context/MyContext';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext)

    const logoutHandler = () => {
        LogOut()
    }
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const menuItems = <>
        <li className='style-none font-semibold '><Link to={'/'}>Home</Link> </li>
        <li className='style-none font-semibold '><Link to={'/register'}>Register</Link> </li>
        <li className='style-none font-semibold '><a onClick={scrollToServices}>Services</a></li>
        {
            user?.email ? <>
                <li className='style-none font-semibold '><Link onClick={logoutHandler}>Log Out</Link> </li>

            </> : <>
                <li className='style-none font-semibold '><Link to={'/login'}>Log in</Link> </li>

            </>
        }
        <li className='style-none font-semibold '><Link to={'/order'}>Orders</Link> </li>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-50"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menuItems}
                    </ul>
                </div>
                <Link className='w-[50px] h-[50px] flex' to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}

                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;