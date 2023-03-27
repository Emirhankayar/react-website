import './App.css';
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './components/navbar.js'
import Footer from './components/footer.js';
import {HiChevronLeft as LeftArrow} from "react-icons/hi";
import {HiChevronRight as RightArrow} from "react-icons/hi";
import {useRef} from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import Item from "./Item"

import images from './assetprojects/assets';

import Photo from "./assets/photo.jpg"

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <LeftArrow size={50} />
    ) : (
      <RightArrow size={50} />
    );
  return (
    <button className="carobut" onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
};



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 800, itemsToShow: 1},
  { width: 1200, itemsToShow: 2 },
  
];



function App() {
  const carouselRef = useRef(null);
  let resetTimeout;

  return (
    
    
    <div className="app">
      
      <Navbar />
  
      <Parallax pages={6} style={{ top:'0', left:'0' }} className="animation" speed={0.1}>


        <ParallaxLayer sticky={{ start: 0, end: 1 }} offset={0} speed={0} style={{ justifyContent:'center', zIndex: -1}}>
          <div className="animation_layer parallax" id="tigers-hero"></div>
          </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.001} style={{ justifyContent:'center', zIndex: 1, }}> 
          <div className="animation_layer parallax" id="text-hero">
            <h1>Portfolio</h1>
            <h3>Anastasiia Petkova</h3>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2.5}>
          <div className="animation_layer parallax" id="mouse-hero"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2.5}>
          <div className="animation_layer parallax" id="mouse-roll"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.02}>
          <div className="animation_layer parallax" id="flowers"></div>
        </ParallaxLayer>
        
        <ParallaxLayer sticky={{ start: 1.5, end: 2.5 }} speed={0.25} style={{ justifyContent:'center', pointerEvents:'none'}}>
          <div className="animation_layer parallax" id="about">
            <h2>About</h2>
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2.5} speed={0.001} style={{zIndex:99}} >
              <div className="animation_layer parallax" id="about-container">
                <div className="rcol">
                  <img src={Photo} alt="" />
                </div>
                <div className="lcol">
                    <p>Hello, my name is Anastasiia. I am a very passionate and curious person. In my opinion, empathy is an important
                part of design, because design itself is about people, only when we really look at
                it from the consumer's point of view and feel their emotions, we can make truly 
                engaging products. My ultimate goal is to make other people's lives easier by simply
                filling them with beauty, and subsequently, I always try to find balance in my design 
                by comparing the contexts of contemporary and traditional art forms. That's why I am 
                interested in design - whether in the work or in the interior, it is always the preferred 
                choice. Surrounded by aesthetics, you don't necessarily have to visit a museum to taste
                the beauty. I truly believe that art will save the world because it awakens our extraordinary 
                human emotions and motivates us to do good.
                     </p>
                  </div>
                </div>

            </ParallaxLayer> 

        <ParallaxLayer offset={3.5} speed={0.1} style={{ zIndex:-20}}>
          <div className="animation_layer parallax" id="bottom"></div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 4.2, end:5.3}} speed={0.0001} style={{pointerEvents:'none'}}>
          <div className="animation_layer parallax" id="projects"><h2>Projects</h2></div>
        </ParallaxLayer>
        
        <ParallaxLayer className="animation_layer parallax" offset={5.3} speed={0.0001} style={{zIndex:100}}>
          <div className="carro">
            
            <Carousel renderArrow={myArrow}
             className="carroin"
             ref={carouselRef}
              enableSwipe enableMouseSwipe enableTilt
               itemPadding={[0, 20]} 
               enableAutoPlay autoPlaySpeedms={1500} 
               breakPoints={breakPoints}
               onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                    carouselRef?.current?.goTo(0);
                }, 4000); // same time
            }}>
              <Item id='it'><a  className="carobox" href="/Project.01"><img src={images.p2} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.02"><img src={images.still} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.03"><img src={images.intext} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.04"><img src={images.pira} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.05"><img src={images.ant} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.06"><img src={images.vp} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.07"><img src={images.ink} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.08"><img src={images.post} alt="" /></a></Item>
              <Item id='it'><a  className="carobox" href="/Project.09"><img src={images.p4} alt="" /></a></Item>
            </Carousel>
          </div>
        </ParallaxLayer>
        <Footer />
      </Parallax>

    </div>
  );
}

export default App;
