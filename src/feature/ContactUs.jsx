import React from "react";
import { useForm } from "react-hook-form";
import locationImg from "../assests/img/problem/location.png"; // عکس لوکیشن

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("پیام شما با موفقیت ارسال شد!");
    reset();
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      {/* فرم ارتباط با ما */}
      <section className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
            ارتباط با دکتر
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 rounded-full mb-3"></div>
          <p className="text-gray-500 text-sm md:text-base">
            برای ارتباط با دکتر ابریشم‌کار، لطفاً فرم زیر را پر کنید.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700 mb-2">نام</label>
            <input
              type="text"
              {...register("firstName", { required: "نام الزامی است" })}
              className="border-[2px] border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700 mb-2">نام خانوادگی</label>
            <input
              type="text"
              {...register("lastName", { required: "نام خانوادگی الزامی است" })}
              className="border-[2px] border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700 mb-2">شماره تماس</label>
            <input
              type="tel"
              {...register("phone", {
                required: "شماره تماس الزامی است",
                pattern: { value: /^[0-9]{10,11}$/, message: "شماره معتبر نیست" },
              })}
              className="border-[2px] border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700 mb-2">ایمیل</label>
            <input
              type="email"
              {...register("email", {
                required: "ایمیل الزامی است",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "فرمت ایمیل معتبر نیست" },
              })}
              className="border-[2px] border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-base font-medium text-gray-700 mb-2">پیام</label>
            <textarea
              rows="5"
              {...register("message", { required: "پیام الزامی است" })}
              className="border-[2px] border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all duration-200"
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              ارسال پیام
            </button>
          </div>
        </form>
      </section>

      {/* بخش آدرس و عکس لوکیشن */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">آدرس مطب</h3>
          <p className="text-gray-700 mb-2">
            اصفهان، خیابان شریعتی، روبروی بیمارستان شریعتی، ساختمان فراز، واحد 103
          </p>
          <p className="text-gray-700 mb-2">شماره تماس: 03136281584</p>
          <p className="text-gray-700">
            دکتر سعید ابریشمکار، متخصص جراحی مغز و اعصاب در اصفهان
          </p>
        </div>

        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={locationImg}
            alt="آدرس مطب"
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
