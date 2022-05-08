import React from "react";

const Card = ({country}) => {

    return (
        <article className="card">
            <div className="card__header">
                <div className="card__header-info">
                    <div className="card-emoji">{country.emoji}</div>
                    <div className="card-country">{country.name}</div>
                </div>
                <span className={`card__header-continent continent-${country.continent.code}`}>{country.continent.name}</span>
            </div>
            <div className="card__body">
            <div className="card-info">
                    <span>Capital</span>
                    <h3>{country.capital || 'Unknown'}</h3>
                </div>
                <div className="card-info">
                    <span>Currency </span>
                    <h3>{(country.currency || "Unknown").split(',').join(', ')}</h3>
                </div>
                <div className="card-info">
                    <span>Languages</span>
                    <h3>{country.languages.reduce((acc, lan) => [...acc, lan.name], []).join(', ') || 'Unknown'}</h3>
                </div>
            </div>
        </article>
    )
}

export default Card;