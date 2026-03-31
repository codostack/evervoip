import React from "react";

import aboutImg from "../../../assets/Images/about4.jpg";
import aboutImg2 from "../../../assets/Images/about5.jpg";

export default function AboutUsContent2() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

{/* MAIN HEADING */}
<div className="max-w-6xl mx-auto text-center mb-16">
<h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
  Powering Smart Business
  <span className="text-blue-500"> VoIP Communication</span>
</h1>

<p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
  We deliver advanced VoIP and cloud communication solutions that help businesses
  connect seamlessly and communicate without limits.
</p>
</div>

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="About"
          className="w-full h-[500px] object-cover rounded-xl"
        />

<div className="max-w-xl">
  <h2 className="text-2xl font-default mb-4">
    <span className="text-gray-600">About</span>{" "}
    <span className="text-blue-500">Our Company</span>
  </h2>

  <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
    We are a forward-thinking VoIP and telecom solutions provider dedicated
    to helping businesses communicate smarter and more efficiently. By
    leveraging cloud-based technologies and modern communication
    infrastructure, we deliver reliable voice, messaging, and connectivity
    solutions tailored to meet evolving business needs. Our expertise allows
    organizations to replace complex traditional systems with flexible and
    scalable digital communication platforms.
  </p>

  <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
    Our team combines technical excellence with industry insight to build
    solutions that enhance collaboration, improve customer interactions,
    and ensure uninterrupted global connectivity. We focus on performance,
    security, and simplicity, enabling businesses to operate confidently
    while staying connected anytime and anywhere through advanced VoIP
    innovation.
  </p>
</div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

<div className="max-w-xl">
<h2 className="text-2xl font-default mb-4">
  <span className="text-gray-600">Driving</span>{" "}
  <span className="text-blue-500">Innovation</span>
</h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
  Innovation is at the core of everything we do. We continuously develop
  advanced VoIP and cloud communication solutions that help businesses
  stay connected in a fast-changing digital world. By integrating modern
  technologies with reliable telecom infrastructure, we create systems
  that enhance communication efficiency while maintaining exceptional
  voice quality, security, and performance.
</p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
  Our approach focuses on simplifying complex communication processes
  through intelligent automation and scalable platforms. We aim to
  empower organizations with flexible tools that improve collaboration,
  support remote work environments, and enable seamless global
  connectivity. By embracing innovation, we help businesses adapt,
  grow, and succeed with future-ready VoIP solutions.
</p>
</div>

        <img
          src={aboutImg2}
          alt="Mission"
          className="w-full h-[680px] object-cover rounded-xl mt-[40px]"
        />
      </div>
    </section>
  );
}