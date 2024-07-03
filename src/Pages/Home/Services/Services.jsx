import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className="text-3xl text-orange-600 font-bold">Our Services</h3>
                <h2 className="text-5xl  font-bold">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
               {
                 services.map(service=><div key={service._id} className="card bg-base-100 w-full shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={service.img}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">{service.title}</h2>
                      <p>Price: {service.price}</p>
                      <div className="card-actions">
                       <Link to={`/book/${service._id}`}> <button className="btn btn-primary">Book Now</button></Link>
                      </div>
                    </div>
                  </div>)
            }
            </div>
        </div>
    );
};

export default Services;