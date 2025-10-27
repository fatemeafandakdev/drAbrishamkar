import React from "react";
import ms from "../assests/img/problem/ms.png";
import deabrisham from "../assests/img/problem/drabrisham.png";

function Ms() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[500px] 
      bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-300 
      text-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
      
      {/* تصویر سمت چپ */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={ms}
          alt="بیماری ام اس"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* متن و دکتر */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 text-center space-y-6">
        
        <img
          src={deabrisham}
          alt="دکتر ابریشمکار"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />

        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          چه کسانی در مرز ام‌اس هستند؟
        </h2>

        <p className="text-base md:text-lg leading-9 max-w-xl text-gray-100">
          بیماری ام‌اس معمولاً زمانی ایجاد می‌شود که سیستم ایمنی بدن به اشتباه
          به غلاف‌های محافظ سلول‌های عصبی حمله می‌کند. عوامل ژنتیکی، استرس شدید،
          کمبود ویتامین D، و عفونت‌های ویروسی می‌توانند خطر ابتلا را افزایش دهند.
          <br />
          <br />
          شناسایی زودهنگام علائم و توجه به سلامت سبک زندگی نقش مهمی در پیشگیری از
          پیشرفت بیماری دارد.
        </p>
      </div>
    </section>
  );
}

export default Ms;
