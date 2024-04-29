import React from 'react'
import renderStars from '../helpers/stars.jsx'
import styles from './Card.module.css'

const Card = ({ info }) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={info.image} />
            <strong className={styles.title}>{info.title}</strong>
            <p>{info.description}</p>

            <div className={styles.bottom}>
                <strong>Course rating</strong>
                <hr />
                {renderStars(info.rating)}
            </div>
        </div>
    )
}

export default Card