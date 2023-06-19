import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faComputer,
  faMicrochip,
  faPersonBooth,
  faRobot,
  faSpaceShuttle,
} from "@fortawesome/free-solid-svg-icons";

const ExtraSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes us special
          </h2>

          <p className="mt-4 text-gray-300">
            In our AI institute, expert-designed curriculum, hands-on learning,
            personalized guidance, and real-world focus empower students to
            excel in AI is dynamic landscape.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FontAwesomeIcon icon={faMicrochip} />
            </span>

            <div>
              <h2 className="text-lg font-bold">AI Essentials</h2>

              <p className="mt-1 text-sm text-gray-300">
                Unlock the potential of Artificial Intelligence with our
                comprehensive course covering key concepts, algorithms, and
                practical applications. Gain the skills to thrive in the
                AI-driven future.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FontAwesomeIcon icon={faBrain} />
            </span>

            <div>
              <h2 className="text-lg font-bold">Machine Learning Mastery</h2>

              <p className="mt-1 text-sm text-gray-300">
                Become an expert in machine learning techniques through hands-on
                projects, advanced algorithms, and data-driven insights. Unlock
                limitless possibilities with the power of ML.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FontAwesomeIcon icon={faRobot} />
            </span>

            <div>
              <h2 className="text-lg font-bold">Deep Dive: Neural Networks</h2>

              <p className="mt-1 text-sm text-gray-300">
                Neural Networks: Delve into the intricacies of neural networks,
                explore cutting-edge architectures, and unleash their potential
                in solving complex problems. Master the art of deep learning.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FontAwesomeIcon icon={faPersonBooth} />
            </span>

            <div>
              <h2 className="text-lg font-bold">
                Language Processing Fundamentals
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Learn the core principles of natural language processing,
                explore text analytics, and harness the power of language for
                AI-driven applications.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FontAwesomeIcon icon={faComputer} />
            </span>

            <div>
              <h2 className="text-lg font-bold">
                Vision Tech: Image Recognition
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Dive into the world of computer vision, unravel image
                recognition algorithms, and unleash the potential of visual data
                in AI applications
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              <FontAwesomeIcon icon={faSpaceShuttle} />
            </span>

            <div>
              <h2 className="text-lg font-bold">AI in Business</h2>

              <p className="mt-1 text-sm text-gray-300">
                Discover how artificial intelligence is revolutionizing
                industries, drive data-driven decision-making, and unlock new
                opportunities for growth and innovation in the business
                landscape
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
