import VideoBox from "./VideoBox";
import { useState } from "react";

const Alsera = [
  {
    title: "العالم قبل الإسلام",
    duration: "46:22",
    url: "https://www.youtube.com/watch?v=LI99lWP1zac&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=2",
  },
  {
    title: "مولد النبي وبداية شبابه",
    duration: "46:03",
    url: "https://www.youtube.com/watch?v=A6_y0HuwSQw&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=1",
  },
  {
    title: "وصف النبي وزواجه من السيدة خديجة",
    duration: "27:44",
    url: "https://www.youtube.com/watch?v=nqpVIANGU-o&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=3",
  },
  {
    title: "وصف النبي وزواجه من السيدة خديجة 2",
    duration: "24:33",
    url: "https://www.youtube.com/watch?v=YdWK45slrqc&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=4",
  },
  {
    title: "نزول الوحي والدعوة السرية بمكة ",
    duration: "1:05:31",
    url: "https://www.youtube.com/watch?v=6SiKw-qQ6mk&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=5",
  },
  {
    title: "بداية الجهر بالدعوة",
    duration: "1:00:55",
    url: "https://www.youtube.com/watch?v=GLvr-pYGLOs&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=6",
  },
  {
    title: "الهجرة إلي الحبشة",
    duration: "1:03:26",
    url: "https://www.youtube.com/watch?v=aliwSuClQRI&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=7",
  },
  {
    title: "إسلام عمر بن الخطاب",
    duration: "51:49",
    url: "https://www.youtube.com/watch?v=dZ1EkPuj91w&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=8",
  },
  {
    title: "عام الحزن",
    duration: "53:30",
    url: "https://www.youtube.com/watch?v=Tl1NmCYk1G4&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=9",
  },
  {
    title: "الإسراء والمعراج",
    duration: "54:21",
    url: "https://www.youtube.com/watch?v=mvwhozvTKd8&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=10",
  },
  {
    title: "بيعة العقبة الأولي",
    duration: "1:05:09",
    url: "https://www.youtube.com/watch?v=SlBo6bmtuTI&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=11",
  },
  {
    title: "الهجرة إلي المدينة",
    duration: "1:06:31",
    url: "https://www.youtube.com/watch?v=GGFse7G6cAs&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=12",
  },
  {
    title: "تأسيس مدينة للمسلمين",
    duration: "50:43",
    url: "https://www.youtube.com/watch?v=3rzbyI2_cvc&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=13",
  },
  {
    title: "مفهوم الجهاد في سبيل الله",
    duration: "1:07:04",
    url: "https://www.youtube.com/watch?v=7spRnIahHk4&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=14",
  },
  {
    title: "غزوة بدر",
    duration: "1:05:33",
    url: "https://www.youtube.com/watch?v=b7YVYhcQdfU&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=15",
  },
  {
    title: "أحداث ما بين بدر وأحد",
    duration: "48:54",
    url: "https://www.youtube.com/watch?v=Pt2EEsFtf5Y&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=16",
  },
  {
    title: "غزوة أحد",
    duration: "1:12:14",
    url: "https://www.youtube.com/watch?v=EWvAT3HcUic&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=17",
  },
  {
    title: "حادثة الإفك",
    duration: "1:04:14",
    url: "https://www.youtube.com/watch?v=2XJ1102-9rg&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=18",
  },
  {
    title: "غزوة الخندق",
    duration: "1:02:33",
    url: "https://www.youtube.com/watch?v=XPql-o9tQ0s&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=19",
  },
  {
    title: "صلح الحديبية",
    duration: "1:00:41",
    url: "https://www.youtube.com/watch?v=mbsTyEaQmJY&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=20",
  },
  {
    title: "غزوة خيبر",
    duration: "54:55",
    url: "https://www.youtube.com/watch?v=3MF0xKJ2DWo&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=21",
  },
  {
    title: "ما قبل فتح مكة",
    duration: "1:10:46",
    url: "https://www.youtube.com/watch?v=9SX9K1csx28&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=22",
  },
  {
    title: "فتح مكة",
    duration: "1:07:35",
    url: "https://www.youtube.com/watch?v=TSkXmxSs-pA&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=23",
  },
  {
    title: "غزوة حنين وحصار الطائف",
    duration: "1:11:17",
    url: "https://www.youtube.com/watch?v=ySswp1_bn4A&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=24",
  },
  {
    title: "غزوة تبوك",
    duration: "1:03:06",
    url: "https://www.youtube.com/watch?v=ZrcxE10HVoQ&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=25",
  },
  {
    title: "وفاة النبي ﷺ",
    duration: "1:00:41",
    url: "https://www.youtube.com/watch?v=k8CLspkQSEk&list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&index=26",
  },
];
const AlQuran = [
  {
    title: "سورة ق",
    duration: "1:07:02",
    url: "https://www.youtube.com/watch?v=jLoWZZWCqbY&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj",
  },
  {
    title: "سورة الطور",
    duration: "1:13:35",
    url: "https://www.youtube.com/watch?v=Y-R4oCHR-Vg&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=2",
  },
  {
    title: "سورة الذاريات",
    duration: "1:10:22",
    url: "https://www.youtube.com/watch?v=cMVJeSauMgg&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=3",
  },
  {
    title: "سورة النجم",
    duration: "57:14",
    url: "https://www.youtube.com/watch?v=zeMUoKB3OZ0&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=4",
  },
  {
    title: "سورة القمر",
    duration: "1:03:46",
    url: "https://www.youtube.com/watch?v=q3Ps14yDq6M&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=5",
  },
  {
    title: "سورة الرحمن",
    duration: "1:03:24",
    url: "https://www.youtube.com/watch?v=w-vCTZezLuE&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=6",
  },
  {
    title: "سورة الواقعة",
    duration: "52:20",
    url: "https://www.youtube.com/watch?v=E4Po-pgVEQ8&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=7",
  },
  {
    title: "سورة الواقعة الجزء الثاني",
    duration: "53:45",
    url: "https://www.youtube.com/watch?v=hGtYeLvVYSg&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=8",
  },
  {
    title: "سورة الحديد",
    duration: "1:12:11",
    url: "https://www.youtube.com/watch?v=qctUpWNVGlo&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=9",
  },
  {
    title: "سورة الحديد الجزء الثاني",
    duration: "1:02:09",
    url: "https://www.youtube.com/watch?v=HeuOEm59ayE&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=10",
  },
  {
    title: "سورة التغابن",
    duration: "54:46",
    url: "https://www.youtube.com/watch?v=FECtD5Vu5xM&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=11",
  },
  {
    title: "سورة الملك",
    duration: "57:45",
    url: "https://www.youtube.com/watch?v=54EFtkbeO2I&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=12",
  },
  {
    title: "سورة القلم",
    duration: "1:05:47",
    url: "https://www.youtube.com/watch?v=uQTBmKAfEvQ&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=13",
  },
  {
    title: "سورة الحاقة",
    duration: "1:09:25",
    url: "https://www.youtube.com/watch?v=esS79OjqYCU&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=14",
  },
  {
    title: "سورة المعارج",
    duration: "1:07:56",
    url: "https://www.youtube.com/watch?v=l4xjkhg6YwE&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=15",
  },
  {
    title: "سورة المزمل",
    duration: "1:07:35",
    url: "https://www.youtube.com/watch?v=ZmO4iq8FA0Y&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=16",
  },
  {
    title: "سورة المدثر",
    duration: "1:17:31",
    url: "https://www.youtube.com/watch?v=ZhsKZfFJKuQ&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=17",
  },
  {
    title: "سورة القيامة",
    duration: "1:06:49",
    url: "https://www.youtube.com/watch?v=xlhMZXx9vdQ&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=18",
  },
  {
    title: "سورة الإنسان",
    duration: "1:03:42",
    url: "https://www.youtube.com/watch?v=fuqXXWzcnHQ&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=19",
  },
  {
    title: "سورة المرسلات",
    duration: "1:08:39",
    url: "https://www.youtube.com/watch?v=-uFvvFpax7E&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=20",
  },
  {
    title: "سورة نوح",
    duration: "1:12:11  ",
    url: "https://www.youtube.com/watch?v=3JbzVZvhShk&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=21",
  },
  {
    title: "سورة الجن",
    duration: "56:33",
    url: "https://www.youtube.com/watch?v=fZAkTGlnspM&list=PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj&index=22",
  },
];

const Videos = () => {
  const [activeTab, setActiveTab] = useState("alsera");

  return (
    <div className="p-10" id="videos">
      <div className="head flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          السيرة والقرآن
        </h1>
        <p className="dark:text-gray-400 text-gray-600 text-lg mb-6">
          قوائم تشغيل للسيرة النبوية والقرآن الكريم
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "alsera"
              ? "bg-[#10B981] text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("alsera")}
        >
          السيرة النبوية
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab !== "alsera"
              ? "bg-[#10B981] text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setActiveTab("quran")}
        >
          القرآن الكريم
        </button>
      </div>

      <div className="videos-container flex flex-wrap gap-4 justify-center">
        {(activeTab === "alsera" ? Alsera : AlQuran).map((video) => (
          <VideoBox
            key={video.url}
            title={video.title}
            duration={video.duration}
            backgroundText={
              activeTab === "alsera" ? "السيرة النبوية" : "القرآن الكريم"
            }
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
