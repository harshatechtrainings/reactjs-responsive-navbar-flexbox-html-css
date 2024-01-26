import React from 'react'
import { TiHome } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import brandlogo from '../assets/images/NOBG-LOGO.png';
import { MdOutlineExpandMore } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

const Nav = () => {
  return (
   <header>
    <div className='nav-logo'>
        <a className='logo-image'>
            <img src={brandlogo} />
        </a>
        <a className="nav-bars" href="#navbar" aria-label="Open main menu">
            <i><CgMenuGridO /></i>
        </a>
    </div>
    <nav id="navbar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className="dropdown"><a  href="#">Shop<i><MdOutlineExpandMore /></i></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Belle</a></li>
                    <li><a href="#">Bubbles</a></li>
                    <li><a href="#">Dolores</a></li>
                    <li><a href="#">Fred</a></li>
                </ul>
            </li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">SignUp</a></li>
        </ul>
        <a className="close" href="#" aria-label="Close main menu">
            <i ><IoCloseCircleOutline /></i>
        </a>
    </nav>
   </header>
  )
}

export default Nav
