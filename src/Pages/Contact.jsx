import React, { useState } from 'react'

function Contact() {
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Data submission as .${data.fullname}.Mobile Number ${data.mobile}. Company name is ${data.Cname}. message says ${data.message}`);

    }

    const [data, setdata] = useState({
        fullname : "",
        email :"",
        mobile :"",
        Cname :"",
        message :"",
    });
    const InputEvent =(event)=>{
        const {name, value}= event.target;

        setdata((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };

    return (
        <div className="contact">
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                name="fullname" value={data.fullname} onChange={InputEvent} placeholder="full name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput2" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" 
                                name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput3" className="form-label">Mobile</label>
                                <input type="number" className="form-control" id="exampleFormControlInput3" 
                                name="mobile" value={data.mobile} onChange={InputEvent} placeholder="Enter your Contact Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput4" className="form-label">Company Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput4" 
                                name="Cname" value={data.Cname} onChange={InputEvent} placeholder="Company name(if any)" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                
                                <input type="submit" className="form-control btn btn-primary" id="exampleFormControlInput1" value="Submit" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
