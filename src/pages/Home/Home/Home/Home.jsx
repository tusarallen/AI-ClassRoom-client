import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Testimonial from "../../../../components/Testimonial/Testimonial";
import About from "../../../../components/About/About";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>AI-ClassRoom | Home</title>
      </Helmet>
      <Slider />
      <About />
      <ExtraSection />
      <Testimonial />
    </div>
  );
};

export default Home;
