import logo from './../../assets/icons/logo.svg'

import "./Header.css";

export default function Header() {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                        <span>Fashion</span>
                    </div>
                    <nav className="header_nav">
                        <ul>
                            <li><a href='#!'>CATALOGUE</a></li>
                            <li><a href='#!'>FASHION</a></li>
                            <li><a href='#!'>FAVOURITE</a></li>
                            <li><a href='#!'>LIFESTYLE</a></li>
                            <li><a href='#!' className='header_nav-btn'>SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}