import React from "react";
import tomur1 from "../assests/img/problem/tomur.jpg";
import tomur2 from "../assests/img/problem/tomur2.jpg";
import tomur3 from "../assests/img/problem/tomur3.jpg";
import Layout from "../layOut/Layout";

function Article() {
  return (
    <Layout>
    <section className="w-[100%]  mx-auto my-12 bg-blue-100">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
        علائم، نشانه‌ها و راه‌های درمان تومور مغزی
      </h1>

      <p className="text-gray-700 leading-8 mb-6 text-2xl">
        به تجمع غیرعادی سلول در مغز تومور مغزی گفته می‌شود. جمجمه که مغز را احاطه کرده، بسیار محکم است. هرگونه رشد در چنین فضای محدود منجر به بروز مشکل می‌شود. ممکن است تومور سرطانی (بدخیم) یا غیر سرطانی (خوش خیم) باشد. با رشد تومور خوش خیم یا بدخیم، فشار داخل جمجمه افزایش می‌یابد و به مغز آسیب وارد می‌شود.
      </p>

      <img
        src={tomur1}
        alt="تومور مغزی"
        className="w-[50%] h-auto rounded-2xl shadow-lg mb-6 m-auto"
      />

      <p className="text-gray-700 leading-8 mb-6 text-2xl">
        تومور مغزی به دو دسته اولیه و ثانویه تقسیم می‌شود. منشا تومور اولیه در مغز است. بسیاری از تومورهای اولیه خوش خیم هستند. تومور ثانویه مغزی زمانی اتفاق می‌افتد که سلول‌های سرطانی یک اندام دیگر، مانند ریه یا پستان، به مغز سرایت کند.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">راه‌های درمان تومور مغزی</h2>
      <p className="text-gray-700 leading-8 mb-6 text-2xl">
        انواع تومور مغز، تومور مغزی اولیه و ثانویه، تومورهای گلیوما، مننژیوم و سایر انواع، روش‌های تشخیص شامل سی تی اسکن، MRI و آنژیوگرافی، و درمان‌ها مانند جراحی، پرتودرمانی و شیمی درمانی به تفصیل بررسی می‌شوند.
      </p>

      <img
        src={tomur2}
        alt="تشخیص تومور مغزی"
        className="w-[50%] h-auto rounded-2xl shadow-lg mb-6 m-auto"
      />

      <p className="text-gray-700 leading-8 mb-6 text-2xl">
        علائم تومور مغزی شامل سردرد، استفراغ، تاری دید، ضعف عضلات و تغییر در عملکرد ذهنی است. همچنین ممکن است تغییرات در راه رفتن، تعادل و کنترل مثانه و بی حسی یا مورمور شدن بدن مشاهده شود. علائم تومور هیپوفیز و روش‌های دقیق تشخیص توسط پزشک نیز توضیح داده شده است.
      </p>

      <img
        src={tomur3}
        alt="درمان تومور مغزی"
        className="w-[50%] h-auto rounded-2xl shadow-lg mb-6 m-auto"
      />

      <p className="text-gray-700 leading-8 mb-6 text-2xl">
        درمان تومور مغزی به نوع، اندازه و محل تومور بستگی دارد. شایع‌ترین درمان تومور بدخیم مغز جراحی است، که همراه با روش‌های دیگر مانند پرتودرمانی و شیمی درمانی انجام می‌شود. جسم درمانی، کاردرمانی و گفتاردرمانی نیز به بهبود بیمار بعد از جراحی کمک می‌کنند.
      </p>

      <p className="text-gray-700 leading-8 mb-6 text-2xl">
        چشم‌انداز تومور مغز به مواردی همچون نوع، اندازه، محل تومور و سلامت کلی بیمار بستگی دارد. درمان زودهنگام مانع از بروز عوارض ناشی از فشار بر مغز می‌شود و تجربه بیمار را بهبود می‌بخشد.
      </p>
    </section>
    </Layout>
  );
}

export default Article;
