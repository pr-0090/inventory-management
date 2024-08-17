import { React } from 'react'
import { Carousel, Row } from "react-bootstrap"

function FirstPage() {
    return (
        <div id="firstPage" className='bg bg-light bg-' style={{ height: 700,paddingTop:70,overflow:'hidden'}}>
            <div className='pt-5' style={{ display: 'flex', justifyContent: 'center', height: '61vh' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/coursel_img1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/coursel_img2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/coursel_img3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <div style={{ textAlign: "center", backgroundColor: 'warning',width:'100%' }}>
                    <h1>Your Life's Work, Powered By Our Life's Work</h1>
                    <h4>Unique and powerful suite of software to run your entire business, brought to you by a</h4>
                    <h4>company with the long term vision to transform the way you work.</h4>
                </div>
            </div>
        </div>
    )
}

export default FirstPage