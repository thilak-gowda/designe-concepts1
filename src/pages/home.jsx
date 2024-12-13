import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Heading from "../components/heading";
import Testimonial from "../components/testimonials";

function Home() {
    return (
        <section>
            <Carousel slide={false}>
                <Carousel.Item>
                    <div className="blc-patch">

                    </div>
                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="w-100 caro-img" alt="" />
                    <Carousel.Caption>
                        <p>Modern Luxury</p>
                        <h3>Luxe Heaven</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="blc-patch">

                    </div>
                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="w-100 caro-img" alt="" />
                    <Carousel.Caption>
                        <p>Modern Luxury</p>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="blc-patch">

                    </div>
                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="w-100 caro-img" alt="" />
                    <Carousel.Caption>
                        <p>
                            Modern Luxury
                        </p>
                        <h3>Third slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h3 className="text-center pt-5">
                Do not hesitate to say <span className="helo"> Hello </span>
            </h3>


            <section className="about-ush text-center">
                <Heading
                    aboutUs="About Us"
                    hed11="Expertly crafting"
                    hed12="your dream"
                />
                <p className="sm-acont text-center w-50 d-block mx-auto pt-3 abtt-c">
                    We turn your interior design dreams into reality with our specialized touch in elegant and functional spaces.
                </p>

                <a href="" className="our-ser">
                    Our Services
                </a>

            </section>


            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sec-2im">
                                <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/0e06e24b-ffe1-4104-9bcb-37c673740fd9-1920x1200.jpg" className="or-serimg" alt="" srcset="" />
                            </div>
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            {/* className="mis-vis" */}
                            <Accordion defaultActiveKey="0" flush className="mis-vis">
                                <Accordion.Item eventKey="0" className="">
                                    <Accordion.Header className="brd-btm my-0">History</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="brd-btm ">Mission</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className="">Vision</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <div className="row pt-5 px-5 px-lg-0">
                                <div className="col-lg-4 text-center">
                                    <p className="numbers mb-0">
                                        64
                                    </p>
                                    <p className="no-cli pt-2">
                                        Clients Around the World
                                    </p>
                                </div>

                                <div className="col-lg-4 text-center">
                                    <p className="numbers nm-2 mb-0">
                                        124
                                    </p>
                                    <p className="no-cli pt-2">
                                        Projects Completed
                                    </p>
                                </div>

                                <div className="col-lg-4 text-center">
                                    <p className="numbers mb-0">
                                        244K
                                    </p>
                                    <p className="no-cli pt-2">
                                        Square Feet
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>


            <section className="about-ush text-center">
                <Heading
                    aboutUs="Services"
                    hed11="Expertly crafting"
                    hed12="your dream"
                />
                <p className="sm-acont text-center w-50 d-block mx-auto pt-3 abtt-c">
                    We turn your interior design dreams into reality with our specialized touch in elegant and functional spaces.
                </p>

                <a href="" className="our-ser">
                    Our Services
                </a>

            </section>



            <section className="about-ush text-center">
                <div className="container">
                    <Heading
                        aboutUs="Quiet Space"
                        hed11="Showcase"

                    />
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Ultra-realistic-photo-of-Modern-take-on-bali-ins-2-650x1300.jpg" className="w-100 sho-mn-img" alt="" />
                        </div>
                        <div className="col-lg-8 cl-hig">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-bali-inspired-small-apartment-white-1300x650.jpg" className="w-100 im-1" alt="" />

                            <div className="row ">
                                <div className="col-lg-6">
                                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-4-1300x1300.jpg" className="w-100 im-2 pt-4 " alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-4-1300x1300.jpg" className="w-100 im-3 pt-4" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 pt-4">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-copy.jpg" alt="" className="w-100 img-sec-2" />
                        </div>

                        <div className="col-lg-4 pt-4">
                            <img src="https://themes.pixelwars.org/interioz/demo-01/wp-content/uploads/sites/2/2024/07/Modern-take-on-upscale-bali-inspired-small-apartme-copy.jpg" alt="" className="w-100 img-sec-2" />
                        </div>

                    </div>
                </div>

            </section>


            <section>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <Heading
                                aboutUs="Process"
                                hed11="Interior "
                                hed12="Process"
                            />
                        </div>

                        <div className="col-lg-6">
                            <p>
                                Transforming a space involves understanding and applying key design principles to create a harmonious and functional environment.
                            </p>

                            <a href="" className="get-intouch mt-5">
                                Get in Touch!
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Heading
                    aboutUs="Projects"
                    hed11="Design Excellence "
                    hed12="Unveiled"
                />

                <Testimonial />

            </section>


            <section>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <Heading
                                aboutUs="Team"
                                hed11="Meet Our"
                                hed12="Designers"
                            />
                        </div>

                        <div className="col-lg-6">
                            <p>
                                Transforming a space involves understanding and applying key design principles to create a harmonious and functional environment.
                            </p>

                            <a href="" className="get-intouch mt-5">
                                Get in Touch!
                            </a>

                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 pt-lg-5">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 pt-lg-5">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 mt-lg-0 pt-lg-0">
                            <div className="per-img">
                                <img src="" alt="" />
                                <div className="pos-ab">
                                    <p className="designation">
                                        Lead Designer
                                    </p>
                                    <p className="per-name">
                                        Mark Thompson
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Home;

