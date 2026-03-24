import React from "react";
import { FaUsersGear } from "react-icons/fa6";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { SiGooglebigquery } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

export default function ContactFAQSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl text-[#004c4c] leading-tight mb-4">
            Let's Start a Conversation
          </h2>

          <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
            We’re here to help you with your business, support, or partnership
            inquiries. Reach out to our team anytime and we’ll get back to you
            quickly. Our team is ready to connect and help you grow your business.
          </p>

          <div className="flex gap-4">
            {/* Primary */}
            <button className="bg-[#004c4c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#006666] transition-all duration-300 shadow-md hover:shadow-lg">
              Get Connected
            </button>

            {/* Secondary */}
            <button className="border border-[#004c4c] text-[#004c4c] px-6 py-3 rounded-md font-semibold hover:bg-[#004c4c] hover:text-white transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT SIDE DESIGN */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[380px] h-[300px]">

            {/* Center Box */}
            <div className="absolute left-[80px] top-[80px] w-[240px] h-[200px] bg-[#004c4c] text-white flex items-center justify-center font-bold text-6xl rounded-xl shadow-xl z-20">
              FAQs
            </div>

            {/* Floating Cards (Theme Styled) */}

            <div className="absolute left-[-30px] top-[30px] w-[120px] h-[120px] bg-[#e6f2f2] rounded-xl flex items-center justify-center shadow-md">
              <TbWorld className="text-5xl text-[#004c4c] hover:scale-125 transition" />
            </div>

            <div className="absolute left-[90px] top-[-30px] w-[150px] h-[120px] bg-[#cce5e5] rounded-xl flex items-center justify-center shadow-md">
              <SiGooglebigquery className="text-5xl text-[#004c4c] hover:scale-125 transition" />
            </div>

            <div className="absolute left-[240px] top-[0px] w-[130px] h-[100px] bg-[#004c4c] rounded-xl flex items-center justify-center shadow-md">
              <BsFillPatchQuestionFill className="text-5xl text-white hover:scale-125 transition" />
            </div>

            <div className="absolute left-[-70px] top-[160px] w-[150px] h-[150px] bg-[#004c4c] rounded-xl flex items-center justify-center shadow-md z-30">
              <BsFillPatchQuestionFill className="text-5xl text-white hover:scale-125 transition" />
            </div>

            <div className="absolute left-[290px] top-[250px] w-[120px] h-[120px] bg-[#e6f2f2] rounded-xl flex items-center justify-center shadow-md">
              <FaUsersGear className="text-5xl text-[#004c4c] hover:scale-125 transition" />
            </div>

            <div className="absolute left-[40px] top-[290px] w-[130px] h-[100px] bg-[#cce5e5] rounded-xl flex items-center justify-center shadow-md">
              <BsFillPatchQuestionFill className="text-5xl text-[#004c4c] hover:scale-125 transition" />
            </div>

            <div className="absolute left-[160px] top-[290px] w-[130px] h-[130px] bg-[#004c4c] rounded-xl flex items-center justify-center shadow-md">
              <BsFillPatchQuestionFill className="text-5xl text-white hover:scale-125 transition" />
            </div>

            <div className="absolute left-[320px] top-[95px] w-[150px] h-[160px] bg-[#cce5e5] rounded-xl flex items-center justify-center shadow-md">
              <FaUsersGear className="text-5xl text-[#004c4c] hover:scale-125 transition" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}