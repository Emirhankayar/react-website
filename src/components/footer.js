import React from "react"
import './footer.css'
import { FaInstagramSquare } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


export default function Footer(){
    return (
    <div className="footer">
    <footer className="itemfooter">
        <div className="top">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
            <div className="social">
                <i className="fa-brands fa-square-instagram"><a href=""><FaInstagramSquare /></a></i>
                <i className="fa-brands fa-square-behance"><a href=""><FaBehanceSquare/></a></i>
                <i className="fa-brands fa-linkedin"><a href=""><FaLinkedin/></a></i>
            </div>
        </div>
        <div className="copy">2023 © Copyright Petkova</div>
    </footer>
  </div>
    )
}