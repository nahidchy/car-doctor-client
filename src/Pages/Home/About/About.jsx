import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
            <img src={person} alt="" className='w-3/4 rounded-lg' />
            <img src={parts} alt="" className='w-1/2 absolute top-1/2 right-0 border-white border-8 rounded-lg' />
          </div>
          <div className='lg:w-1/2 space-y-7'>
          <h3 className='text-3xl text-orange-600 font-bold'>About Us </h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-orange-600 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;