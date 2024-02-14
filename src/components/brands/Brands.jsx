import './Brands.css'

import hm from './../../assets/brands/HM.png'
import obey from './../../assets/brands/Obey.png'
import shopify from './../../assets/brands/Shopify.png'
import lacoste from './../../assets/brands/Lacoste.png'
import levis from './../../assets/brands/Levis.png'
import amazon from './../../assets/brands/Amazon.png'

export default function Brands() {
    return ( 
        <section className="brands">
            <div className="container">
                <ul className='brands_list'>
                    <li><a href='#!'><img src={hm} alt="hm" /></a></li>
                    <li><a href='#!'><img src={obey} alt="obey" /></a></li>
                    <li><a href='#!'><img src={shopify} alt="shopify" /></a></li>
                    <li><a href='#!'><img src={lacoste} alt="lacoste" /></a></li>
                    <li><a href='#!'><img src={levis} alt="levis" /></a></li>
                    <li><a href='#!'><img src={amazon} alt="amazon" /></a></li>
                </ul>
            </div>
        </section>
    );
}