

function Home() {
    const brands = [
        {name: 'HM', link: '/HM.jpg'},
        {name: 'Obey', link: '/Obey.jpg'},
        {name: 'Shopify', link: '/Shopify.jpg'},
        {name: 'Lacoste', link: '/Lacoste.jpg'},
        {name: 'Levis', link: '/Levis.jpg'},
        {name: 'Amazon', link: '/Amazon.jpg'}
    ]

  return (
    <>
      <div className="container">
        <div className="big_baner">
          <div className="left">
            <h1>
              <span>LET’S</span> <br /> EXPLORE <br />
              <span>UNIQUE</span>
              <br /> CLOTHES.
            </h1>
            <p>Live for Influential and Innovative fashion!</p>

            <div className="yellow_button">
              <img alt="yellow" src={require("./../../img/yellow.jpg")} />
              <button>Shop Now</button>
            </div>
          </div>
          <img alt="banner" src={require("./../../img/big_banner.png")} />
        </div>
      </div>
      <div className='brands'>
        {brands.map((brand, index) => 
          <img key={index} alt='HM' src={require('./../../img' + brand.link)} />
        )}
      </div>

      <div className='container'>
        <h3 className='title'>NEW ARRIVALS</h3>
        <div className='cards'>
          <div className='card'>
            <img alt='cardImg' src={require('./../../img/carousel1.jpg')}/>
            <div className='info'>
              <div>
                <h4>Hoodies & Sweetshirt</h4>
                <p>Explore Now!</p>
              </div>
              <svg viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 2" d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979"/>
              </svg>
            </div>
          </div>
          <div className='card'>
            <img alt='cardImg' src={require('./../../img/carousel2.jpg')}/>
            <div className='info'>
              <div>
                <h4>Coats & Parkas</h4>
                <p>Explore Now!</p>
              </div>
              <svg viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 2" d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979"/>
              </svg>
            </div>
          </div>
          <div className='card'>
            <img alt='cardImg' src={require('./../../img/carousel3.jpg')}/>
            <div className='info'>
              <div>
                <h4>Tees & T-Shirt</h4>
                <p>Explore Now!</p>
              </div>
              <svg viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 2" d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='yellow_banner'>
        <div className='content'>
          <div className='promo_img'>
            <img alt='banner' src={require('./../../img/YellowBanner.jpg')} />
          </div>
          <div className='yellow_title'>
            <h1><span>PAYDAY </span><br /> SALE NOW</h1>
            <p>Spend minimal $100 get 30% off <br /> voucher code for your next purchase</p>
            <p><b>1 June - 10 June 2021</b><br />*Terms & Conditions apply</p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div className='container'>
        <h3 className='title'>Young’s Favourite</h3>
        <div className='favourites'>
          <div className='favoure'>
            <img alt='img' src={require('./../../img/favoure1.jpg')} />
            <div className='info'>
              <div>
                <h4>Trending on instagram</h4>
                <p>Explore Now!</p>
              </div>
              <svg viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 2" d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979"/>
              </svg>
            </div>
          </div>

          <div className='favoure'>
            <img alt='img' src={require('./../../img/favoure2.jpg')} />
            <div className='info'>
              <div>
                <h4>All Under $40</h4>
                <p>Explore Now!</p>
              </div>
              <svg viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 2" d="M33.0607 12.5607C33.6464 11.9749 33.6464 11.0251 33.0607 10.4393L23.5147 0.893398C22.9289 0.307611 21.9792 0.307611 21.3934 0.893398C20.8076 1.47919 20.8076 2.42893 21.3934 3.01472L29.8787 11.5L21.3934 19.9853C20.8076 20.5711 20.8076 21.5208 21.3934 22.1066C21.9792 22.6924 22.9289 22.6924 23.5147 22.1066L33.0607 12.5607ZM0 13L32 13V10L0 10L0 13Z" fill="#797979"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='preFooter'>
        <div className='container'>
          <h2>JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h2>
          <p>Type your email down below and be young wild generation</p>
          <input placeholder='Add your email here' />
          <button>SEND</button>
        </div>
      </div>
    </>
  );
}

export default Home;
