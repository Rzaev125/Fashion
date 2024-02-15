import Card from '../card/Card';
import './Arrivals.css'

import cat01Img from './../../assets/categories/cat-01.jpg'
import cat02Img from './../../assets/categories/cat-02.jpg'
import cat03Img from './../../assets/categories/cat-03.jpg'

export default function Arrivals() {
    return ( 
        <section className="arrivals">
            <div className="container">
                <div className="arrivals_header">
                    <h2 className='title-2'>NEW ARRIVAS</h2>
                </div>
                <div className="arrivals_cards">
                    <Card title="Hoodies & Sweetshirt" img={cat01Img} />
                    <Card title="Coats & Parkas" img={cat02Img} />
                    <Card title="Tees & T-Shirt" img={cat03Img} />
                </div>
            </div>
        </section>
    );
}