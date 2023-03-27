import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project04 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.pira } alt="" />
                </div>
                <div className="ptitle"><h4>Copy of Engraving by Piranesi</h4></div>
                    <div className="double-text">
                        <p id='t1'>Project was made during studying in Russian Academy of Art
                           <p>
                           The copy was made by ink and pen.
                        </p>
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