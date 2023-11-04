function Navbar() {
    return ( 
        <nav>
          <div className='logo'>
            <img alt='logo' src={require('./../../img/logo.jpg')} />
            <h3>FASHION</h3>
          </div>
          <ul>
            <li><a href='#'>CATALOGUE</a></li>
            <li><a href='#'>FASHION</a></li>
            <li><a href='#'>FAVOURITE</a></li>
            <li><a href='#'>LIFESTYLE</a></li>
            <li><button>SIGN UP</button></li>
          </ul> 
        </nav>
    );
}

export default Navbar;