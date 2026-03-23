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
          Our Telecom & VoIP
          <span className="text-blue-500"> Services</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          We provide high-quality VoIP solutions designed to deliver reliable connectivity,
          superior call quality, and scalable communication systems for businesses worldwide.
        </p>
      </div>

      {/* SECTION 1 - VOIP ROUTES */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="VoIP Routes"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">VoIP</span>{" "}
            <span className="text-blue-500">CC & CLI Routes</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We offer premium VoIP CC (Call Center) and CLI (Caller Line Identification) routes 
            that ensure high call completion rates and crystal-clear voice quality. Our routing 
            infrastructure is optimized to provide stable and uninterrupted connections, making 
            it ideal for businesses that depend on consistent communication with their customers 
            across different regions.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            With strong global partnerships and advanced routing technology, we guarantee 
            reliable delivery and minimal latency. Our CLI routes allow businesses to display 
            their identity, improving trust and call answer rates, while CC routes are designed 
            for bulk traffic handling with maximum efficiency and performance.
          </p>
        </div>
      </div>

      {/* SECTION 2 - DIALER */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Advanced</span>{" "}
            <span className="text-blue-500">Dialer Solutions</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our powerful dialer systems are designed to enhance productivity and streamline 
            outbound calling operations. Whether it’s predictive, progressive, or manual dialing, 
            our solutions are built to maximize agent efficiency and reduce idle time, ensuring 
            higher output and better campaign performance.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Equipped with real-time analytics, call monitoring, and reporting features, our 
            dialers give businesses complete control over their operations. They integrate 
            seamlessly with CRM systems and provide a smooth user experience, helping teams 
            manage large-scale communication campaigns with ease and precision.
          </p>
        </div>

        <img
          src={aboutImg2}
          alt="Dialer"
          className="w-full h-[680px] object-cover rounded-xl mt-[40px]"
        />
      </div>

      {/* SECTION 3 - DID NUMBERS */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="DID Numbers"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-600">Global</span>{" "}
            <span className="text-blue-500">DID Numbers</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We provide global DID (Direct Inward Dialing) numbers that enable businesses to 
            establish a local presence in multiple countries. With DID numbers, customers can 
            reach your business easily without incurring international calling costs, improving 
            accessibility and customer satisfaction.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our DID solutions come with flexible routing, easy configuration, and seamless 
            integration with your existing VoIP systems. Whether for support, sales, or global 
            expansion, our numbers help you build a strong communication network that enhances 
            brand credibility and ensures smooth inbound connectivity.
          </p>
        </div>
      </div>

    </section>
  );
}