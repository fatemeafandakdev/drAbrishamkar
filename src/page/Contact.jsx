import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";
import mapImg from "../assests/img/problem/location.png"; // عکس لوکیشن خودت
import Layout from "../layOut/Layout";


function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("پیام شما با موفقیت ارسال شد!");
    reset();
  };

  return (
    <Layout>
    <div className="bg-gray-50">
      {/* عنوان صفحه */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
          ارتباط با دکتر
        </h1>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 rounded-full"></div>
      </div>

      {/* سه باکس رزرو */}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all">
          <FaCalendarCheck className="text-blue-500 text-5xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">رزرو اینترنتی</h3>
          <p className="text-gray-600 text-sm text-center">
            نوبت خود را به صورت آنلاین دریافت کنید.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all">
          <FaPhoneAlt className="text-blue-500 text-5xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">رزرو تلفنی</h3>
          <p className="text-gray-600 text-sm text-center">
            با شماره تماس مطب نوبت خود را ثبت کنید.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all">
          <FaMapMarkerAlt className="text-blue-500 text-5xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">رزرو حضوری</h3>
          <p className="text-gray-600 text-sm text-center">
            به مطب مراجعه کرده و نوبت خود را حضوری دریافت کنید.
          </p>
        </div>
      </div>

      {/* فرم و آدرس */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-12 mb-16">
        {/* فرم */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
            فرم ارتباط با دکتر
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="نام"
              {...register("firstName", { required: "نام الزامی است" })}
              className="border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}

            <input
              type="text"
              placeholder="نام خانوادگی"
              {...register("lastName", { required: "نام خانوادگی الزامی است" })}
              className="border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}

            <input
              type="tel"
              placeholder="شماره تماس"
              {...register("phone", { required: "شماره تماس الزامی است" })}
              className="border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

            <input
              type="email"
              placeholder="ایمیل"
              {...register("email", { required: "ایمیل الزامی است" })}
              className="border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <textarea
              rows="5"
              placeholder="پیام شما"
              {...register("message", { required: "پیام الزامی است" })}
              className="border-2 border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full mt-4 font-semibold hover:scale-105 transition-all">
              ارسال پیام
            </button>
          </form>
        </div>

        {/* آدرس و عکس */}
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-6">
          <div className="bg-blue-200 text-blue-950 p-6 rounded-2xl shadow-lg w-full flex flex-col items-center">
            <h3 className="font-semibold text-xl mb-2">آدرس مطب</h3>
            <p className="text-sm md:text-base text-center">
              اصفهان، خیابان شریعتی، روبه‌روی بیمارستان شریعتی، ساختمان فراز، واحد ۱۰۳  
              <br />
              شماره تماس: 03136281584
            </p>
          </div>
          <img src={mapImg} alt="آدرس مطب" className="w-full h-100 object-cover rounded-2xl shadow-lg" />
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default ContactPage;
