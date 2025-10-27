import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaUserMd } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

import pain1 from "../assests/img/pain1.jpg";
import pain2 from "../assests/img/pain2.jpg";
import pain3 from "../assests/img/pain3.jpg";
import { Link } from "react-router-dom";

function AboutSurgeon() {
  const slides = [
    { id: 1, img: pain1, text: "درمان دیسک کمر" },
    { id: 2, img: pain2, text: "جراحی مغز و نخاع" },
    { id: 3, img: pain3, text: "توانبخشی بعد از عمل" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* قوس بالای کامپوننت */}
     

      {/* بدنه اصلی با گرادیانت آبی */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-300 text-white py-16 px-6 md:px-20 mt-12 rounded-t-[60px] shadow-lg">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-[90%] mx-auto">

          {/* متن */}
          <div className="w-full md:w-3/5 text-right leading-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              جراح مغز و اعصاب چه کاری انجام می‌دهد؟
            </h2>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              برای چه بیماری‌هایی به جراح مغز و اعصاب مراجعه کنیم
            </h3>
            <p className="text-sm md:text-base text-gray-100 mb-8">
              جراح مغز و اعصاب، یکی از تخصص‌های پزشکی است که به لحاظ مدت آموزش
              بین ۵ تا ۷ سال، طولانی‌ترین دوره را دارد. جراح مغز و اعصاب، در این
              تخصص، بعد از گذراندن دوره عمومی در طی یک برنامه نظری و عملی، توانایی
              تشخیص و درمان بیماری‌های مختلفی را به دست می‌آورد.
              <br />
              <br />
              بیماری‌های مرتبط با مغز، نخاع، ستون فقرات و بیماری‌هایی مانند دیسک
              کمر و گردن در حیطه کاری جراح مغز و اعصاب قرار می‌گیرد. باید توجه
              داشته باشیم هر گونه عمل جراحی بر روی ستون فقرات به دلیل اینکه ممکن
              است به نخاع فرد آسیب وارد شود، در حیطه کاری جراح مغز و اعصاب است.
            </p>

            <Link to={"./aboutDrAbrisham"}><button className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300" >
              <FaUserMd className="text-xl" />
              درباره دکتر سعید کشتکار
            </button></Link>
          </div>

          {/* Swiper */}
          <div className="w-full md:w-2/5">
            <div className="bg-blue-200/30 p-3 rounded-2xl shadow-xl">
              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="rounded-2xl overflow-hidden"
              >
                {slides.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="flex flex-col items-center justify-center bg-blue-100 text-blue-900 p-4 rounded-xl"
                  >
                    <img
                      src={slide.img}
                      alt={slide.text}
                      className="w-full h-48 md:h-56 object-cover rounded-lg mb-3"
                    />
                    <p className="font-semibold text-center">{slide.text}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSurgeon;
