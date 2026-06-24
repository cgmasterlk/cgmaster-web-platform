import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect("/login");
  if (session.user.role === "ADMIN") redirect("/admin");
  if (session.user.role === "INSTRUCTOR") redirect("/instructor");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <Image src="/logo.png" alt="CG Master" width={130} height={40} className="object-contain" />
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">👋 ආයුබෝවන්, {session.user.name}!</span>
          <a href="/api/auth/signout" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Sign Out
          </a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-2xl font-bold mb-2">ආයුබෝවන්, {session.user.name}! 👋</h1>
          <p className="text-purple-200">ඔබේ ඉගෙනීමේ ගමන දිගටම කරගෙන යන්න.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">ලියාපදිංචි පාඨමාලා</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">📝</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">පැවරුම්</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">සම්පූර්ණ කළ පාඨමාලා</p>
          </div>
        </div>

        {/* My Courses */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">මගේ පාඨමාලා</h2>
          <div className="text-center py-12 text-gray-400">
            <div className="text-5xl mb-3">📭</div>
            <p>ඔබ තවම කිසිම පාඨමාලාවකට ලියාපදිංචි වී නැත.</p>
            <a href="/#courses" className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors">
              පාඨමාලා බලන්න
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
