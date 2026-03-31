import React from "react";

import aboutImg from "../../../assets/Images/service4.jpg";
import aboutImg2 from "../../../assets/Images/service5.jpg";

export default function ServiceContent2() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
          Next-Level VoIP & Telecom
          <span className="text-blue-500"> Services</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Dial Infinity provides innovative VoIP and telecom solutions that simplify communication,
          enhance operational efficiency, and enable businesses to connect globally with reliability
          and clarity.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="VoIP Solutions"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Comprehensive</span>{" "}
            <span className="text-blue-500">VoIP Solutions</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Dial Infinity delivers enterprise-grade VoIP services that ensure crystal-clear voice communication, minimal latency, and uninterrupted connectivity. Our solutions are optimized for call centers, corporate communication, and international business operations.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            By leveraging advanced routing, real-time monitoring, and intelligent traffic management, we provide businesses with reliable, scalable, and secure communication platforms that adapt dynamically to operational demands.
          </p>
          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We also offer flexible integration with existing CRM systems, cloud applications, and communication tools, allowing organizations to streamline workflows and enhance team collaboration. With 24/7 technical support and proactive network management, Dial Infinity ensures businesses stay connected, reduce downtime, and maintain a professional presence across all communication channels.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Smart</span>{" "}
            <span className="text-blue-500">Business Communication</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our communication platforms integrate seamlessly with modern workflows, providing tools for managing inbound and outbound calls, messages, and collaboration from a single interface. This empowers teams to operate more efficiently and communicate more effectively.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            With analytics, automated reporting, and workflow integration, Dial Infinity enables businesses to gain actionable insights, optimize operations, and enhance customer engagement for measurable growth.
          </p>
          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Additionally, our solutions support multi-channel communication, including voice, messaging, and video conferencing, ensuring teams and clients stay connected anytime, anywhere. By combining intelligent automation with secure cloud infrastructure, Dial Infinity helps businesses streamline communication processes while maintaining reliability, compliance, and performance across all operations.
          </p>
        </div>

        <img
          src={aboutImg2}
          alt="Business Communication"
          className="w-full h-[450px] object-cover rounded-xl"
        />
      </div>
    </section>
  );
}