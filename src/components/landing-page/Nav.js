import React from 'react'

const Nav = () => {
    const navItem = "whitespace-nowrap text-primary-700 font-bold sm:mx-12 mx-6 sm:text-base text-sm";

  return (
    <nav className="bg-transparent pt-5 min-w-screen">
        <ul className="flex lg:justify-start justify-center" data-aos="fade-down" data-aos-duration="500">
            <li className={navItem}><a href="#home">Home</a></li>
            <li className={navItem}><a href="#about-us">About Us</a></li>
            <li className={navItem}><a href="#feedback">Feedback</a></li>
        </ul>
    </nav>
  )
}

export default Nav
