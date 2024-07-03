import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
    const book = useLoaderData();
    const {user} = useContext(AuthContext);
    const {price,_id} = book;
    const handleBookService =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // const name = form.name.value;
        const order = {customerName:name,date,email,service:_id,price:price};
        console.log(order)
    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-10">Book service {book.title}</h2>
            <form onSubmit={handleBookService} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name='date'  className="input input-bordered" required />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' defaultValue={user?.email}  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input type="text"defaultValue={book.price}  className="input input-bordered" required />
              </div>
              
             </div>
             <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Order confirm" />
              </div>
            </form>
        </div>
    );
};

export default BookService;