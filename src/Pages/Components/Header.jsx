import React from 'react'
import { NavLink } from 'react-router-dom';

function Header({heroimage,transfer,heading1,subtitle,btn}) {
    return (
        <div>
            <section id="header" className="">
                <div className="container_fluid">
                    <div className="row">
                        <div className="col-10 mx-auto sidebar">
                            <div className="sidebar1">
                                <h1>
                                {heading1}
                                    <span className="brand-name">Mace Creations</span>
                                </h1>
                                <h2 className="my-3">
                                {subtitle}
                                </h2>
                                <div className="mt-3">
                                    <NavLink className="btn get-started" to={transfer}>{btn}</NavLink>
                                </div>
                            </div>
                                <div className="sidebar2">
                                    <img className="downmotion" src={heroimage} alt="heroimage" />
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
