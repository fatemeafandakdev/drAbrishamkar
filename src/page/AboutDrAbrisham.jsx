import React from "react";
import dr from "../assests/img/problem/drabrisham.png";
import Layout from "../layOut/Layout";

function AboutDrAbrisham() {
  return (
    <Layout>
    <section className="w-[90%] mx-auto my-12">
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* عکس دکتر */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src={dr}
            alt="دکتر سعید ابریشمکار"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg border-4 border-blue-500"
          />
        </div>

        {/* متن معرفی */}
        <div className="md:w-2/3 flex flex-col gap-6 text-right">
          <h2 className="text-4xl font-bold text-blue-700">
            دکتر سعید ابریشمکار
          </h2>
          <h3 className="text-3xl font-semibold text-gray-700">
            فوق تخصص و جراح مغز و اعصاب و ستون فقرات
          </h3>
          <p className="text-gray-600 leading-8 text-2xl">
            دکتر سعید ابریشمکار تحصیلات پزشکی خود را در دانشگاه علوم پزشکی
            تبریز گذرانده‌اند. ایشان طی چندین سال متوالی دوره‌های جراحی مغز
            و اعصاب در دانشگاه‌های علوم پزشکی اصفهان و شهرکرد سپری کرده‌اند.
            دکتر ابریشمکار دوره‌های تکمیلی جراحی مغز و اعصاب را در دانشگاه‌های
            ژاپن، نروژ و آلمان زیر نظر برجسته‌ترین پروفسورهای جهان گذرانده‌اند و
            هم اکنون متخصص جراحی مغز و اعصاب، فلوشیپ جراحی اعصاب از بلژیک و
            استاد دانشگاه علوم پزشکی اصفهان می‌باشند.
          </p>

          {/* سوابق */}
          <div className="bg-blue-50 p-4 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">
              تاریخچه تحصیلات و سوابق:
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-xl leading-6">
              <li>۱۳۶۲-۱۳۶۹ – دانشجوی پزشکی، دانشگاه علوم پزشکی آذربایجان، تبریز، ایران</li>
              <li>۱۳۷۱-۱۳۷۶ – دستیار جراحی مغز و اعصاب، دانشگاه اصفهان، دانشکده علوم پزشکی</li>
              <li>۱۳۶۹-۱۳۷۱ – پزشک عمومی، اصفهان، ایران</li>
              <li>۱۳۸۱ (۶ ماه) – ناظر عملکرد جراحی مغز و اعصاب، بروکسل، بلژیک</li>
              <li>۱۳۸۱-۱۳۸۲ (۹ ماه) – فلوشیپ عملکرد جراحی مغز و اعصاب، بروکسل، بلژیک</li>
              <li>۱۳۸۶ (۱۴ روز) – دوره تکمیلی در اندوواسکولار جراحی مغز و اعصاب، نوگایو، ژاپن</li>
              <li>۱۳۸۶ (۱۴ روز) – دوره تکمیلی در اندوسکپی جراحی مغز و اعصاب، نوگایو، ژاپن</li>
              <li>۱۳۸۷ (۷ روز) – دوره تکمیلی در آزمایشات عصبی، تروندهایم، نروژ</li>
              <li>۱۳۹۴ (۷ روز) – دوره تکمیلی در جراحی غده هیپوفیز، نورنبرگ، آلمان</li>
              <li>۱۳۷۶-۱۳۸۴ – استادیار جراحی مغز و اعصاب، دانشگاه علوم پزشکی شهرکرد</li>
              <li>۱۳۸۴-۱۳۸۵ – استادیار جراحی مغز و اعصاب، دانشگاه علوم پزشکی اصفهان</li>
              <li>۱۳۸۵-۱۳۹۰ – دانشیار جراحی مغز و اعصاب، دانشگاه علوم پزشکی اصفهان</li>
              <li>۱۳۹۰ تاکنون – استاد جراحی مغز و اعصاب، دانشگاه علوم پزشکی اصفهان</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}

export default AboutDrAbrisham;
