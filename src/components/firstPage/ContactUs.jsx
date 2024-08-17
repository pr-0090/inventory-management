import React from 'react'

function ContactUs() {
    const contactMessage = "";
    function onSubmit() {
        alert(contactMessage)
    }
    return (
        <div id="Contact" style={{ height: 700, paddingTop: 20 ,marginBottom:150}}>
            <div className='d-flex mt-5 '>
                <div className='mt-5'>
                    <img src="./img/contactUs.png" alt="" />
                </div>
                <div className='mt-5'>
                    {/* <section classNameName="mb-4"> */}
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" method="POST">
                                <div className="d-flex">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="name" className="">Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="email" className="">Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label for="subject" className="">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-md-left ml-4">
                                    <button type="submit" onClick={onSubmit} className=" w-50 btn-outline-primary rounded mt-5 ">Send</button>
                                </div>
                            </form>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center pb-5">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Kathmandu, Nepal</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+9779845000000</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@mypay.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* </section> */}
                </div>
            </div>
        </div>
    )
}

export default ContactUs