import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({img,title,direct,description}) {
    return (
        <div>
            <div className="card mt-3  text-center">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text">{description}</p>
                    <NavLink to={direct} className="btn btn-primary">Get Quote</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
