import React from "react";


function Heading(props) {
    return (
        <div className="hed-container pt-5 ">
            <div className="sub-hed pt-5">
                <span className="line"></span>
                <span>{props.aboutUs}</span>
                <span className="line"></span>
            </div>

            <p className="hed-cont text-center">
                <span>  {props.hed11} </span> <br />  <span>{props.hed12}</span>
            </p>

        </div>
    )
}


export default Heading;