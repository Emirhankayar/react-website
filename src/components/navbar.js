import React, {useState} from "react";
import './navbar.css'
import logo from './logo.svg'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className='navwrapper'>
            <nav>
                <div className="logobox">
                    <a href="/">
                        <img src={logo} alt="" />
                        </a>
                </div>
                <div className="box">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Projects">Projects</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <ul className="menu-box"> 
                    <li><a href="/">Home</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <div className="socialnav">
                        <i className="fa-brands fa-square-instagram"><a href=""><FaInstagramSquare /></a></i>
                        <i className="fa-brands fa-square-behance"><a href=""><FaBehanceSquare/></a></i>
                        <i className="fa-brands fa-linkedin"><a href=""><FaLinkedin/></a></i>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar