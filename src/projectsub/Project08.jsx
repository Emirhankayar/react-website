import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project08 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.post } alt="" />
                </div>
                <div className="ptitle"><h4>Poster Designs</h4></div>
                    <div className="double-text">
                        <p id='t1'>Project was made on my own

                           <p>
                           I wanted to make a brutalist style poster, with a space theme. For this project I picked
                           “Plakat” and “Futura” fonts. Colour palette as well helping to give this feeling of
                           space.                        </p>
                        </p>
                        <p id='t2'>
                        </p>
                    </div>


                    <div class="gallery">
                        <div className="galleryin">
                            <div class="item item-1">
                                <LazyLoad >
                                    <ModalImage hideDownload hideZoom small={images.post1} medium={images.post1} large={images.post1}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-2">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.post3}medium={images.post3} large={images.post3}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-3">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.post2}medium={images.post2} large={images.post2}></ModalImage>
                                </LazyLoad>
                            </div>
                        </div>
                        
                    </div>
                    <div class="gallery">
                        <div className="galleryinrev">
                            <div class="item item-5" style={{opacity:'0', pointerEvents:'none'}}>
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.p4}medium={images.p4} large={images.p4}></ModalImage>
                                </LazyLoad>
                            </div>
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