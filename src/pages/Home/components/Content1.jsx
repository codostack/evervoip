import React from "react";

import aboutImg from "../../../assets/Images/5121056.jpg";
import aboutImg2 from "../../../assets/Images/5101602.jpg";
import aboutImg3 from "../../../assets/Images/5132728.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-default text-gray-900 mb-4">
          Smart Communication Solutions by
          <span className="text-blue-500"> Dial Infinity</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          DialInfinity provides smart VoIP and telecom solutions for seamless communication,
          secure connectivity, and scalable collaboration in today's digital-first world.
        </p>
      </div>

      {/* SECTION 1 — WHAT WE PROVIDE */}
      {/* Mobile: image → title → description (stacked) */}
      {/* Desktop: image left, text right (side by side) */}
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
            <span className="text-gray-600">What</span>{" "}
            <span className="text-blue-500">We Provide</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Dial Infinity delivers powerful VoIP communication systems that enable
            businesses to manage voice connectivity through secure and cloud-based
            infrastructure. Our solutions are built to replace traditional telecom
            limitations with flexible and cost-effective communication environments
            that simplify everyday business operations.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            From enterprise calling to global connectivity, our platform ensures
            high-quality voice transmission, intelligent routing, and seamless
            integration with modern business tools. Organizations can centralize
            communication workflows, monitor performance in real time, and maintain
            reliable connections regardless of geographical location or workforce
            structure.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our services are designed to support growing teams, remote environments,
            and customer-facing operations by delivering scalable communication
            capabilities that evolve alongside business demands while maintaining
            security, stability, and ease of use.
          </p>
        </div>
      </div>

      {/* SECTION 2 — WHY CHOOSE */}
      {/* Mobile: image → title → description (stacked) */}
      {/* Desktop: text left, image right (side by side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">

        {/* Image — first on mobile via order, second on desktop */}
        <img
          src={aboutImg2}
          alt="DialInfinity Mission"
          className="w-full h-64 sm:h-80 md:h-[680px] object-cover rounded-xl order-first md:order-last"
        />

        {/* Text — below image on mobile, left col on desktop */}
        <div className="max-w-[41rem] order-last md:order-first">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Why Choose</span>{" "}
            <span className="text-blue-500">Dial Infinity</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Businesses choose Dial Infinity for its dependable infrastructure,
            advanced security standards, and scalable communication architecture.
            Our VoIP ecosystem is engineered to provide consistent performance,
            enabling organizations to operate without interruptions or communication
            delays.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            We prioritize clarity, reliability, and operational transparency by
            offering intelligent analytics, call monitoring capabilities, and
            flexible configuration options. This allows businesses to optimize
            communication workflows while maintaining full control over their
            telecom environment.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Through continuous platform improvements and customer-focused
            innovation, Dial Infinity helps companies reduce communication costs,
            improve collaboration efficiency, and strengthen relationships with
            customers through dependable voice connectivity.
          </p>
        </div>
      </div>

      {/* SECTION 3 — TECHNOLOGY APPROACH */}
      {/* Mobile: image → title → description (stacked) */}
      {/* Desktop: image left, text right (side by side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image — always first on mobile */}
        <img
          src={aboutImg3}
          alt="DialInfinity Vision"
          className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-xl"
        />

        {/* Text — below image on mobile, right col on desktop */}
        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Our</span>{" "}
            <span className="text-blue-500">Technology Approach</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            At Dial Infinity, technology drives every communication experience we
            create. Our cloud-powered VoIP infrastructure is engineered for speed,
            stability, and global accessibility, allowing businesses to communicate
            seamlessly without the constraints of traditional systems.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            We integrate modern networking technologies, intelligent call routing,
            and scalable architecture to ensure optimized performance across
            different regions and network conditions. This approach guarantees
            reliable voice quality and uninterrupted service delivery.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            By continuously evolving our platform through innovation and research,
            Dial Infinity builds future-ready communication systems that support
            digital transformation, remote collaboration, and long-term business
            growth in a rapidly changing technological landscape.
          </p>
        </div>
      </div>

    </section>
  );
}