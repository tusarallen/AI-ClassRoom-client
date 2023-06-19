import { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import Swiper from "swiper";
import TitleSection from "../TitleSection/TitleSection";

function Testimonial() {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    // Cleanup Swiper instance on component unmount
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <TitleSection
        subHeading={"TESTIMONIALS"}
        heading={"Our satisfied students worldwide"}
      ></TitleSection>
      <section>
        <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="swiper-container !overflow-hidden"
            ref={swiperContainerRef}
          >
            <div className="swiper-wrapper flex md:flex-row flex-col-reverse">
              <div className="swiper-slide">
                <blockquote className="bg-gray-900 text-white p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Dog"
                      src="https://i.ibb.co/nPRfgt3/image.png"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p className="font-medium">John Doe</p>
                      <p className="mt-1">San Francisco, USA</p>
                    </div>
                  </div>
                  <p className="relative mt-4 text-white">
                    <span className="text-xl">&ldquo;</span>
                    Thanks to the comprehensive AI training at our institute, I
                    landed my dream job as a data scientist. The practical
                    projects and expert guidance prepared me for real-world
                    challenges. Grateful for the opportunities and knowledge
                    gained in just a few months!
                    <span className="text-xl">&rdquo;</span>
                  </p>
                </blockquote>
              </div>
              <div className="swiper-slide">
                <blockquote className="bg-gray-900 text-white p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Dog"
                      src="https://i.ibb.co/WvyZHYT/image.png"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p className="font-medium">Jane Smith</p>
                      <p className="mt-1">London, UK</p>
                    </div>
                  </div>
                  <p className="relative mt-4 text-white">
                    <span className="text-xl">&ldquo;</span>
                    Enrolling in the AI program here was a turning point in my
                    life. The practical approach, real-world projects, and
                    industry connections opened doors to endless opportunities.
                    Now working on impactful AI applications, thanks to the
                    institutes exceptional training
                    <span className="text-xl">&rdquo;</span>
                  </p>
                </blockquote>
              </div>
              <div className="swiper-slide">
                <blockquote className="bg-gray-900 p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Dog"
                      src="https://i.ibb.co/Dgd0rXZ/image.png"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <p className="font-medium">Alex Johnson</p>
                      <p className="mt-1">Toronto, Canada</p>
                    </div>
                  </div>
                  <p className="relative mt-4 text-white">
                    <span className="text-xl">&ldquo;</span>I can not thank our
                    institute enough for transforming my career. The AI training
                    equipped me with the skills sought after by leading
                    companies. Today, I am a successful AI engineer, working on
                    cutting-edge projects. Highly recommend the institute for
                    learners!
                    <span className="text-xl">&rdquo;</span>
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
