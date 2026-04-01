import React from "react";

import aboutImg from "../../../assets/Images/about1.jpg";
import aboutImg2 from "../../../assets/Images/about2.jpg";
import aboutImg3 from "../../../assets/Images/about3.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
          Connecting Businesses Through
          <span className="text-blue-500"> DialInfinity VoIP</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          DialInfinity delivers intelligent VoIP and telecom solutions that enable
          seamless communication, secure connectivity, and scalable collaboration
          for modern businesses operating in a digital-first world.
        </p>
      </div>

      {/* SECTION 1 — WHO WE ARE */}
      {/* Mobile: image → title → description | Desktop: image left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">

        {/* Image — always first on mobile */}
        <img
          src={aboutImg}
          alt="About DialInfinity"
          className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-xl"
        />

        {/* Text — below image on mobile, right col on desktop */}
        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Who</span>{" "}
            <span className="text-blue-500">We Are</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            DialInfinity is a next-generation VoIP and telecom solutions provider
            focused on transforming business communication through advanced cloud
            technology. We help organizations move beyond traditional phone systems
            by delivering reliable, flexible, and high-performance communication
            platforms designed for today's connected workforce.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Our team combines deep telecom expertise with innovative engineering
            to build communication systems that enhance collaboration, improve
            customer engagement, and ensure uninterrupted connectivity. At
            DialInfinity, we believe communication should be simple, powerful,
            and accessible from anywhere in the world.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            By combining innovation with customer-focused solutions, DialInfinity
            empowers businesses to streamline communication workflows and adapt to
            rapidly evolving digital environments. Our commitment to reliability,
            scalability, and continuous improvement enables organizations to stay
            connected, enhance operational efficiency, and build stronger relationships
            with customers across global markets.
          </p>
        </div>
      </div>

      {/* SECTION 2 — MISSION */}
      {/* Mobile: image → title → description | Desktop: text left, image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">

        {/* Image — first on mobile, second on desktop */}
        <img
          src={aboutImg2}
          alt="DialInfinity Mission"
          className="w-full h-64 sm:h-80 md:h-[570px] object-cover rounded-xl order-first md:order-last"
        />

        {/* Text — below image on mobile, left col on desktop */}
        <div className="max-w-[41rem] order-last md:order-first">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Mission</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Our mission is to empower businesses with secure and scalable VoIP
            communication solutions that simplify operations and strengthen global
            connectivity. We aim to eliminate communication barriers by providing
            cloud-based systems that deliver clarity, speed, and reliability across
            every interaction.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Through continuous innovation and customer-focused development,
            DialInfinity creates communication environments that improve
            productivity, support remote collaboration, and enable organizations
            to grow confidently in an increasingly digital business landscape.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We are committed to delivering communication solutions that not only meet
            present business needs but also prepare organizations for future growth.
            By leveraging advanced VoIP technologies, automation, and secure cloud
            infrastructure, DialInfinity helps businesses operate more efficiently,
            respond faster to customer demands, and maintain seamless connectivity
            in an ever-evolving global marketplace.
          </p>
        </div>
      </div>

      {/* SECTION 3 — VISION */}
      {/* Mobile: image → title → description | Desktop: image left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image — always first on mobile */}
        <img
          src={aboutImg3}
          alt="DialInfinity Vision"
          className="w-full h-64 sm:h-80 md:h-[460px] object-cover rounded-xl"
        />

        {/* Text — below image on mobile, right col on desktop */}
        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Vision</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Our vision is to shape the future of global communication by creating
            intelligent VoIP ecosystems that connect people and businesses without
            boundaries. We strive to redefine telecom experiences through
            innovation, automation, and advanced cloud infrastructure.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            DialInfinity aims to become a trusted global leader in VoIP technology,
            setting new standards for communication quality, reliability, and user
            experience. By continuously evolving with technology, we help businesses
            stay connected, competitive, and ready for the future.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Looking ahead, DialInfinity envisions a world where communication is
            intelligent, seamless, and accessible across every device and location.
            By investing in emerging technologies and continuously enhancing our
            platform capabilities, we aim to create communication solutions that
            empower businesses to innovate, collaborate globally, and achieve
            sustainable growth in the digital era.
          </p>
        </div>
      </div>

    </section>
  );
}