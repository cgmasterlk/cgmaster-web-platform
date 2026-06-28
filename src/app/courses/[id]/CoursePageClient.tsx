"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "මෙම පාඨමාලාව කාටද සුදුසු?",
    a: "කිසිදු පූර්ව දැනුමක් නැති ආරම්භකයින්ට සිට මධ්‍යම මට්ටමේ ඉගෙනුම්ලාභීන්ට ද සුදුසුය.",
  },
  {
    q: "Classes miss වුණොත් කරන්නේ කුමක්ද?",
    a: "සෑම Zoom class එකක්ම record කර share කෙරේ. Rewatch කළ හැකිය.",
  },
  {
    q: "Certificate ලැබෙනවාද?",
    a: "ඔව්. සියලු projects submit කළ ඉගෙනුම්ලාභීන්ට CG Master Certificate ලැබේ.",
  },
];

type Course = {
  id: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  status: string;
  _count: { enrollments: number };
};

export default function CoursePageClient({ course }: { course: Course }) {
  const [playing, setPlaying] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const whatsappMessage = encodeURIComponent(
    `හෙලෝ! මට ${course.title} පාඨමාලාවට ලියාපදිංචි වීමට කැමතියි.\n\nනම: \nදුරකථන: \nEmail: `
  );
  const whatsappUrl = `https://wa.me/+94719209455?text=${whatsappMessage}`;

  function handleStop() {
    setPlaying(false);
    if (videoRef.current) {
      const src = videoRef.current.src;
      videoRef.current.src = "";
      videoRef.current.src = src;
    }
  }

  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/">
          <img src="/logo.png" alt="CG Master" className="h-[45px] w-auto object-contain" />
        </Link>
        <Link href="/#courses" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          ← පාඨමාලා වෙත
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {course.status === "active" ? "දැන් සජීවීව" : "ඉක්මනින් එනවා"}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              {course.title}
            </span>
          </h1>
          <p className="text-white/60 mb-8 text-lg max-w-2xl mx-auto">
            {course.description}
          </p>

          {/* Thumbnail */}
          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/60 bg-black aspect-video max-w-3xl">
            {course.thumbnail ? (
              !playing ? (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
                  onClick={() => setPlaying(true)}
                  style={{ backgroundImage: `url('${course.thumbnail}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-5">
                      <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                      <button className="relative w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                        <span className="text-white text-3xl ml-1">▶</span>
                      </button>
                    </div>
                    <p className="text-white font-bold text-base drop-shadow-lg">Preview Video බලන්න</p>
                  </div>
                </div>
              ) : (
                <iframe
                  ref={videoRef}
                  className="w-full h-full"
                  src={`${course.thumbnail}?autoplay=1&rel=0`}
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <span className="text-8xl">🎨</span>
              </div>
            )}
          </div>

          {playing && (
            <button onClick={handleStop} className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all">
              ⏹ Stop
            </button>
          )}
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          {/* Quick info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "💰", label: "Course Fee", value: course.price > 0 ? `රු. ${course.price.toLocaleString()}` : "නොමිලේ" },
              { icon: "🎓", label: "Level", value: "Beginner" },
              { icon: "🎥", label: "Classes", value: "සජීවී Zoom" },
              { icon: "🏆", label: "Certificate", value: "ලැබේ" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-xs text-gray-400 font-medium mb-1">{item.label}</p>
                <p className="text-gray-900 font-bold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">නිතර අසන ප්‍රශ්න</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-gray-900 text-sm pr-4">❓ {faq.q}</span>
                    <span className="text-purple-500 text-lg flex-shrink-0 transition-transform duration-200"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* JOIN CTA */}
          <div className="bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-xl shadow-purple-500/30">
            <h2 className="text-2xl font-extrabold mb-2">ඔබේ Creative Journey ආරම්භ කරන්න! 🚀</h2>
            <p className="text-white/70 mb-6 text-sm">Limited seats — දැනටම ලියාපදිංචි වන්න.</p>
            {course.status === "active" ? (
              <a href={whatsappUrl} target={"_blank"} rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-purple-700 hover:bg-purple-50 font-extrabold text-lg px-10 py-4 rounded-xl transition-all shadow-xl hover:scale-105">
                <span>📱</span>
                WhatsApp හරහා Join වන්න
                <span>→</span>
              </a>
            ) : (
              <button disabled className="bg-white/30 text-white font-bold text-lg px-10 py-4 rounded-xl cursor-not-allowed">
                ඉක්මනින් එනවා
              </button>
            )}
            <p className="text-white/50 text-xs mt-4">ලියාපදිංචි වීමෙන් පසු WhatsApp හරහා confirm කෙරේ</p>
          </div>

        </div>
      </section>

    </main>
  );
}