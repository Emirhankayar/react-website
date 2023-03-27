import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project01 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.p2 } alt="" />
                </div>
                <div className="ptitle"><h4>Table Lamp</h4></div>
                    <div className="double-text">
                        <p id='t1'>Every design starts with researching, gathering information, and creating the emotion you want people to experience. 
                        Some of my keywords for this project are; vintage, authentic, buoyant, clean and soothing.
                           <p>
                        In my design, I always try to find balance by comparing the contexts of contemporary and traditional art forms.
                           </p>
                        </p>
                        <p id='t2'>
                        This table lamp was mainly inspired by an old chandelier. Therefore, the central part, made in an organic flower 
                        shape with elegant lines, is combined with a steel hoop that adds a clean and contemporary look. For the material, 
                        I chose gold-plated metal for the body and glass for the interior parts. Prototype was made with all technical 
                        components to better understand the dimensions and technical process of the lamp.
                        </p>
                    </div>


                    <div class="gallery">
                        <div className="galleryin">
                            <div class="item item-1">
                                <LazyLoad >
                                    <ModalImage hideDownload hideZoom small={images.p1} medium={images.p1} large={images.p1}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-2">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.p7}medium={images.p7} large={images.p7}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-3">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.p8}medium={images.p8} large={images.p8}></ModalImage>
                                </LazyLoad>
                            </div>
                        </div>
                        
                    </div>
                    <div class="gallery">
                        <div className="galleryinrev">
                            <div class="item item-4">
                                <LazyLoad>
                                    <ModalImage hideDownload hideZoom small={images.prot2} medium={images.prot2} large={images.prot2}></ModalImage>
                                </LazyLoad>
                            </div>
                            <div class="item item-5">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.prot1}medium={images.prot1} large={images.prot1}></ModalImage>
                                </LazyLoad>
                            </div>
                            <div class="item item-6">
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