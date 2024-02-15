import styles from './Card.module.css'
import arrowImg from './../../assets/icons/arrow.svg'

export default function Card(props) {
    return ( 
        <div className={styles.card}>
            <a href='#!' className={styles.card_link}></a>
            <img className={styles.card_img} src={props.img} alt='CardImage' />
            <div className={styles.card_body}>
                <div className={styles.card_text}>
                    <div className={styles.card_title}>
                        {props.title}
                    </div>
                    <div className={styles.card_muted}>
                        Explore Now!
                    </div>
                </div>
                <div className={styles.card_icon}>
                    <img src={arrowImg} alt='Arrow' />
                </div>
            </div>
        </div>
    );
}