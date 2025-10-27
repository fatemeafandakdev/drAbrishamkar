import React from "react";
import zone1 from "../assests/img/zone1.png";
import zone2 from "../assests/img/zone2.png";
import zone3 from "../assests/img/zone3.png";
import zone4 from "../assests/img/zone4.png";
import brain from "../assests/img/brain.png";
import eskelet from "../assests/img/eskelet.png";
import body from "../assests/img/human.png";
import tomor from "../assests/img/tomor.png";

function AboutDisorder() {
  const disorders = [
    {
      id: 1,
      bg: zone1,
      icon: brain,
      title: "مراقبت‌های پس از جراحی مغز",
      description:
        "دوره نقاهت پس از جراحی از جهت نوع تومور، اندازه تومور، جنس تومور، سن بیمار، جنس بیمار و ... متفاوت است.",
    },
    {
      id: 2,
      bg: zone2,
      icon: eskelet,
      title: "مراقبت‌های پس از جراحی ستون فقرات",
      description:
        "بیمار معمولا ۲۴ تا ۴۸ ساعت بعد از عمل استراحت مطلق می‌باشد. در طی استراحت در تخت می‌تواند در تخت چرخش ...",
    },
    {
      id: 3,
      bg: zone3,
      icon: body,
      title: "ورزش‌هایی برای بهبود ستون فقرات",
      description:
        "در چند دهه گذشته، زمان سپری شده با کمردرد در سراسر جهان ۵۴٪ افزایش یافته است. این آمار اهمیت ورزش را نشان می‌دهد.",
    },
    {
      id: 4,
      bg: zone4,
      icon: tomor,
      title: "علائم تومور مغزی",
      description:
        "به تجمع غیرعادی سلول در مغز تومور مغزی گفته می‌شود. هرگونه رشد در مغز ممکن است تومور سرطانی یا غیرسرطانی باشد.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-12">
        آشنایی با اختلالات مغز و ستون فقرات
      </h2>

      <div className="flex flex-wrap -m-2">
        {disorders.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              {/* Image */}
              <img
                src={item.bg}
                alt={item.title}
                className="w-full h-72 object-cover"
              />

              {/* Dark blue overlay */}
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex flex-col items-center justify-start p-6 text-center">
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-full border-2 border-white mb-3"
                />

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>

                {/* Hidden Text & Button (Appear on Hover) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                  <p className="text-white text-sm leading-6 mb-4">{item.description}</p>
                  <button className="border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300">
                    بیشتر بخوانید
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutDisorder;
