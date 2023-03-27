import React from "react";
import './Project01.css'
import Navbar from '../components/navbar.js'
import Footer from "../components/footer.js";
import ModalImage from "react-modal-image"
import LazyLoad from 'react-lazyload';

import images from "../assetprojects/assets";

export default function project09 () {
    return(
    <body className="subprojall">

                <div className='header'> 
                <Navbar />
                </div>

                <div className='imgpreview'>
                    <img src={ images.p4 } alt="" />
                </div>
                <div className="ptitle"><h4>The Collection "Harmony in Contrast"</h4></div>
                    <div className="double-text">
                        <p id='t1'>Project was made during foundation course in Istituto Marangoni
                           <p>
                           The collection of products was inspired by country where I came from, Russia. First
                           of all, I started to do research about Russian culture: nature, national costume,
                           architecture, art traditional and modern respectively. Based on this I created keywords
                           and group them to for different groups: peace of mind (appeasement, natural, 
                           calmness, boundless, hospitable, sincere, motherland), enigmatic mysticism 
                           (mysterious, enigmatic, mythology, mystical, religious, traditions),
                           </p>
                        </p>
                        <p id='t2'>
                        expressive brutalism (geometrical, brutal, strict, indestructible, constructive, abstract), redmajesty 
                        (patterns, overdressed, red, colourful, majestic, rich, decorative, overwhelming).
                        For design language I picked such characteristics as geometrical
                        shapes, play of light, decorative, detailed, colour accent and patterns. The main idea
                        of my collection was to combine dualities such as overwhelming traditions and
                        geometrical brutalism, that is why you can see elements from both as shapes. For this
                        project I chose to do candle holder, book holder and table mirror, which together and
                        separately would design a nice environment.
                        </p>
                    </div>


                    <div class="gallery">
                        <div className="galleryin">
                            <div class="item item-1">
                                <LazyLoad >
                                    <ModalImage hideDownload hideZoom small={images.p5} medium={images.p5} large={images.p5}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-2">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.col1}medium={images.col1} large={images.col1}></ModalImage>
                                </LazyLoad>
                            </div>

                            <div class="item item-3">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.p6}medium={images.p6} large={images.p6}></ModalImage>
                                </LazyLoad>
                            </div>
                        </div>
                        
                    </div>
                    <div class="gallery">
                        <div className="galleryinrev">
                            <div class="item item-4">
                                <LazyLoad>
                                    <ModalImage hideDownload hideZoom small={images.proj1} medium={images.proj1} large={images.proj1}></ModalImage>
                                </LazyLoad>
                            </div>
                            <div class="item item-5">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.proj2}medium={images.proj2} large={images.proj2}></ModalImage>
                                </LazyLoad>
                            </div>
                            <div class="item item-6">
                                <LazyLoad>
                                    <ModalImage  hideDownload hideZoom small={images.proj3}medium={images.proj3} large={images.proj3}></ModalImage>
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