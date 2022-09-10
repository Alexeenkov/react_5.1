import React from 'react';
import s from './Card.module.css';

const Card = ({ img, link, children }) => {

    return (
        <article className={s['card']}>
            <div className={s['img-container']}>
                <img src={img} alt="" />
            </div>
            <div className={s['content']}>
                {children}
                <a href={link}>Go somewhere</a>
            </div>
        </article>
    );
}

export default Card;