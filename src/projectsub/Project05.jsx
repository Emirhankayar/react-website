import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project05 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.ant } alt="" />
                </div>
                <div className="ptitle"><h4>Sketching of Antique Heads</h4></div>
                    <div className="double-text">
                        <p id='t1'>Sketching was made during studying in Russian Academy of Art

                           <p>The main task was to convey the volume, proportions, light-air perspective and make 
                            a competent composition. The sketches is made with a pencil.                           </p>
                        </p>
                        <p id='t2'>
                        </p>
                    </div>


                    <div class="gallery">
                        <div className="galleryin">
                            <div class="item item-1">
                                <LazyLoad >
                                    <ModalImage hideDownload hideZoom small={images.ant1} medium={images.ant1} large={images.ant1}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-2">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.ant2}medium={images.ant2} large={images.ant2}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-3">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.ant3}medium={images.ant3} large={images.ant3}></ModalImage>
                                </LazyLoad>
                            </div>
                        </div>
                        
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