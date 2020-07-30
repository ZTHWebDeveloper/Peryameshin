import React, { Component } from 'react';
import './App.css';
//Router
import Main from './components/Router/main'
//Nabvar 
import NabvarLayout from './components/homeComponent/NavbarLayout'
import SliderImage from './components/homeComponent/sliderImage';

//Footer 
import Footer from './components/homeComponent/footer';
class App extends Component {
 
    render() {
  
      return (
                <div>
                  <NabvarLayout />
                  <SliderImage />
                  {/* Change Page */}
                    <Main />
                   
                  {/* Change Page */}
                  <Footer />
              </div>
       
      );
    }
  }
  
  export default App;