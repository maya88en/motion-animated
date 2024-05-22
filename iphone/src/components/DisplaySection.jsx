import React from 'react';
import Stick from '../assets/images/effect4.png'

function DisplaySection() {
    return (

        <div className='display-section wrapper'>

            <ul className='links'>
                <li>
                    <a className='link'>
                        <span className='description'> Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</span>
                        <h2 className='title'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</h2>
                    </a>
                    <button className='button'>Purchase From Envato</button>
                </li>
                <li>
                    <img src={Stick} alt="Stick" />
                </li>
            </ul>

        </div>
    );
}

export default DisplaySection;