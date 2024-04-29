import React from 'react'
import renderStars from '../helpers/stars.jsx'

const Card = ({ info }) => {
    return (
        <div className='card'>
            <img className='card__image' src={info.image} />
            <strong className='card__title'>{info.title}</strong>
            <p>{info.description}</p>

            <div className="card__bottom">
                <strong>Course rating</strong>
                <hr />
                {renderStars(info.rating)}
            </div>
        </div>
    )
}

export default Card