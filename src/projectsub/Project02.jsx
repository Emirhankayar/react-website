import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project02 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.still } alt="" />
                </div>
                <div className="ptitle"><h4>Still Life</h4></div>
                    <div className="double-text">
                        <p id='t1'>Project was made during studying in Russian Academy of Art
                           <p>
                           A series of still lifes painted in watercolour
                           </p>
                        </p>
                        <p id='t2'>
                        </p>
                    </div>


                    <div class="gallery">
                        <div className="galleryin">
                            <div class="item item-1">
                                <LazyLoad >
                                    <ModalImage hideDownload hideZoom small={images.still1} medium={images.still1} large={images.still1}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-2">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.still2}medium={images.still2} large={images.still2}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-3">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.still3}medium={images.still3} large={images.still3}></ModalImage>
                                </LazyLoad>
                            </div>
                        </div>
                        
                    </div>
                    <div class="gallery">
                        <div className="galleryinrev">
                            <div class="item item-4">
                                <LazyLoad>
                                    <ModalImage hideDownload hideZoom small="" medium=""large=""></ModalImage>
                                </LazyLoad>
                            </div>
                            <div class="item item-5">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small="" medium="" large=""></ModalImage>
                                </LazyLoad>
                            </div>
                            <div class="item item-6">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small="" medium="" large=""></ModalImage>
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