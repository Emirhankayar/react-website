import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project07 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.ink } alt="" />
                </div>
                <div className="ptitle"><h4>Ink and Wash of Rocaille</h4></div>
                    <div className="double-text">
                        <p id='t1'>Drawings were made during studying in Russian Academy of Art

                           <p>The main task was to convey the volume, proportions, light-air perspective. The drawing is made in Ink and Wash technique..</p>
                        </p>
                        <p id='t2'>
                        </p>
                    </div>

                    <div class="gallery">
                        <div className="galleryinrev">
                            <div class="item item-6" style={{opacity:'0', pointerEvents:'none'}}>
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.p}medium={images.p} large={images.p}></ModalImage>
                                </LazyLoad>
                                </div>
                        </div>
                        
                    </div>

                    <div className="footersubpr">
                    <Footer />
                    </div>
    </body>
    )
}