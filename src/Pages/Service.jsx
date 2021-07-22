import React from 'react';
import Card from './Components/Card';
import Sdata from './Sdata';


function Service() {
    return (
        <div className="service my-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h1 className="text-center">Our Services</h1>
                        <div className="row">
                            
                                {Sdata.map((val,ind)=>{
                                    return (
                                        <div className="col-md-4 col-10 mx-auto">
                                        <Card 
                                        img={val.img}
                                        title={val.title}
                                        description={val.description}
                                        direct={val.direct}
                                    />
                                    </div>)
                                }
                                )}
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Service
