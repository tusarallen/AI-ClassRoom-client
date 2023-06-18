import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import lottieVhai from "../../../public/98642-error-404 (1).json"

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section className="flex items-center md:-mt-4 h-screen bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <p>
        <Lottie animationData={lottieVhai} loop={true} />;
        </p>
        <div className="max-w-md text-center">
          <p className="text-lg font-semibold md:text-2xl text-red-800">
            {error?.message}
          </p>
          <Link
            to="/"
            className="font-bold text-2xl hover:bg-black hover:text-white bg-gray-400 btn"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
