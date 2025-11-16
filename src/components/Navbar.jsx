import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaIdBadge,
  FaCalendarCheck,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assests/img/logo6.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate=useNavigate()
  return (
    <nav
      dir="rtl"
      className="w-[94%] bg-white shadow-md font-semibold text-gray-800 m-auto"
    >
     
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-3 text-center md:text-right text-[18px] md:text-[20px] gap-3">
        <p>به وب‌سایت دکتر سعید ابریشمکار خوش آمدید</p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <FaIdBadge size={28} className="text-[#65C5B4]" />
            <span className="text-[16px] md:text-[18px]">
              ID: info@drkeshtcar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={28} className="text-[#65C5B4]" />
            <span className="text-[18px] md:text-[20px] font-bold">
              ۰۲۱-۶۵۲۵۲۴۶
            </span>
          </div>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-3 md:py-4 gap-4 md:gap-0">
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="لوگو"
            className="w-32 md:w-44 h-auto object-contain"
          />
        </div>

        <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-gray-800 text-[17px] md:text-[20px] font-medium">
          <li className="hover:text-[#65C5B4] transition">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="hover:text-[#65C5B4] transition">
            <Link to="/internetReserve">رزرو نوبت اینترنتی</Link>
          </li>
          <li className="hover:text-[#65C5B4] transition">
            <Link to="/services">خدمات</Link>
          </li>
          <li className="hover:text-[#65C5B4] transition">
            <Link to="/article">مقالات</Link>
          </li>
          <li className="hover:text-[#65C5B4] transition">
            <Link to="/aboutDrAbrisham">درباره دکتر</Link>
          </li>
          <li className="hover:text-[#65C5B4] transition">
            <Link to="/contact">ارتباط با دکتر</Link>
          </li>
        </ul>
      </div>

    
      <div className="w-full bg-gray-50 border-t border-gray-200 py-6 px-4 md:px-10">
       <div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  xl:flex 
  xl:flex-row 
  justify-center 
  gap-6 
  text-gray-700 
  font-semibold 
  text-[16px] 
  md:text-[18px]
">
  
  {/* تلفنی */}
  <div
    className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 min-w-[250px] hover:scale-[1.02] transition"
    onClick={() => navigate("/internetReserve")}
  >
    <div className="p-3 md:p-4 border border-[#65C5B4] rounded-full text-[#65C5B4]">
      <FaPhoneAlt size={24} />
    </div>
    <div>
      <p className="font-bold text-[#65C5B4] text-[18px] md:text-[20px]">
        رزرو نوبت تلفنی
      </p>
      <p className="text-[15px] md:text-[17px]">
        ۰۳۱-۳۶۲۸۱۵۸۴ (تلفن گویا)
      </p>
    </div>
  </div>


  <Link
    to={"/internetReserve"}
    className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 min-w-[250px] hover:bg-[#65C5B4]/10 hover:scale-[1.02] transition"
  >
    <div className="p-3 md:p-4 border border-[#65C5B4] rounded-full text-[#65C5B4]">
      <FaCalendarCheck size={24} />
    </div>
    <div>
      <p className="font-bold text-[#65C5B4] text-[18px] md:text-[20px]">
        گرفتن نوبت اینترنتی
      </p>
      <p className="text-[15px] md:text-[17px]">
        برای دریافت نوبت اینترنتی روی این بخش کلیک کنید
      </p>
    </div>
  </Link>

  {/* ساعت کاری */}
  <div className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 min-w-[250px] hover:scale-[1.02] transition">
    <div className="p-3 md:p-4 border border-[#65C5B4] rounded-full text-[#65C5B4]">
      <FaClock size={24} />
    </div>
    <div>
      <p className="font-bold text-[#65C5B4] text-[18px] md:text-[20px]">
        ساعت کاری
      </p>
      <p className="text-[15px] md:text-[17px]">
        شنبه تا چهارشنبه - ۲۰:۰۰ تا ۱۶:۰۰ (به جز دوشنبه‌ها)
      </p>
    </div>
  </div>

  {/* آدرس */}
  <div className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 min-w-[250px] hover:scale-[1.02] transition">
    <div className="p-3 md:p-4 border border-[#65C5B4] rounded-full text-[#65C5B4]">
      <FaMapMarkerAlt size={24} />
    </div>
    <div>
      <p className="font-bold text-[#65C5B4] text-[18px] md:text-[20px]">
        آدرس
      </p>
      <p className="text-[15px] md:text-[17px]">
        اصفهان، خیابان شریعتی، روبه‌روی بیمارستان شریعتی، ساختمان فراز،
        واحد ۱۰۳
      </p>
    </div>
  </div>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
