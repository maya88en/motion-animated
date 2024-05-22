import React from 'react';
import Motion from "../assets/images/MotionArtEffect-logo.png";


function Jumbotron() {
    return (

        <div className='jumbotron-section wrapper main'>


            <ul className='links'>
                <li>
                    <a className='link'>
                        <img className='logo' src={Motion} alt="Motion Art" />
                    </a>
                </li>
                <li>
                    <button className='button'>Purchase Now</button>
                </li>
            </ul>



            <span className='description main'>
                Attract Your Visitors Attention With Colorful
            </span>
            <p className='text main'>Motion Art Effect</p>
            <h2 className='title main'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </h2>


        </div>
    );
}

export default Jumbotron;