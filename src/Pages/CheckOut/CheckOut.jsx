import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData()
    return (
        <div>
            Book: {service.title}
            <form  className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up now!</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="" className="input input-bordered" required />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="" className="input input-bordered" required />
              </div>
             </div>
              <div className="form-control mt-6">
                <button>Sign Up</button>
                <input className="btn btn-primary" type="submit" />
              </div>
            </form>
        </div>
    );
};

export default CheckOut;