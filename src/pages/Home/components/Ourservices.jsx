import React from "react";

import aboutImg from "../../../assets/Images/home4.jpg";
import aboutImg2 from "../../../assets/Images/home5.jpg";
import aboutImg3 from "../../../assets/Images/home6.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-900 mb-4">
          Our Telecom & VoIP Services
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          We provide high-quality VoIP solutions designed to deliver reliable connectivity,
          superior call quality, and scalable communication systems for businesses worldwide.
        </p>
      </div>

      {/* SECTION 1 - VOIP ROUTES */}
      {/* Mobile: image → title → description | Desktop: image left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">

        {/* Image — always first on mobile */}
        <img
          src={aboutImg}
          alt="VoIP Routes"
          className="w-full h-64 sm:h-80 md:h-[520px] object-cover rounded-xl"
        />

        {/* Text — below image on mobile, right col on desktop */}
        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">VoIP</span>{" "}
            <span className="text-blue-500">CC & CLI Routes</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Our VoIP routing solutions are continuously monitored and optimized to
            maintain performance consistency even during peak traffic conditions.
            By utilizing intelligent load balancing and advanced carrier management,
            we ensure stable communication channels that support mission-critical
            business operations without compromise.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Dial Infinity focuses on delivering secure and scalable routing
            environments that adapt to changing business requirements. Whether
            supporting call centers, enterprise communication, or international
            outreach campaigns, our infrastructure is designed to provide reliable
            voice delivery, improved call success rates, and enhanced customer
            interaction experiences.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our routing architecture is built with redundancy and real-time quality
            monitoring to ensure uninterrupted communication across global networks.
            By continuously analyzing call performance and optimizing routing paths,
            Dial Infinity delivers consistent voice clarity, reduced latency, and
            dependable connectivity that businesses can rely on for both daily
            operations and large-scale communication demands.
          </p>
        </div>
      </div>

      {/* SECTION 2 - DIALER */}
      {/* Mobile: image → title → description | Desktop: text left, image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">

        {/* Image — first on mobile, second on desktop */}
        <img
          src={aboutImg2}
          alt="Dialer"
          className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl order-first md:order-last"
        />

        {/* Text — below image on mobile, left col on desktop */}
        <div className="max-w-[41rem] order-last md:order-first">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Advanced</span>{" "}
            <span className="text-blue-500">Dialer Solutions</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Our dialer platforms are engineered with intelligent automation
            capabilities that help businesses optimize workforce productivity while
            maintaining consistent communication quality. Features such as call
            scheduling, automated workflows, and smart queue management allow teams
            to execute campaigns efficiently and achieve better operational results.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Security and reliability remain at the core of our dialer technology.
            With secure data handling, role-based access controls, and performance
            monitoring tools, organizations can manage communication activities
            confidently while maintaining compliance and operational transparency
            across departments.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Designed for scalability and flexibility, our dialer solutions adapt to
            businesses of all sizes, from growing teams to large enterprise call
            centers. With seamless integration capabilities and real-time performance
            insights, organizations can optimize calling strategies, improve agent
            efficiency, and deliver more personalized customer interactions while
            maintaining operational control and communication excellence.
          </p>
        </div>
      </div>

      {/* SECTION 3 - DID NUMBERS */}
      {/* Mobile: image → title → description | Desktop: image left, text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image — always first on mobile */}
        <img
          src={aboutImg3}
          alt="DID Numbers"
          className="w-full h-64 sm:h-80 md:h-[520px] object-cover rounded-xl"
        />

        {/* Text — below image on mobile, right col on desktop */}
        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Global</span>{" "}
            <span className="text-blue-500">DID Numbers</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Dial Infinity's global DID network allows businesses to expand their
            reach without investing in physical infrastructure. Companies can
            instantly establish regional communication channels, enabling local
            customer engagement while managing all calls through a centralized
            cloud-based system.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mb-4">
            Our platform supports flexible call forwarding, IVR integration, and
            advanced routing options that ensure every incoming call reaches the
            right destination efficiently. This improves response times, strengthens
            brand presence, and creates a professional communication experience for
            customers worldwide.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            With instant activation and easy scalability, Dial Infinity's DID services
            allow businesses to quickly adapt to changing communication needs across
            multiple regions. Our reliable infrastructure ensures high availability,
            clear voice quality, and seamless connectivity, helping organizations
            deliver consistent customer experiences while expanding their global
            presence with confidence.
          </p>
        </div>
      </div>

    </section>
  );
}