import React from "react";
import Envato from '../assets/images/market.svg';

function Nav() {
    return (<nav className='nav-wrapper banner_canvas theBall-outer'>
        
        <div className="nav-content">
        
            <ul className="list-styled">
                <li>
                    <img src={Envato}  height={100} width={150} alt="Apple" />
                </li>
                
                <li>
                <button className='button'>Buy now</button>
                </li>
            </ul>
        </div>

    </nav>);
}

export default Nav;