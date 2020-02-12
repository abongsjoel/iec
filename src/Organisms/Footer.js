import React from 'react';
import { NavLink } from 'react-router-dom';

import mailIcon from '../assets/icons/mail.png';
import phoneIcon from '../assets/icons/phone.png';
import Logo from '../assets/logo/logo.png';

import FooterHeader from '../Molecules/FooterHeader';
import NavItem from '../Atoms/NavItem';

const CONTACTINFO = {
    'info@iec.com': mailIcon,
    "0000000000": phoneIcon,
}

const ALT_VALUE = 'IEC'

const Footer = () => {
    const itemStyles = "text-xs pb-1 text-gray-800";
    return (
        <footer>
            <div className="sm:px-1/10 md:flex md:justify-end md:items-center pt-10">
                <div className="hidden md:inline-block md:w-2/5 lg:w-1/2">
                    <NavLink to="/">
                        <img src={Logo} alt={ALT_VALUE} className="h-16 lg:h-20" />
                    </NavLink> 
                </div>
                <div className="sm:flex sm:justify-between sm:w-full md:w-3/5 lg:w-1/2">
                    <div className="flex justify-center">
                        <div>
                            <FooterHeader header="Quick Links"/>
                            <ul>
                                <NavItem link='/about-us' menuItem="About Us" styles={itemStyles} />
                                <NavItem link='/what-we-do' menuItem="What We Do" styles={itemStyles} />
                                <NavItem link='/contact-us' menuItem="Contact Us" styles={itemStyles} />
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center py-8 sm:py-0">
                        <div>
                            <FooterHeader header="Contact Us"/>
                            <ul>{
                                Object.keys(CONTACTINFO)
                                    .map(contact => {
                                        return (
                                            <li className="flex items-center md:pb-2" key={contact}>
                                                <img src={CONTACTINFO[contact]} alt="" className="h-3 pr-1"/>
                                                <p className={itemStyles}>{contact}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <FooterHeader header="Address"/>
                            <ul>
                                <li className={itemStyles +" md:pb-2"}>Nullam faucibus</li>
                                <li className={itemStyles +" md:pb-2"}>Quam vel ullamoco</li>
                                <li className={itemStyles +" md:pb-2"}>Pellientesque ex libero</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-1/10 md:mt-8">
                <div className="flex justify-center w-full md:hidden py-8">
                    <NavLink to="/">
                        <img src={Logo} alt={ALT_VALUE} className="h-20" />
                    </NavLink>
                </div>
                <hr className="md:mt-0" />
                <p className="w-full flex justify-center text-xs text-gray-500 my-2">Copyright (c) 2020 - IEC</p>
            </div>
        </footer>
    );
}


export default Footer;