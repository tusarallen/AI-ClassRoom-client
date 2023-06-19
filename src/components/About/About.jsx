import ai from "../../assets/about/about-big3.jpg";
import aii from "../../assets/about/about-sm3.jpg";

const About = () => {
  return (
    <div className="mb-12">
      <h2 className="text-center font-extrabold text-3xl text-orange-500 mt-12">
        WHO WE ARE
      </h2>
      <div className="hero min-h-screen w-11/12 mx-auto bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={ai} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={aii}
              className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
            />
          </div>
          <div className="lg:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-success">About Us</h3>
            <h1 className="text-5xl font-bold mt-3">
              Transform your AI <br /> skills with our premier AI training{" "}
              <br /> institute!
            </h1>
            <p className="py-6 mt-2">
              Our AI training programs offer a myriad of diverse options,
              ensuring a comprehensive learning experience for every aspiring AI
              enthusiast. Say goodbye to mundane education and embrace an
              exciting journey filled with practical projects
            </p>
            <p className="mt-1">
              Leave no room for doubt as you acquire the knowledge and skills
              required to become a proficient AI professional.Join us today and
              unlock the potential of artificial intelligence!
            </p>
            <button className="btn hover:btn-success btn-warning mt-5">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
