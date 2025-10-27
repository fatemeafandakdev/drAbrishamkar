import React from "react";
import dr from "../assests/img/drabrishamkar.png";

function AboutDoctor() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* متن */}
        <div className="w-full md:w-2/3 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            درباره‌ی دکتر سعید ابریشمکار
          </h2>

          {/* خط گرادیانت زیر عنوان */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 via-cyan-500 to-blue-400 rounded-full mb-6 ml-auto"></div>

          <p className="text-gray-700 leading-9 text-base md:text-lg">
            دکتر سعید ابریشمکار، متخصص و جراح مغز و اعصاب، از برجسته‌ترین
            پزشکان کشور در حوزه درمان بیماری‌های مغز، نخاع و ستون فقرات هستند.
            ایشان با سال‌ها تجربه در زمینه تشخیص و جراحی بیماری‌های مرتبط با
            دیسک کمر، گردن و آسیب‌های عصبی، توانسته‌اند خدمات درمانی گسترده‌ای
            را به بیماران ارائه دهند.  
            <br />
            <br />
            دکتر ابریشمکار با رویکردی علمی و انسانی، همواره تلاش دارند تا
            بیماران خود را با کمترین عارضه و بهترین نتایج درمانی بهبود بخشند.
            هدف ایشان، افزایش آگاهی بیماران و به‌کارگیری روش‌های نوین جراحی و
            غیرجراحی در درمان مشکلات سیستم عصبی است.
          </p>
        </div>

        {/* تصویر */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src={dr}
            alt="دکتر سعید ابریشمکار"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-700 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutDoctor;
