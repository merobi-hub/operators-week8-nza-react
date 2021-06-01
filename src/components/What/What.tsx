import React from 'react';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './css/whatStyles.css';
import wood_background from '../../assets/images/nza_background.jpg';
import business_img from '../../assets/images/sub-02-business.jpg';
import litigation_img from '../../assets/images/sub-02-litigation.jpg';
import subrogation_img from '../../assets/images/sub-02-subrogation.jpg';
import warehouse_img from '../../assets/images/sub-02-warehouse.jpg';
import side_img from '../../assets/images/sub-01-attorneys.jpg';
require('./css/whatStyles.css');


interface Props{
    title: string
}

export const What = ( props:Props ) => {

    return (
        <body>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>

            <div className="outer_container">
                <img id="img" src={wood_background} alt="wood grain border"/>

                <div className="inner_container">

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
                    
                    <div className="line-1"></div>
                    <div className="line-2"></div>

                    {/* <div className = "grid-container">  */}

                        <div id="row2" className="row">
                        
                            <div className="col-md-3">

                                <nav className="sidenav">

                                    <h5>WHAT WE DO</h5>
                                    <h6>Subrogation
                                        <li> Property</li>
                                        <li> Worker's Comp</li>
                                    </h6>
                                    <h6>Litigation 
                                            <li>Appeliate</li>
                                            <li>Commercial</li>
                                            <li>Defense</li>
                                            <li>Labor/Employment</li>
                                    </h6>
                                    <h6>Business
                                            <li>Brokerage Agreement</li>
                                            <li>Business Formation </li>
                                            <li> Business Related</li>
                                                <li>Contracts</li>
                                                    <li> Property</li>
                                                        <li> Labor/Employment</li>
                                    </h6>
                                    <h6>Transportation
                                        <li>Brokerage Agreement</li>
                                        <li> Business Formation</li>
                                    </h6>

                                    <img id="side-img"src={side_img}/>

                                    <h5>Attorneys</h5>
                                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                            
                                </nav>

                            </div>  
                    
                            
                            <div className="col-md-9">

                                <div id="text-area">

                                    <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto consequatur aut natus earum dolorem tenetur hic sunt eum facilis cupiditate cumque, ducimus ea laudantium! Dolorem in itaque rem omnis doloribus maxime, modi similique quod impedit excepturi ullam animi! Commodi aut consectetur vel. Pariatur soluta eveniet officia sunt dicta aut dignissimos eius assumenda, similique incidunt. Consequuntur hic totam libero, ratione fuga, non similique voluptatibus, iste et accusamus adipisci odit corporis inventore fugiat nihil nulla eaque. Nisi nobis eum dolores nulla, explicabo velit aperiam possimus, laborum molestiae consectetur architecto soluta perferendis minima accusantium fuga. Consectetur quaerat culpa quasi alias maxime dolores?</h6>
                            
                                </div>

                                <div id="img-area">
                                    <img src={business_img}/>
                                    <img src={litigation_img}/>
                                    <img src={subrogation_img}/>
                                    <img src={warehouse_img}/>
                                </div>

                            </div>
                        
                        </div>
                    
                    {/* </div>  */}
                    
                    <div className="footer" >

                            <div className="row" id="footer-link">
                            
                                

                                    <div id="who" className="col-md-2">

                                        
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