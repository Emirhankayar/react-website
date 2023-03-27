import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project06 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.vp } alt="" />
                </div>
                <div className="ptitle"><h4>Viewing Platform Project</h4></div>
                    <div className="double-text">
                        <p id='t1'>Drawing was made during studying in Russian Academy of Art

                           <p>The total area of the upper and lower platforms is up to 250 m ^ 2, the height
difference between the platforms is up to 2500 mm. It was necessary to design a
descent to the water, with at least two platforms, one smaller than the other. And also
use at least 2 Doric capitals. In the figure, I depicted a perspective, a top view with
terrain, a facade and a cut view of the project.</p>
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