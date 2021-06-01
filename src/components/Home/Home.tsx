import React from 'react';
import { Link } from 'react-router-dom';
import './css/homeStyles.css';
import wood_background from '../../assets/images/nza_background.jpg';
import forward_img from '../../assets/images/nza_slideshow.jpg';
require('./css/homeStyles.css');

interface Props{
    title: string
}

export const Home = ( props:Props ) => {

        return (
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
                
                <div className="outer_container">
                    <img className="img" src={wood_background} alt="wood grain border"/>
                    
                    <div className="inner_container">
                        <div className="row">
                            <div id="logo" className="col-md-10">
                            
                                <img id="image" src="http://via.placeholder.com/350x90" alt="law firm logo"/>
                            </div>
                            <div id="login" className="col-md-2">
                                
                                <button className="button">Log in</button>
                            </div>
                        </div>
                        {/* navbar */}

                       
            

                        <span className="vertline1">I</span>
                        <span className="vertline2">I</span>
                        <span className="vertline3">I</span>
                        <span className="vertline4">I</span>

                        

                        
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

                            <div className="line-1"></div>
                            <div className="line-2"></div>

                        

                        <div id="who_we_are" className="row">

                            <div className="col-md-9">

                                <img className= "forward_thinking" src={forward_img} alt="forward_thinking photo"/>
                                        
                                <div className="who_we_are_copy">
                                    <h5 className="who_we_are_header">Welcome to our website!</h5>
                                    <p className="who_we_are_text" >Nostrum website salvete! Hoc septimana I ad sectionem welcom volutpat vestibulum project 
                                                coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu. Nostrum website salvete! Hoc septimana I ad sectionem welcom volutpat vestibulum project 
                                                coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                {/* Sidebar */}
                                    <div className="wrapper">        
                                        {/* Side Navigation */}
                                        <nav className="sidebar">
                                            <h3>NEWSFEED</h3>
                                                <div>
                                                    <h6 className="center-span"></h6>
                                                        
                                                </div>
                                                        <p className="sb_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis, metus ut luctus tincidunt, erat dui euismod dolor, eget semper nibh tortor sit amet eros. Aliquam at purus blandit, fermentum justo nec, suscipit lacus. Sed at elementum leo, sed posuere elit. Duis elementum malesuada diam iaculis ultrices. Mauris ut urna sagittis turpis aliquet eleifend vitae sed orci. Donec tempor, eros ac accumsan commodo, justo ligula malesuada odio, vel rutrum mauris tortor eget nibh. Aenean tempor tortor turpis, sit amet volutpat nisl dignissim eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse id tellus et mi ultrices feugiat sed id justo. Duis lectus arcu, lacinia nec purus sit amet, porttitor ultricies nibh.

                                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dolor turpis, elementum sed ipsum ac, blandit consectetur sapien. Proin quis facilisis nibh, non vehicula lectus. Phasellus quis ipsum leo. Aliquam bibendum arcu in luctus porta. Praesent in est sed enim fermentum consectetur imperdiet id nulla. Aenean volutpat ante ac lorem eleifend laoreet. Maecenas consequat sit amet sem eget tristique. Aenean ultrices tempor ante et blandit. Curabitur eget hendrerit nunc. In maximus faucibus leo, in laoreet velit faucibus ut.</p>        
                                        </nav>
                                    
                                        <div className="contact_info">

                                            <h5 className="who_we_are_header2">Bigshot, Zoo, & Adds, P.C.</h5>
                                            <pre className="who_we_are_text2"> 
                                                419 West South Street, Suite 4200
                                                Houston, Texas 35983 
                                                555-555-5555 (Phone)
                                                555-555-5555 (Fax) 
                                            </pre>
                                        </div> 
                                    </div>
                            </div>
                                    
                        </div>
                                        
                        {/* <div className="fnav" > */}

                            <div id="fnav-link" className="row">
                            
                                {/* <div className="footer-link" > */}

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

                                {/* </div> */}
                        
                            </div>
                    
                        {/* </div> */}

                    </div>

                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.4/umd/popper.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/js/bootstrap.min.js"></script>
            
            </body>

        )
}