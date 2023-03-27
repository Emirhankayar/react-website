import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project03 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.intext } alt="" />
                </div>
                <div className="ptitle"><h4>Interior and Exterior drawings</h4></div>
                    <div className="double-text">
                        <p id='t1'>Drawings was made during studying in Russian Academy of Art

                           <p>
                           A series of interiors and exteriors done in pencil or watercolour.                           </p>
                        </p>
                        <p id='t2'>
                        </p>
                    </div>


                    <div class="gallery">
                        <div className="galleryin">
                            <div class="item item-1">
                                <LazyLoad >
                                    <ModalImage hideDownload hideZoom small={images.intext1} medium={images.intext1} large={images.intext1}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-2">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.intext2}medium={images.intext2} large={images.intext2}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-3">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.intext3}medium={images.intext3} large={images.intext3}></ModalImage>
                                </LazyLoad>
                            </div>
                        </div>
                        
                    </div>
                    <div class="gallery">
                        <div className="galleryinrev">
                            <div class="item item-4" >
                                <LazyLoad>
                                    <ModalImage hideDownload hideZoom small={images.intext4} medium={images.intext4} large={images.intext4}></ModalImage>
                                </LazyLoad>
                            </div>
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