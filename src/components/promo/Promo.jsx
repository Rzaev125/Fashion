import promoImg from '../../assets/images/header-img.jpg'

import './Promo.css'

export default function Promo() {
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo_content">
                    <div className="promo_text">
                        <div className="promo_title">
                            LET’S EXPLORE UNIQUE CLOTHES.
                        </div>
                        <div className="promo_desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo_btn-wrapper">
                            <a href="#!" className="promo_btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="promo-image">
                        <img src={promoImg} alt='Promo' />
                    </div>
                </div>
            </div>
        </section>
    );
}