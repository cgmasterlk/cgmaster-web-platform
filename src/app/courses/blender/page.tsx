"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "මෙම පාඨමාලාව කාටද සුදුසු?",
    a: "Blender ගැන කිසිදු පූර්ව දැනුමක් නැති ආරම්භකයින්ට සිට මධ්‍යම මට්ටමේ ඉගෙනුම්ලාභීන්ට ද සුදුසුය. වය හෝ ෆීල්ඩ් ගැටලු නෑ.",
  },
  {
    q: "Classes miss වුණොත් කරන්නේ කුමක්ද?",
    a: "සෑම Zoom class එකක්ම record කර ඉගෙනුම්ලාභීන්ට share කෙරේ. ඔබට convenient time එකේ rewatch කළ හැකිය.",
  },
  {
    q: "Software license ගන්නට ඕනාද?",
    a: "නෑ! Blender 100% free & open-source software. Install කිරීම පාඨමාලාවේ class 1 දීම කෙරේ.",
  },
  {
    q: "Certificate ලැබෙනවාද?",
    a: "ඔව්. සියලු projects නියමිත කාලසීමාවෙන් submit කළ ඉගෙනුම්ලාභීන්ට CG Master Certificate ලැබේ.",
  },
];

export default function BlenderCoursePage() {
  const [playing, setPlaying] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  function handlePlay() {
    setPlaying(true);
  }

  function handleStop() {
    setPlaying(false);
    // reload iframe to stop YouTube video
    if (videoRef.current) {
      const src = videoRef.current.src;
      videoRef.current.src = "";
      videoRef.current.src = src;
    }
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ===== NAVBAR ===== */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="CG Master" height={45} className="h-[45px] w-auto object-contain" />
        </Link>
        <Link href="/#courses" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          ← පාඨමාලා වෙත
        </Link>
      </nav>

      {/* ===== VIDEO HERO ===== */}
      <section className="relative bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            දැන් සජීවීව
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Blender 3D{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              Master Course
            </span>
          </h1>
          <p className="text-white/60 mb-8 text-lg max-w-2xl mx-auto">
            3D Modelling, Animation, Rendering සහ Visual Effects ඉගෙනගන්න — සිංහල මාධ්‍යයෙන්, Zoom හරහා සජීවීව.
          </p>

          {/* Video Player */}
          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/60 bg-black aspect-video max-w-3xl">
            {!playing ? (
              /* Thumbnail + Play button overlay */
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
                onClick={handlePlay}
                style={{
                  backgroundImage: "url('https://img.youtube.com/vi/DBZNrmWjAZo/maxresdefault.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10">
                  Preview
                </div>

                {/* Play button with pulse ring */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-5">
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                    {/* Play circle */}
                    <button className="relative w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-2xl transition-all group-hover:scale-110 group-hover:border-white">
                      <span className="text-white text-3xl ml-1">▶</span>
                    </button>
                  </div>
                  <p className="text-white font-bold text-base drop-shadow-lg">Course Preview Video බලන්න</p>
                  <p className="text-white/60 text-xs mt-1 drop-shadow">Click to play</p>
                </div>

                {/* Bottom title bar */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 z-10">
                  <p className="text-white font-semibold text-sm">🎨 Blender 3D Master Course — CG Master</p>
                </div>
              </div>
            ) : (
              /* Actual YouTube iframe — replace VIDEO_ID with real YouTube ID */
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/DBZNrmWjAZo?autoplay=1&rel=0"
                title="Blender 3D Course Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Stop button */}
          {playing && (
            <button
              onClick={handleStop}
              className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all"
            >
              ⏹ PUSE
            </button>
          )}
        </div>
      </section>

      {/* ===== COURSE DETAILS ===== */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">පාඨමාලා විස්තර</h2>

          {/* Quick info cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "📅", label: "Start Date", value: "2026 ජූලි 05" },
              { icon: "⏱️", label: "Duration", value: "3 මාස" },
              { icon: "💰", label: "Course Fee", value: "රු. 8,500" },
              { icon: "🎓", label: "Level", value: "Beginner" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-xs text-gray-400 font-medium mb-1">{item.label}</p>
                <p className="text-gray-900 font-bold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Two-column layout: details + teacher */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {/* Left: Live class schedule */}
            <div className="md:col-span-2 space-y-6">

              {/* Schedule */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  🗓️ Live Class Schedule
                </h3>
                <div className="space-y-3">
                  {[
                    { day: "සෙනසුරාදා", time: "රාත්‍රී 8:00 – 10:00 PM", badge: "Zoom" },
                    { day: "ඉරිදා", time: "රාත්‍රී 7:00 – 9:00 PM", badge: "Zoom" },
                  ].map((s) => (
                    <div key={s.day} className="flex items-center justify-between bg-purple-50 rounded-xl px-4 py-3">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{s.day}</p>
                        <p className="text-gray-500 text-xs">{s.time}</p>
                      </div>
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {s.badge}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-3">* සෑම class එකක්ම record කෙරේ. miss කළොත් rewatch කළ හැකිය.</p>
              </div>

              {/* What you learn */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  📚 ඔබ ඉගෙනගන්නේ
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Blender Interface & Workflow",
                    "3D Modelling — Basic to Advanced",
                    "UV Unwrapping & Texturing",
                    "Rigging & Character Animation",
                    "Lighting & HDRI Rendering",
                    "Cycles & EEVEE Render Engines",
                    "Compositor & Post Processing",
                    "Final Project — Portfolio Ready",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fee details */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  💳 ගෙවීම් විස්තර
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Course Fee</span>
                    <span className="font-bold text-gray-900">රු. 8,500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Installment Option</span>
                    <span className="font-semibold text-purple-600">2 කොටස් ලෙස ගෙවිය හැකිය</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">ගෙවීම් ක්‍රම</span>
                    <span className="text-gray-700">බැංකු transfer / Online</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  * ලියාපදිංචි වූ පසු ගෙවීම් විස්තර WhatsApp හරහා ලැබේ.
                </p>
              </div>

            </div>

            {/* Right: Teacher card */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg shadow-purple-200">
                  👨‍🏫
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">CG Master Instructor</h3>
                <p className="text-purple-600 text-sm font-semibold mb-3">Lead 3D Artist & Educator</p>
                <div className="space-y-2 text-sm text-gray-500 text-left">
                  <p>✅ 8+ වසරක් Blender experience</p>
                  <p>✅ Professional VFX & Animation</p>
                  <p>✅ 500+ students trained</p>
                  <p>✅ සිංහල මාධ්‍යයෙන් ඉගැන්වීම</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-base mb-3">📋 අවශ්‍යතා</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>💻 Windows / Mac PC</li>
                  <li>🌐 Internet Connection</li>
                  <li>🎯 කිසිදු පූර්ව දැනුමක් අනිවාර්ය නෑ</li>
                  <li>⏰ සතියකට 4-5 ගෙවල් කාලය</li>
                </ul>
              </div>
            </div>

          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">නිතර අසන ප්‍රශ්න</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-gray-900 text-sm pr-4">❓ {faq.q}</span>
                    <span className="text-purple-500 text-lg flex-shrink-0 transition-transform duration-200"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                      +
                    </span>
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
            <p className="text-white/70 mb-6 text-sm">
              Limited seats — ලඟදීම ආරම්භ වේ. දැනටම ලියාපදිංචි වන්න.
            </p>
            <Link
              href="/courses/blender/enroll"
              className="inline-flex items-center gap-3 bg-white text-purple-700 hover:bg-purple-50 font-extrabold text-lg px-10 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
            >
              <span>🎓</span>
              JOIN With Blender Course
              <span>→</span>
            </Link>
            <p className="text-white/50 text-xs mt-4">
              ලියාපදිංචි වීමෙන් පසු WhatsApp හරහා confirm කෙරේ
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
