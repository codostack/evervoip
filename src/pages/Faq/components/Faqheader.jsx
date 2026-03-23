import React from "react";
import { FaUsersGear } from "react-icons/fa6";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { SiGooglebigquery } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

export default function ContactFAQSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 h-[600px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Let's Start a Conversation
          </h2>

          <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
            We’re here to help you with your business, support, or partnership
            inquiries. Reach out to our team anytime and we’ll get back to you
            quickly. Our team is ready to connect and help you grow your business.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Get Connected
            </button>

            <button className="border border-slate-300 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT SIDE DESIGN */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[380px] h-[280px]">
            
            {/* Center Box */}
            <div className="absolute left-[80px] top-[90px] w-[240px] h-[200px] bg-[#000080] text-yellow-300 flex items-center justify-center font-bold text-7xl shadow-xl z-20">
  FAQs
</div>
            {/* Boxes Around */}
           <div className="absolute left-[-30px] top-[30px] w-[120px] h-[120px] bg-cyan-400 flex items-center justify-center text-white text-2xl shadow-md z-10">
  <TbWorld className="text-5xl text-white-700 transition-transform duration-300 hover:scale-125" />
</div>

            <div className="absolute left-[90px] top-[-30px] w-[150px] h-[120px] bg-orange-400 flex items-center justify-center text-white text-2xl shadow-md">
              <SiGooglebigquery  className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
            </div>

            <div className="absolute left-[240px] top-[-1px] w-[130px] h-[100px] bg-cyan-800 flex items-center justify-center text-2xl shadow-md">
            
             <BsFillPatchQuestionFill className="text-5xl text-white transition-transform duration-300 hover:scale-125" /> </div>

          <div className="absolute left-[-70px] top-[150px] w-[150px] h-[150px] bg-cyan-800 flex items-center justify-center text-3xl shadow-md z-30">
  <BsFillPatchQuestionFill className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
</div>

            <div className="absolute left-[290px] top-[250px] w-[120px] h-[120px] bg-[#db6d24] flex items-center justify-center text-3xl text-white shadow-md">
               < FaUsersGear className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
            </div>
            <div className="absolute left-[-170px] top-[170px] w-[100px] h-[100px] bg-[#eada4d] flex items-center justify-center text-3xl text-white shadow-md">
               < BsFillPatchQuestionFill className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
            </div>

            <div className="absolute left-[40px] top-[290px] w-[130px] h-[100px] bg-orange-400 flex items-center justify-center text-3xl text-white shadow-md">
               < BsFillPatchQuestionFill className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
            </div>

            <div className="absolute left-[160px] top-[290px] w-[130px] h-[130px] bg-cyan-600 flex items-center justify-center text-2xl shadow-md">
               < BsFillPatchQuestionFill className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
            </div>

            <div className="absolute left-[460px] top-[130px] w-[100px] h-[100px] bg-orange-400 flex items-center justify-center text-3xl text-white shadow-md">
               < BsFillPatchQuestionFill className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
            </div>
             <div className="absolute left-[320px] top-[95px] w-[150px] h-[160px] bg-[#5ddaeb] flex items-center justify-center text-3xl text-white shadow-md">
              < FaUsersGear className="text-5xl text-white transition-transform duration-300 hover:scale-125" />
             </div>
            

          </div>
        </div>

      </div>
    </section>
  );
}