import Link from "next/link";

export default function BlenderEnrollPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 flex flex-col items-center justify-center px-6 py-16">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-purple-900/40 max-w-lg w-full p-8 text-center">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg shadow-purple-300">
          🎓
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Blender 3D Course</h1>
        <p className="text-purple-600 font-semibold mb-1">ලියාපදිංචිය</p>
        <p className="text-gray-400 text-sm mb-8">
          ලියාපදිංචි වීමට WhatsApp හරහා අපව සම්බන්ධ කරගන්න.
          ඔබේ විස්තර පහත message format එකෙන් send කරන්න.
        </p>

        {/* Message template */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left mb-8">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">WhatsApp Message Template</p>
          <div className="space-y-1 text-sm text-gray-700 font-mono">
            <p>📌 <strong>Course:</strong> Blender 3D Master</p>
            <p>👤 <strong>Name:</strong> ඔබේ නම</p>
            <p>📧 <strong>Email:</strong> ඔබේ email</p>
            <p>📍 <strong>City:</strong> ඔබේ නගරය</p>
            <p>🪪 <strong>NIC:</strong> ඔබේ NIC අංකය</p>
            <p>🎂 <strong>Birthdate:</strong> YYYY/MM/DD</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/94719209455?text=📌%20Course%3A%20Blender%203D%20Master%0A👤%20Name%3A%20%0A📧%20Email%3A%20%0A📍%20City%3A%20%0A🪪%20NIC%3A%20%0A🎂%20Birthdate%3A%20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-green-400/30 hover:scale-105 mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="#ffffff">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.023 7.77L0 32l8.468-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.851l-.485-.289-5.025 1.187 1.214-4.906-.316-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.861c-.398-.199-2.357-1.162-2.722-1.294-.365-.133-.631-.199-.897.199-.266.398-1.031 1.294-1.264 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.973-1.183-1.054-1.982-2.356-2.214-2.754-.232-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.663.133-.266.066-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.686l-.764-.013c-.266 0-.697.1-.1062.498-.365.398-1.396 1.362-1.396 3.323s1.429 3.854 1.628 4.12c.199.265 2.813 4.296 6.816 6.025.953.411 1.696.657 2.276.841.956.305 1.826.262 2.514.159.767-.114 2.357-.963 2.689-1.894.332-.93.332-1.728.232-1.894-.099-.166-.365-.265-.763-.464z" />
          </svg>
          WhatsApp හරහා Join වන්න
        </a>

        <Link
          href="/courses/blender"
          className="block text-sm text-gray-400 hover:text-purple-600 transition-colors"
        >
          ← Course page වෙත ආපසු
        </Link>
      </div>

    </main>
  );
}
