import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faGithub, faTwitter, faTelegram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';


function FooterComponent() {
    return (
        <div className='bg-dark ' style={{ color: "white",overflow: 'hidden' }}>
            
            {/* <!-- End Map Section --> */}
            <div className='d-flex justify-content-around' >

                <div>
                    <h1>Apps</h1>
                    <p>Mobile Apps</p>
                    <p>Web Apps</p>
                    <p>Websites</p>
                    <p>Microsoft Office</p>
                </div>
                <div>
                    <h1>About</h1>
                    <p>About Us</p>
                    <p>  Privacy Commitment</p>
                    <p>  Perspectives</p>
                    <p>   Events</p>
                    <p>   Press</p>
                    <p>  MyApp in the News</p>
                    <p>  MyApp Opinions</p>
                    <p>  Contact Us</p>
                    
                    <p> Careers</p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>   Sales</p>
                    <p>   0000000000000</p>
                    <p>   +9779845000000</p>
                    <p>   sales@myapp.com</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <p>© 2022, MyApp Corporation Pvt. Ltd. All Rights Reserved.</p>
            </div>
            <div className='d-flex flex-col  justify-content-center min-h-screen py-2 pb-5'>
                <div className='d-flex text-6xl'>

                    <span className='fa'>
                        <FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon>
                    </span>
                    <span className='fa'>
                        <FontAwesomeIcon icon={faTwitter} size="3x"></FontAwesomeIcon>
                    </span>
                    <span className='fa'>
                        <FontAwesomeIcon icon={faTelegram} size="3x"></FontAwesomeIcon>
                    </span>
                    <span className='fa'>
                        <FontAwesomeIcon icon={faGoogle} size="3x"></FontAwesomeIcon>
                    </span>
                    <span className='fa'>
                        <FontAwesomeIcon icon={faWhatsapp} size="3x"></FontAwesomeIcon>
                    </span>
                    <span className='fa'>
                        <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
                    </span>
                    <span className='fa'>
                        <FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon>
                    </span>
                </div>
            </div>
        </div>
    )

}

export default FooterComponent


