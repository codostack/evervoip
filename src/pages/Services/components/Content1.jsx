import React from "react";

import aboutImg from "../../../assets/Images/5121056.jpg";
import aboutImg2 from "../../../assets/Images/5101602.jpg";
import aboutImg3 from "../../../assets/Images/5132728.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
          Building the Future of Tele
          <span className="text-blue-500"> Communication</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          We deliver advanced telecom and VoIP solutions designed to simplify communication,
          enhance productivity, and empower businesses with scalable, reliable, and future-ready systems 
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="About"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Who</span>{" "}
            <span className="text-blue-500">We Are</span>
          </h2>

           <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We are a technology-driven organization committed to transforming the way modern 
            communication works by delivering highly reliable and scalable VoIP solutions. 
            Our team is made up of skilled professionals with deep industry knowledge, 
            enabling us to design systems that meet the growing demands of businesses across 
            different sectors. We focus on creating seamless communication experiences that 
            eliminate disruptions and ensure consistent performance across all platforms.
          </p>

           <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            By combining innovation with practical implementation, we help businesses build 
            stronger connections both internally and externally. Our solutions are crafted 
            to enhance collaboration, streamline operations, and improve customer engagement. 
            We believe that effective communication is the foundation of success, and we strive 
            to deliver tools that not only meet expectations but exceed them in every possible way.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Mission</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our mission is to redefine how communication is experienced by businesses through 
            advanced cloud-based VoIP technologies that prioritize speed, security, and scalability. 
            We aim to remove traditional barriers in communication by offering solutions that are 
            flexible and adaptable to organizations of all sizes, from startups to large enterprises. 
            Our goal is to create a smooth and uninterrupted communication environment that supports 
            business growth and operational efficiency.
          </p>
 <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We are dedicated to continuous innovation and improvement, ensuring that our systems 
            evolve alongside industry advancements and customer expectations. By focusing on 
            performance, reliability, and user experience, we empower businesses to stay ahead 
            in a competitive market. Our mission is not just to provide services, but to build 
            long-term partnerships through trust, quality, and consistent value delivery.
          </p>
        </div>

        <img
          src={aboutImg2}
          alt="Mission"
          className="w-full h-[680px] object-cover rounded-xl mt-[40px]"
        />
      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="Vision"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Vision</span>
          </h2>

           <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our vision is to create a future where communication is effortless, intelligent, 
            and globally accessible without limitations. We aim to build a connected ecosystem 
            powered by cutting-edge technology that allows businesses to communicate seamlessly 
            regardless of geographical boundaries. By integrating smart systems and advanced 
            infrastructure, we strive to redefine how people interact in the digital age.
          </p>

           <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We continuously push the boundaries of innovation to deliver solutions that are not 
            only efficient but also future-ready. Our long-term vision is to lead the telecom 
            industry by setting new standards in quality, performance, and user experience. 
            Through dedication, creativity, and excellence, we aim to empower businesses and 
            shape the future of communication on a global scale.
          </p>
        </div>
      </div>

    </section>
  );
}