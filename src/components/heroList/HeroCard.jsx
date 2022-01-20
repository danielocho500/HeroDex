import React from 'react';
import './heroList.css'

export const HeroCard = ({name, biography, image}) => {
    const {url} = image
    const fullName = biography["full-name"]

    return (
        <div className='card'>
            <img src={url} alt={name} className="card-img-top card__img"
                onError={(e) => {
                    e.target.src = "assets/img/noPhoto.png"
                }}
            />
            <div className="card-body">
                <h4 className='card-title'>  {name} </h4>
                <p className='card-text'> {fullName} </p>
                <a href="#" className="btn btn-primary">See more</a>
            </div>
            
        </div>
    );
};
