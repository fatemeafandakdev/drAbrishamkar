import { useState, useEffect } from "react";
import prm1 from "../assests/img/problem/prm1.jpg";
import prm2 from "../assests/img/problem/prm2.jpeg";
import prm3 from "../assests/img/problem/prm3.jpg";
import prm4 from "../assests/img/problem/prm4.jpg";
import prm5 from "../assests/img/problem/prm5.jpg";
import prm6 from "../assests/img/problem/prm6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ProblemCard from "./ProblemCard";

const problems = [
  { id: 1, img: prm1, title: "جراحی دیسک گردن" },
  { id: 2, img: prm2, title: "جراحی طناب نخاعی" },
  { id: 3, img: prm3, title: "جراحی دیسک کمر" },
  { id: 4, img: prm4, title: "جراحی ضایعات نخاعی" },
  { id: 5, img: prm5, title: "جراحی تومور مغزی" },
  { id: 6, img: prm6, title: "جراحی آنوریسم مغزی" },
];

export default function ProblemSlider() {
  const [groupSize, setGroupSize] = useState(3);

  useEffect(() => {
    const updateSize = () => {
      setGroupSize(window.innerWidth < 1020 ? 1 : 3);
    };

    updateSize(); // اجرا در ابتدا
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const slides = [];
  for (let i = 0; i < problems.length; i += groupSize) {
    slides.push(problems.slice(i, i + groupSize));
  }

  return (
    <div className="w-[95%] mx-auto py-16 text-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center gap-4">
              {group.map((item) => (
                <ProblemCard key={item.id} {...item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
