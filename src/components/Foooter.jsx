import React from "react";
import {
  FaUserMd,
  FaUniversity,
  FaAward,
  FaBookReader,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { MdMedicalInformation } from "react-icons/md";

function Foooter() {
  return (
    <footer className="bg-[#2B354B] text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ستون اول */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-[#3DA4D0]">
            درباره دکتر
          </h3>

          <div className="flex items-start gap-3">
            <FaUserMd className="text-2xl text-[#3DA4D0]" />
            <p>متخصص جراحی مغز و اعصاب</p>
          </div>

          <div className="flex items-start gap-3">
            <FaAward className="text-2xl text-[#3DA4D0]" />
            <p>فلوشیپ جراحی اعصاب از بلژیک</p>
          </div>

          <div className="flex items-start gap-3">
            <FaUniversity className="text-2xl text-[#3DA4D0]" />
            <p>استاد دانشگاه علوم پزشکی اصفهان</p>
          </div>

          <div className="flex items-start gap-3">
            <MdMedicalInformation className="text-2xl text-[#3DA4D0]" />
            <p>گذراندن دوره در کنار بهترین پروفسورهای جهان</p>
          </div>
        </div>

       
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-[#3DA4D0]">
            تماس با ما
          </h3>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-2xl text-[#3DA4D0]" />
            <p>۰۳۱-۳۶۲۸۱۵۸۴</p>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-2xl text-[#3DA4D0]" />
            <p>
              اصفهان، خیابان شریعتی، روبه‌روی بیمارستان شریعتی، ساختمان فراز،
              واحد ۱۰۳
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl text-[#3DA4D0]" />
            <p>info@drabrishamkar.ir</p>
          </div>

          <button className="mt-4 bg-[#3DA4D0] text-white px-6 py-2 rounded-full hover:bg-[#3394bf] transition-all duration-300">
            رزرو نوبت
          </button>
        </div>

  
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-[#3DA4D0]">
            ساعات کاری
          </h3>

          {[
            { day: "شنبه", time: "۲۰:۰۰ - ۱۶:۰۰" },
            { day: "یکشنبه", time: "۲۰:۰۰ - ۱۶:۰۰" },
            { day: "سه‌شنبه", time: "۲۰:۰۰ - ۱۶:۰۰" },
            { day: "چهارشنبه", time: "۲۰:۰۰ - ۱۶:۰۰" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaClock className="text-2xl text-[#3DA4D0]" />
              <p>
                {item.day} <span className="mx-1">|</span> {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} تمامی حقوق برای دکتر ابریشم‌کار محفوظ است.
      </div>
    </footer>
  );
}

export default Foooter;
