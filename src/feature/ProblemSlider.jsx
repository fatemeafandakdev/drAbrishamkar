
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
  {
    id: 1,
    type: "neck",
    img: prm1,
    title: "جراحی دیسک گردن",
    description:
      "لورم ایپسوم متن ساختگی برای توضیح کوتاه درباره جراحی دیسک گردن.",
  },
  {
    id: 2,
    type: "spinalCord",
    img: prm2,
    title: "جراحی طناب نخاعی",
    description:
      "لورم ایپسوم متن ساختگی برای توضیح کوتاه درباره جراحی طناب نخاعی.",
  },
  {
    id: 3,
    type: "back",
    img: prm3,
    title: "جراحی دیسک کمر",
    description:
      "لورم ایپسوم متن ساختگی برای توضیح کوتاه درباره جراحی دیسک کمر.",
  },
  {
    id: 4,
    type: "lesions",
    img: prm4,
    title: "جراحی ضایعات نخاعی",
    description:
      "لورم ایپسوم متن ساختگی برای توضیح کوتاه درباره جراحی ضایعات نخاعی.",
  },
  {
    id: 5,
    type: "tumor",
    img: prm5,
    title: "جراحی تومور مغزی",
    description:
      "لورم ایپسوم متن ساختگی برای توضیح کوتاه درباره جراحی تومور مغزی.",
  },
  {
    id: 6,
    type: "aneurysm",
    img: prm6,
    title: "جراحی آنوریسم مغزی",
    description:
      "لورم ایپسوم متن ساختگی برای توضیح کوتاه درباره جراحی آنوریسم مغزی.",
  },
];

export default function ProblemSlider() {
  const slides = [];
  for (let i = 0; i < problems.length; i += 3) {
    slides.push(problems.slice(i, i + 3));
  }

  return (
    <div className="w-[95%] mx-auto py-16 text-center">
     
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
        حوزه فعالیت متخصص جراحی مغز و اعصاب
      </h2>

   
      <div className="w-40 h-1 bg-gradient-to-r from-blue-800 via-cyan-500 to-blue-400 mx-auto rounded-full mb-5"></div>

      <p className="text-gray-600 text-base md:text-lg mb-10 leading-8 max-w-3xl mx-auto">
        جراحی مغز یا ستون فقرات انواع مختلفی دارد که جراح مغز و اعصاب نوع مناسب را بسته به
        عارضه تحت درمان انتخاب می‌کند. در ادامه با برخی از مهم‌ترین این جراحی‌ها آشنا می‌شوید.
      </p>

    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex  justify-center gap-4">
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
