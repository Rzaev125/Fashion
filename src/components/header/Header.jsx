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
                    <div className="header_nav">NAV</div>
                </div>
            </div>
        </header>
    );
}