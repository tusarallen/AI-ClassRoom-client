import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="text-center w-11/12 mx-auto mt-5 mb-8">
      <Carousel>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/r5tJ5p3/Artificial-Intelligence-1-1.jpg"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/2FRNsgD/rm373batch5-blogbanner-08.jpg"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/nQBdc3d/AI-governance-lead.jpg"
          />
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://i.ibb.co/WnPtmxq/rm373batch5-blogbanner-03.jpg"
          />
        </div>
        <div>
          <img className="rounded-lg" src="https://i.ibb.co/thVC2rj/Ai-1.jpg" />
        </div>
        <div>
          <img className="rounded-lg" src="https://i.ibb.co/Hnr4NTq/855.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
