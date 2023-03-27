import './Projects.css'
import React from 'react'
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import images from './assetprojects/assets.js';


export default function Projects(){
    return (
    <body className="allproj">

                <div className="headerpr">
                    <Navbar/>
                </div>

                <div className='title'>
                    <h2 className='pro'>Projects</h2>
                </div>

                <div className="thumbnail">
                    <ul className='ulbox'>
                        <li><a href="/Project.01"><img src={ images.p2 } alt="" /></a></li>
                        <li><a href="/Project.02"><img src={ images.still } alt="" /></a></li>
                        <li><a href="/Project.03"><img src={ images.intext } alt="" /></a></li>
                        <li><a href="/Project.04"><img src= { images.pira } alt="" /></a></li>
                        <li><a href="/Project.05"><img src= { images.ant } alt="" /></a></li>
                        <li><a href="/Project.06"><img src={images.vp} alt="" /></a></li>
                        <li><a href="/Project.07"><img src={images.ink} alt="" /></a></li>
                        <li><a href="/Project.08"><img src={images.post} alt="" /></a></li>
                        <li><a href="/Project.09"><img src={images.p4} alt="" /></a></li>


                    </ul>
                </div>
                <div className="footerpr">
                    <Footer />
                </div>

    </body>

    );
}