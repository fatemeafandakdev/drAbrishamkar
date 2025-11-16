import  { useState } from "react";
import dr from "../assests/img/drabrishamkar.png";
import { FaPhoneAlt, FaIdBadge, FaMapMarkerAlt } from "react-icons/fa";
import Layout from "../layOut/Layout";

function InternetReserve() {
  const [selectedType, setSelectedType] = useState("اینترنتی");

  const types = [
    { id: 1, name: "اینترنتی", desc: "رزرو آنلاین نوبت از طریق سامانه آرناپ" },
    { id: 2, name: "تلفنی", desc: "دریافت نوبت از طریق تماس با مطب" },
    { id: 3, name: "حضوری", desc: "مراجعه مستقیم به مطب دکتر ابریشم‌کار" },
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col md:flex-row justify-center gap-8 py-12 px-6 md:px-16">

     
      <aside className="bg-white w-full md:w-1/4 rounded-2xl shadow-xl p-6 h-fit sticky top-8">
  <h2 className="text-xl font-bold text-blue-700 mb-4 text-center md:text-right">
    نوع نوبت
  </h2>

  <div className="grid grid-cols-1 gap-4 md:flex md:flex-col">
    {types.map((type) => (
      <button
        key={type.id}
        onClick={() => setSelectedType(type.name)}
        className={`w-full text-center p-4 rounded-xl border-2 transition-all duration-300 ${
          selectedType === type.name
            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-transparent shadow-md scale-105"
            : "bg-gray-50 hover:bg-blue-50 border-blue-200 text-gray-700"
        }`}
      >
        <p className="font-semibold text-lg">{type.name}</p>
        <p className="text-sm mt-1 opacity-80">{type.desc}</p>
      </button>
    ))}
  </div>
</aside>


     
      <main className="flex-1 bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-10">
      
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg flex-shrink-0">
            <img
              src={dr}
              alt="دکتر سعید ابریشم کار"
              className="w-full h-full object-cover"
            />
          </div>

         
          <div className="flex-1 text-center md:text-right space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
              دکتر سعید ابریشم‌کار
            </h1>
            <p className="text-gray-600 mt-1 text-lg">متخصص جراحی مغز و اعصاب</p>

           
            <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
              <FaIdBadge className="text-blue-500 text-xl" />
              <span className="text-gray-700 font-medium">کد نظام پزشکی: ۲۳۵۴۵</span>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <span className="text-gray-700 font-medium">031-36281584</span>
            </div>

           
            <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span className="text-gray-700 font-medium">
                اصفهان، خیابان شریعتی، روبه‌روی بیمارستان شریعتی، ساختمان فراز، واحد 103
              </span>
            </div>

          
            <button className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              رزرو نوبت {selectedType}
            </button>
          </div>
        </div>

      
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
            درباره دکتر و آرناپ
          </h2>
          <p className="text-gray-700 leading-8 text-justify">
            دکتر سعید ابریشم‌کار متخصص جراحی مغز و اعصاب در اصفهان است. آدرس مطب ایشان
            در خیابان شریعتی روبه‌روی بیمارستان شریعتی، ساختمان فراز، واحد 103 قرار دارد.
            برای تماس با مطب می‌توانید از شماره{" "}
            <span className="font-semibold text-blue-600">03136281584</span> استفاده کنید.
          </p>
          <p className="text-gray-700 mt-4 leading-8 text-justify">
            آرناپ به شما این امکان را می‌دهد که به راحتی از دکترهای متخصص در سراسر ایران نوبت بگیرید.
            در آرناپ می‌توانید نوبت خود را به‌صورت آنلاین، تلفنی یا حضوری دریافت کنید.
            همچنین امکان مشاهده‌ی نظرات بیماران دیگر و انتخاب بهترین پزشک فراهم است.
          </p>
          <p className="text-gray-700 mt-4 leading-8 text-justify">
            آرناپ با همکاری بیش از ۸۰۰۰ پزشک و متخصص درمانی در سراسر ایران، فرآیند نوبت‌دهی را برای شما
            آسان‌تر کرده و به بهبود سلامت جامعه کمک می‌کند.
          </p>
        </div>
      </main>
    </div>
    </Layout>
  );
}

export default InternetReserve;
