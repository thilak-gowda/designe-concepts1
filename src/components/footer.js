import React from "react";
import Heading from "./heading";


function Footer() {
    return (
        <>

            <div className="footer py-5 mt-5">
                {/* <div className="ftr-cover"></div> */}
                <div className="container py-5 px-4 z-in">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-header">

                                Let's <br /> Connect
                            </div>
                        </div>

                        <div className="col-md-8 ftr-cnt py-4 px-4">
                            <div className="row">

                                <div className="col-md-6 text-center text-white">
                                    <p className="ftr-he">
                                        Amsterdam
                                    </p>

                                    <a href="" className="continfo">
                                        010-1234567
                                    </a>

                                    <a href="" className="continfo">
                                        info@interiozwars.org
                                    </a>

                                    <p className="address pt-4">
                                        56 Tulip Terrace, 1023 EF Amsterdam, Netherlands
                                    </p>


                                </div>

                                <div className="col-md-6 text-center text-white">
                                    <p className="ftr-he">
                                        Amsterdam
                                    </p>

                                    <a href="" className="continfo">
                                        010-1234567
                                    </a>

                                    <a href="" className="continfo">
                                        info@interiozwars.org
                                    </a>

                                    <p className="address pt-4">
                                        56 Tulip Terrace, 1023 EF Amsterdam, Netherlands
                                    </p>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}


export default Footer;