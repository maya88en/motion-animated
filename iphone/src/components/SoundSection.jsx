import React from 'react';
import Effect from "../assets/images/effect2.png";
import Test from "../assets/images/effect1.png";
import Art from "../assets/images/effect3.png";

function MotionSection() {
    return ( 
            <div className='sound-section wrapper'>
                <div className='body'>
                <h2 className='title'>Trusted by thousands of users around the world</h2>
                    <div className='sound-section-content content'>
                        
                        <ul className='links'>
                            <li>
                                <a className='link'>
                                <img src={Effect} alt="Effect2" height={80} width={80} />  
                                </a>
                            </li>
                            <li>
                            <img width="155" height="20" srcset="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4-150x20.png" alt="stars-img"></img>
                            <p>4.5 Score, 9 Reviews</p>
                            </li>
                            <li>
                                <a className='link'>
                                <img src={Test} alt="Effect2" height={80} width={80} />  
                                </a>
                            </li>
                            <li>
                            <img width="155" height="20" srcset="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4-150x20.png" alt="stars-img"></img>
                            <p>4.5 Score, 9 Reviews</p>
                            </li>
                            <li>
                                <a className='link'>
                                <img src={Art} alt="Effect2" height={80} width={80} />  
                                </a>
                            </li>
                            <li>
                            <img width="155" height="20" srcset="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4-150x20.png" alt="stars-img"></img>
                            <p>4.5 Score, 9 Reviews</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

     );
}

export default MotionSection;