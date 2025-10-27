import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarCheck, FaRegEye, FaSignInAlt } from "react-icons/fa";

function ServiceOption() {
  const services = [
    {
      id: 1,
      category: "appointment",
      title: "نوبت‌گیری آنلاین",
      description:
        "شما به کمک این سامانه به راحتی در هر ساعت از شبانه روز میتوانید نوبت ملاقات بگیرید.",
      icon: (
        <FaRegCalendarCheck className="text-[#65C5B4] text-6xl mb-4 transition-transform duration-300 hover:scale-110" />
      ),
      path: "/appointment",
    },
    {
      id: 2,
      category: "checkOrCancel",
      title: "بررسی یا لغو نوبت",
      description:
        "برای بررسی زمان نوبت گیری یا لغو کردن آن میتوانید روی این آیکن کلیک کنید.",
      icon: (
        <FaRegEye className="text-[#65C5B4] text-6xl mb-4 transition-transform duration-300 hover:scale-110" />
      ),
      path: "/check",
    },
    {
      id: 3,
      category: "login",
      title: "ورود به سامانه",
      description:
        "برای ورود و ثبت نوبت میتوانید از طریق این آیکن به سیستم وارد شوید.",
      icon: (
        <FaSignInAlt className="text-[#65C5B4] text-6xl mb-4 transition-transform duration-300 hover:scale-110" />
      ),
      path: "/login",
    },
  ];

  return (
    <div className="w-[90%] mx-auto my-10 flex flex-col md:flex-row justify-center items-center gap-8">
      {services.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md hover:shadow-xl p-8 rounded-2xl w-full md:w-1/3 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col items-center">
            {item.icon}
            <Link
              to={item.path}
              className="text-[25px] font-bold text-[#65C5B4] hover:text-[#4BAA9C] transition-colors duration-300 mb-2"
            >
              {item.title}
            </Link>
            <p className="text-gray-600 text-[16px] leading-7">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceOption;
