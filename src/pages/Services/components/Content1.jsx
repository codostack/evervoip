import React from "react";

import aboutImg from "../../../assets/Images/service1.jpg";
import aboutImg2 from "../../../assets/Images/service2.jpg";
import aboutImg3 from "../../../assets/Images/service3.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
          Smart VoIP Solutions by
          <span className="text-blue-500"> Dial Infinity</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Dial Infinity provides reliable, scalable, and intelligent VoIP services that modernize business communication, enabling faster, seamless, and barrier-free connections.
        </p>
      </div>

      {/* SECTION 1 — VOIP INFRASTRUCTURE */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="VoIP Infrastructure"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Advanced</span>{" "}
            <span className="text-blue-500">VoIP Infrastructure</span>
          </h2>

          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            At Dial Infinity, we build powerful VoIP infrastructures that ensure
            stable, high-quality voice communication across global networks.
            Our platform is engineered using modern cloud architecture and
            intelligent routing technology to deliver consistent performance,
            low latency, and exceptional call clarity for businesses of all sizes.
          </p>

          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            Whether supporting call centers, enterprise communication systems,
            or international operations, our infrastructure adapts dynamically
            to traffic demands. This guarantees uninterrupted connectivity,
            improved call success rates, and a seamless communication experience
            that businesses can depend on every day.
            <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
              Our infrastructure is also designed with security and compliance in mind, incorporating encrypted voice channels, redundant systems, and real-time monitoring. Dial Infinity ensures that businesses not only experience high-quality communication but also benefit from a secure and resilient network that protects sensitive information and supports continuous operations around the clock.
            </p>

          </p>
        </div>
      </div>

      {/* SECTION 2 — BUSINESS COMMUNICATION SOLUTIONS */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Business</span>{" "}
            <span className="text-blue-500">Communication Solutions</span>
          </h2>

          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            Dial Infinity provides intelligent communication tools designed to
            improve productivity and collaboration. Our VoIP systems integrate
            seamlessly with modern workflows, enabling teams to manage inbound
            and outbound communication efficiently through centralized platforms.
          </p>

          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            With advanced monitoring, analytics, and automation capabilities,
            businesses gain complete visibility into communication performance.
            These insights help optimize operations, enhance customer interactions,
            and support data-driven decision-making for long-term growth.
          </p>
          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            Our solutions are built to scale with your organization, supporting both small teams and large enterprises. Dial Infinity’s communication platforms offer flexible deployment options, easy integration with CRM systems, and customizable features that adapt to evolving business needs, ensuring a seamless and future-ready communication experience.
          </p>
        </div>
                <img
          src={aboutImg2}
          alt="Business Communication"
          className="w-full h-[450px] object-cover rounded-xl"
        />
      </div>

      {/* SECTION 3 — GLOBAL CONNECTIVITY */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="Global Connectivity"
          className="w-full h-[500px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Global</span>{" "}
            <span className="text-blue-500">Connectivity Network</span>
          </h2>

          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            Dial Infinity empowers businesses to expand globally through secure
            and scalable telecom connectivity. Our international network enables
            organizations to establish a strong presence in multiple regions
            without investing in physical communication infrastructure.
          </p>

          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            By leveraging optimized carrier partnerships and intelligent traffic
            management, we deliver reliable voice transmission and consistent
            communication quality worldwide. Our goal is to help businesses stay
            connected with customers, partners, and teams — anytime and anywhere.
          </p>
          <p className="text-[#4d5156] text-[16px] leading-[1.75] text-justify">
            Our global network also supports advanced features such as DID numbers, flexible call routing, and seamless integration with existing VoIP systems. Dial Infinity ensures that businesses can manage international communications efficiently, maintain brand credibility, and provide a professional experience for customers across all regions.
          </p>
        </div>
      </div>

    </section>
  );
}