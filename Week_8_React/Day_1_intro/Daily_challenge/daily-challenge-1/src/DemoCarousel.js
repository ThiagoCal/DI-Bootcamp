import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_280,h_224/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="first" width="300px"/>
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_280,h_224/cities/liw377az16sxmp9a6ylg.webp" alt="second" width="300px"/>
                    <p className="legend">New York</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_280,h_224/cities/c1cklkyp6ms02tougufx.webp"  alt="third" width="300px"/>
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel