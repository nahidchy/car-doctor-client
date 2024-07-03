import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
  const {signIn} = useContext(AuthContext)
    const handleLogin = (e) =>{
          e.preventDefault();
          const form = e.target;
           const email = form.email.value;
           const password = form.password.value;
           console.log(email,password)
           signIn(email,password)
           .then(result=>{
            const user = result.user;
            console.log(user)
           })
           .catch(error=>{
            console.log(error)
           })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
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
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
              <p>new to this website <Link to='/signUp'>sign up</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;