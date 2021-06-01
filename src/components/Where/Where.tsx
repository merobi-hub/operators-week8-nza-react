import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './css/whereStyles.css';
import wood_background from '../../assets/images/nza_background.jpg';
import career_img from '../../assets/images/content-navlink-career.jpg';
require('./css/whereStyles.css');

interface Props{
    title: string
}

export const Where = ( props:Props ) => {

    return (
        <body>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>

            <div className="outer_container">

                <img className="img" src={wood_background} alt="wood grain border"/>

                <div className="main_container">

                    <div className="row">

                        <div id="logo" className="col-md-10">
                            
                            <img id="image" src="http://via.placeholder.com/350x90" alt="law firm logo"/>
                        </div>

                        <div className="col-md-2">
                            
                            <button className="button">Log in</button>
                        </div>

                    </div>
                    
                    <span id="vertline1">I</span>
                    <span id="vertline2">I</span>
                    <span id="vertline3">I</span>
                    <span id="vertline4">I</span>

                    <div id="topnav">
                                <ul>
                                    <li>
                                        <Link to="/">WHO WE ARE</Link>
                                    </li>
                                    <li>
                                        <Link to="/what">WHAT WE DO</Link>
                                    </li>
                                    <li>
                                        <Link to="#">NEWS & EVENTS</Link>
                                    </li>
                                    <li>
                                        <Link to="/where">WHERE WE WORK</Link>
                                    </li>
                                    <li>
                                        <Link to="#">CONTACT US</Link>
                                    </li>
                                </ul>
                    </div>

                    <div className="line_1"></div>
                    <div className="line_2"></div>

                    <div id="row1" className="row">

                        <div id="sidenav-area" className="col-md-2">

                            <nav className="sidenav">

                                <div>
                                    <h5>WHERE WE WORK</h5>
                                </div>

                                <div className="sidenav_content">
                                        
                                        <div className="sidenav_content_text">

                                            <p><h6>United States</h6></p>
                                            <p><h6>International</h6></p>
                                        
                                        </div>
                                        <div>
                                            <img id="side-img" src={career_img} alt="man sitting at desk"/>
                                        </div>

                                        <div className="career_text">
                                            <a href="#"><h6>Career Opportunities</h6></a>
                                        </div>

                                        <h6>Join our magnificent firm.</h6>

                                </div>    
                        
                            </nav>

                        </div>

                        <div className="col-md-9">

                            <div className="text_location_area">

                                <div id="location-grid" className="grid-container">

                                    <div className="location_text">

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pretium nulla, 
                                            at rutrum urna consectetur sed. Cras ultricies efficitur magna, eu congue urna sodales 
                                            eget. Aenean id purus quis enim scelerisque tempus id a metus. Nunc vitae luctus leo. 
                                            Morbi eget malesuada purus. Nam a faucibus massa, et blandit leo. Etiam rutrum ante mi, 
                                            vel mattis justo dignissim vel. Curabitur nisi magna, finibus in vehicula et, malesuada 
                                            facilisis tellus. Suspendisse imperdiet non nulla sit.  
                                        </p>

                                    </div>

                                    <div className="location_headings">

                                        <p>United States</p>

                                    </div>

                                    <div className="location_headings2">

                                        <p>International</p>

                                    </div>

                                </div>

                                <div className="states_grid">

                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>Canada</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>Columbia</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>Germany</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>Nicaragua</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>
                                    <p></p>
                                    <p></p>
                                    <p>State</p>
                                    <p>State</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">

                            <div id="footer-link" className="row">
                           
                                

                                    <div id="who" className="col-md-2 offset-md-1">

                                        
                                            <Link to="/" className="text-uppercase">who we are</Link>
                                        

                                    </div>

                                    <div id="what" className="col-md-2">

                                    
                                            <Link to="/what" className="text-uppercase">what we do</Link>
                                        

                                    </div>

                                    <div id="news" className="col-md-2">

                                        
                                            <Link to="#" className="text-uppercase">News & events</Link>
                                        

                                    </div>

                                    <div id="where" className="col-md-2">

                                        
                                            <Link to="/where" className="text-uppercase">Where we work</Link>
                                        

                                    </div>

                                    <div id="contact" className="col-md-2">

                                        
                                            <Link to="#" className="text-uppercase">contact us</Link>
                                        

                                    </div>

                                    {/* <span className="footer-line"></span> */}

                                
                        
                            </div>                    
                    </div>

                </div>

            </div>

        </body>
    )
}