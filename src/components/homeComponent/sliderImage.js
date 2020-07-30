import React, { Component } from 'react'
import '../NavCSS/sliderImage.css' 
export class sliderImage extends Component {
    render() {
        return (
           <div className="HeaderImage">
               <div className="village_name">
                    <p className="tharsi">Tharsi Township</p>
                    <p className="tharsi">Kyawe kya Village</p>
               </div>
               <marquee><p className="tharsi">Tharsi Township</p>
               <p className="tharsi">Kyawe kya Village</p></marquee>
               
               <h2>Paryameshin</h2>
               <h4>Pataheta</h4>
               <h4>Healthy Orgainzation</h4>
           </div>
            
        )
    }
}

export default sliderImage

