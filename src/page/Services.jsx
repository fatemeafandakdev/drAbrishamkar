import  { useState } from "react";
import Layout from "../layOut/Layout";

function Services() {
    const services = [
        {
          title: "جراحی مغز",
          short: "انجام انواع جراحی‌های مغز با تجهیزات پیشرفته.",
          long: "جراحی مغز شامل برداشتن تومورها، درمان خونریزی‌ها و سایر مشکلات عصبی می‌شود. تیم پزشکی ما از جدیدترین تکنولوژی‌ها و تجهیزات پیشرفته استفاده می‌کند تا ایمنی بیمار در بالاترین سطح باشد. پیش از جراحی، بررسی‌های دقیق تصویربرداری و آزمایش‌های لازم انجام می‌شود. روش‌های کم‌تهاجمی و نوین باعث کاهش عوارض و سرعت بهبودی می‌شوند. مراقبت‌های پس از عمل نیز به صورت دقیق پیگیری می‌شود تا نتیجه درمان کامل و پایدار باشد. هدف ما تضمین سلامت و بهبود کیفیت زندگی بیماران است."
        },
        {
          title: "درمان دیسک",
          short: "درمان دیسک کمر و گردن به روش‌های نوین و کم تهاجمی.",
          long: "درمان دیسک شامل روش‌های جراحی و غیرجراحی است که با توجه به وضعیت بیمار انتخاب می‌شود. تکنیک‌های مینی‌اینورسیو باعث کاهش درد و زمان بهبودی می‌شوند. تیم ما قبل از هر تصمیمی، بررسی‌های تصویربرداری MRI و CT را انجام می‌دهد. برنامه توانبخشی پس از درمان تضمین‌کننده بازگشت عملکرد طبیعی ستون فقرات است. همچنین آموزش‌های لازم به بیماران داده می‌شود تا از بروز مجدد مشکل جلوگیری شود. هدف ما بازگرداندن راحتی، قدرت و تحرک به بیمار است."
        },
        {
          title: "جراحی ستون فقرات",
          short: "رفع مشکلات ستون فقرات و بهبود کیفیت زندگی.",
          long: "جراحی ستون فقرات برای رفع مشکلات دیسک، تنگی کانال نخاعی و ناهنجاری‌های ساختاری انجام می‌شود. قبل از عمل، معاینات کامل عصبی و تصویربرداری پیشرفته انجام می‌شود. تکنیک‌های کم‌تهاجمی به کاهش درد و زمان بستری کمک می‌کنند. تیم جراحی ما تجربه بالایی در مدیریت پیچیدگی‌های ستون فقرات دارد. پس از عمل، برنامه توانبخشی و فیزیوتراپی فردی طراحی می‌شود. هدف نهایی ما بازگرداندن عملکرد طبیعی و بهبود کیفیت زندگی بیمار است."
        },
        {
          title: "جراحی تومور",
          short: "حذف تومورهای مغزی و نخاعی با ایمنی بالا.",
          long: "تومورها بسته به محل و نوعشان نیاز به روش‌های جراحی دقیق دارند. تیم جراحی ما با استفاده از تجهیزات پیشرفته و تکنیک‌های نوین، ریسک جراحی را به حداقل می‌رساند. پیش از عمل بررسی‌های دقیق تصویربرداری و آزمایش‌ها انجام می‌شود. مراقبت‌های قبل و بعد از جراحی به صورت دقیق پیگیری می‌شود. بیماران پس از عمل تحت برنامه توانبخشی و کنترل دوره‌ای قرار می‌گیرند. هدف ما حذف کامل تومور و حفظ عملکرد عصبی بیمار با کمترین عوارض است."
        },
        {
          title: "مشاوره پزشکی",
          short: "ارائه مشاوره دقیق و شخصی‌سازی شده برای بیماران.",
          long: "مشاوره پزشکی شامل بررسی کامل سوابق بیمار، معاینات دقیق و آزمایش‌های لازم است. پزشک با توجه به شرایط بیمار، بهترین مسیر درمانی را پیشنهاد می‌دهد. هدف ارائه راهکارهای کوتاه‌مدت و بلندمدت برای سلامت بیمار است. اطلاعات دقیق در مورد داروها، روش‌های درمان و اقدامات پیشگیرانه ارائه می‌شود. مشاوره تلفنی یا حضوری امکان‌پذیر است تا بیماران بتوانند انتخاب مناسبی داشته باشند. تمامی توصیه‌ها بر اساس استانداردهای بین‌المللی و تجربه متخصصان انجام می‌شود."
        },
      ];
      

  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedService(null);
  };

  return (
    <Layout>
    <section className="w-[100%] md:w-[95%] mx-auto my-12 bg-blue-100 p-10 rounded-4 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
          خدمات ما
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-7">
          دکتر سعید ابریشمکار با بیش از دو دهه تجربه در حوزه جراحی مغز و
          ستون فقرات، بهترین خدمات درمانی را ارائه می‌دهد. ما با بهره‌گیری
          از روش‌های نوین و تجهیزات پیشرفته، به بهبود کیفیت زندگی بیماران
          کمک می‌کنیم.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleOpenModal(service)}
            className="cursor-pointer  bg-white shadow-lg rounded-2xl p-6 w-full  hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-xl">{service.short}</p>
          </div>
        ))}
      </div>

     
      {openModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] md:w-1/2 relative shadow-xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 leading-7">{selectedService.long}</p>
          </div>
        </div>
      )}
    </section>
    </Layout>
  );
}

export default Services;
