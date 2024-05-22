import React from 'react';
import Section from '../assets/images/section.png';
import Page from '../assets/images/page.png';

function Motion() {
    return (

        <div className='motion-section wrapper'>

            <span className='description'>Apply On Any Section Or Enable For Whole Page</span>

            <ul className='links'>
                <li>
                    <a className='link'>
                        <span className='description'> Apply on Section</span>
                        <h2 className='title'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </h2>
                        <img src={Section} alt="Section photo" height={400} width={400} />
                    </a>

                </li>
                <li>
                    <a className='link'>
                        <span className='description main'> Apply on Page</span>
                        <h2 className='title'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</h2>
                        <img src={Page} alt="Page photo" height={400} width={400} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Motion;

