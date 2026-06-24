import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ===== NAVBAR ===== */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <a href="/">
          <Image src="/logo.png" alt="CG Master" width={140} height={45} className="object-contain" priority />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">Courses</a>
          <a href="#faq" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">FAQ</a>
          <a href="#about" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">About us</a>
          <a href="#contact" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">Contact us</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/login" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">Login</a>
          <a href="/register" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all shadow-md shadow-purple-500/30">Sign Up</a>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 overflow-hidden flex items-center">

        {/* Background glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 px-6 py-24 z-10">

          {/* LEFT: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <span className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                🇱🇰 ශ්‍රී ලංකාවේ විශිෂ්ටතම E-Learning Platform එක
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Industry Experts සමඟ{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                3D Design
              </span>{" "}
              සහ Creative Skills ඉගෙන ගන්න
            </h1>

            <p className="text-white/60 text-lg mb-8 max-w-xl leading-relaxed"> CG Master සමඟ ඔබේ නිර්මාණශීලී වෘත්තිය වෙනස් කරගන්න.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* Primary: white button on dark bg */}
              <a href="#courses" className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-white/10 hover:shadow-white/20 hover:scale-105 flex items-center gap-2">
                <span>පාඨමාලා බලන්න</span>
                <span>→</span>
              </a>
              {/* Secondary: glass border button */}
              <a href="#about" className="border-2 border-white/30 hover:border-white/70 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all backdrop-blur-sm hover:scale-105">
                තව දැනගන්න
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ===== COURSES SECTION ===== */}
      <section id="courses" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">අපගේ පාඨමාලා</h2>
            <p className="text-gray-500">සජීවී Zoom පන්ති හරහා විශේෂඥ ගුරුවරුන්ගෙන් ඉගෙනගන්න</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Blender */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 h-40 flex items-center justify-center">
                <span className="text-6xl">🎨</span>
              </div>
              <div className="p-5">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">දැන් සජීවීව</span>
                <h3 className="text-gray-900 font-bold text-lg mt-2 mb-1">Blender 3D</h3>
                <p className="text-gray-500 text-sm mb-4">3D මොඩලින්, ඇනිමේෂන් සහ රෙන්ඩරින් ඉගෙනගන්න</p>
                <a href="/courses/blender" className="block text-center bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-md shadow-purple-500/30 hover:shadow-lg hover:shadow-purple-500/40">
                  පාඨමාලාව බලන්න
                </a>
              </div>
            </div>

            {/* AI */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-70">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
              <div className="p-5">
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full">ඉක්මනින් එනවා</span>
                <h3 className="text-gray-900 font-bold text-lg mt-2 mb-1">AI & Machine Learning</h3>
                <p className="text-gray-500 text-sm mb-4">කෘත්‍රිම බුද්ධිමත්කාමයේ미래 ගවේෂණය කරන්න</p>
                <button disabled className="w-full bg-gray-200 text-gray-400 text-sm font-semibold py-2 rounded-lg cursor-not-allowed">
                  ඉක්මනින් එනවා
                </button>
              </div>
            </div>

            {/* After Effects */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-70">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-40 flex items-center justify-center">
                <span className="text-6xl">🎬</span>
              </div>
              <div className="p-5">
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full">ඉක්මනින් එනවා</span>
                <h3 className="text-gray-900 font-bold text-lg mt-2 mb-1">After Effects</h3>
                <p className="text-gray-500 text-sm mb-4">මෝෂන් ග්‍රැෆික්ස් සහ දෘශ්‍ය විශේෂ effects ඉගෙනගන්න</p>
                <button disabled className="w-full bg-gray-200 text-gray-400 text-sm font-semibold py-2 rounded-lg cursor-not-allowed">
                  ඉක්මනින් එනවා
                </button>
              </div>
            </div>

            {/* Photoshop */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-70">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-40 flex items-center justify-center">
                <span className="text-6xl">🖼️</span>
              </div>
              <div className="p-5">
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full">ඉක්මනින් එනවා</span>
                <h3 className="text-gray-900 font-bold text-lg mt-2 mb-1">Adobe Photoshop</h3>
                <p className="text-gray-500 text-sm mb-4">වෘත්තීය ඡායාරූප සංස්කරණය සහ නිර්මාණය</p>
                <button disabled className="w-full bg-gray-200 text-gray-400 text-sm font-semibold py-2 rounded-lg cursor-not-allowed">
                  ඉක්මනින් එනවා
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">නිතර අසන ප්‍රශ්න</h2>
            <p className="text-gray-500">ඔබට ඇති ප්‍රශ්නවලට පිළිතුරු</p>
          </div>
          <div className="space-y-4">

            {[
              {
                q: "රජයේ ලියාපදිංචි ආයතනයක් ද?",
                a: "ඔව්, අපගේ ආයතනය අන්තර්ජාලය හරහා අධ්‍යාපනික පාඨමාලා සිදු කරගෙන යනු ලබන ආයතනයක් ලෙස රජයේ ලියාපදිංචි වී ඇත."
              },
              {
                q: "පාඨමාලාව අවසානයේ සහතිකයක් ලැබෙනවාද?",
                a: "ඔව්, නමුත් පාඨමාලාව මිලදී ගත් පමණින් සහතිකය ලබාගැනීමට නොහැක. සහතිකය ලබාගැනීමට පාඨමාලාවේදී ඔබට ලැබෙන ව්‍යාපෘති නියමිත කාල සීමාව තුළදී අවසන් කළ යුතුය."
              },
              {
                q: "පාඨමාලාවකට ඇතුළත් වන්නේ කෙසේද?",
                a: "ඔබගේ නම, ලිපිනය, ඊමේල් ලිපිනය සහ ඇතුළත් වීමට කැමති පාඨමාලාවේ නම අපගේ WhatsApp අංකයට යොමු කරන්න. මුදල් ගෙවන ලෙස පණිවිඩයක් ලැබුණු පසු බැංකු ගිණුමට මුදල් බැර කරන්න."
              },
              {
                q: "සුදුසුකම් මොනවාද?",
                a: "පරිගණකයක්, මූලික පරිගණක දැනුමක් සහ අන්තර්ජාල සම්බන්ධතාවයක් ප්‍රමාණවත්. සරල ඉංග්‍රීසි දැනුමක් තිබේනම් ඉගෙනීම තවත් පහසු වේ."
              },
              {
                q: "ගැටලු අපට යොමු කරන්නේ කෙසේද?",
                a: "අපගේ WhatsApp අංකයට ඔබගේ ගැටලුව හෝ වැඩිදුර විස්තර ලබාගත හැකිය."
              }
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">❓ {item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-violet-100 to-indigo-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 rounded-2xl w-72 h-72 flex items-center justify-center shadow-xl shadow-purple-500/40">
              <span className="text-8xl">🎓</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">අප ගැන</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              CG Master යනු ශ්‍රී ලංකාවේ ප්‍රමුඛ CG ඉගෙනුම් වේදිකාවකි. අපි Zoom හරහා සජීවී පන්ති පවත්වමින් සිසුන්ට ලෝකයේ ඕනෑම තැනක සිට ඉගෙනීමට අවස්ථාව ලබා දෙනවා.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              අපගේ ඉලක්කය වන්නේ ශ්‍රී ලාංකික සිසුන්ට ජාත්‍යන්තර මට්ටමේ CG කුසලතා ලබා දීමයි. සියලු පාඨමාලා සිංහල මාධ්‍යයෙන් ඉදිරිපත් කෙරේ.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-5 py-3 shadow-sm text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">500+</p>
                <p className="text-gray-500 text-xs">සිසුන්</p>
              </div>
              <div className="bg-white rounded-lg px-5 py-3 shadow-sm text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">4+</p>
                <p className="text-gray-500 text-xs">පාඨමාලා</p>
              </div>
              <div className="bg-white rounded-lg px-5 py-3 shadow-sm text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">100%</p>
                <p className="text-gray-500 text-xs">සිංහල මාධ්‍ය</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">අප හා සම්බන්ධ වන්න</h2>
          <p className="text-gray-500 mb-10">ඔබගේ ගැටලු හෝ විමසීම් සඳහා අප හා සම්බන්ධ වන්න</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-gray-500 text-sm">අපගේ WhatsApp අංකයට පණිවිඩ යවන්න</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-500 text-sm">info@cgmaster.lk</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-semibold text-gray-900 mb-1">වෙබ් අඩවිය</h3>
              <p className="text-gray-500 text-sm">www.cgmaster.lk</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image src="/logo.png" alt="CG Master" width={130} height={40} className="object-contain mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">
                ශ්‍රී ලංකාවේ ප්‍රමුඛ CG ඉගෙනුම් වේදිකාව. සිංහල මාධ්‍යයෙන් ජාත්‍යන්තර මට්ටමේ කුසලතා.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ඉක්මන් සබැඳි</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#courses" className="hover:text-purple-400 transition-colors">Courses</a></li>
                <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About us</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">සම්බන්ධ වන්න</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 info@cgmaster.lk</li>
                <li>🌐 www.cgmaster.lk</li>
                <li>📱 WhatsApp</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            © 2026 CG Master. සියලු හිමිකම් ඇවිරිණි.
          </div>
        </div>
      </footer>

    </main>
  );
}