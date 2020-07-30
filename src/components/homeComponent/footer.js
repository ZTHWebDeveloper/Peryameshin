import React, { Component } from 'react'
import '../OrganizationCSS/Footer.css'
export class footer extends Component {
    render() {
        return (
            <div className="footer_one">
                <div className="footer_container">
                    <div className="footer">
                        <div className="contact_me">
                            <h2 style={{fontSize:'25px'}}>Contact me</h2>
                            <a href="#">
                                <span>Phone</span>
                                <p>0781716928</p>
                                <span>Email</span>
                                <p>naungnaung781777@gmail.com</p>
                            </a>
                        </div>
                        <div className="information">
                            <h2 style={{fontSize:'25px'}}>Information</h2>
                            <ul>
                                <li>Press release</li>
                                <li>Term conditions</li>
                                <li>Privacy policy</li>
                                <li>Career center</li>
                                <li>Contact us</li>
                                
                            </ul>
                        </div>
                        <div className="subscription">
                            <h2 style={{fontSize:'25px'}}>Subscription</h2>
                            <p>Please subscribe to us to get new topics. After subscripting, we will send you latest topics.</p>
                            <div className="subscriber">
                                <input type="email" name="email" placeholder="Enter your email address" autocomplete="off" class="inputfooter"/>
                                <input type="submit" name="send" value="Subscribe" class="submitfooter"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bar">
                    <div className="footer-item">
                        <div className="footer_title">
                            <h2 style={{fontSize:'25px'}}>
                               <span className="red">N</span> 
                               <span className="red">A</span> 
                               <span>U</span>
                               <span>N</span>
                               <span>G</span>&nbsp;
                               <span className="green">NAUNG</span>
                            </h2>
                        </div>
                        <div className="footer_copyright">
                            <p> &copy;2019 Naung Naung </p>
                            <ul>
                                <li className="list"><a href="#">Home |</a></li>
                                <li className="list"><a href="#">About |</a></li>
                                <li><a href="#">Contact |</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer
