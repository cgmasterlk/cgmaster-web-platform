import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function AdminPage() {
  const session = await auth();

  if (!session) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <Image src="/logo.png" alt="CG Master" width={130} height={31} className="object-contain" />
        <div className="flex items-center gap-4">
          <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">Admin</span>
          <span className="text-sm text-gray-600">{session.user.name}</span>
          <a href="/api/auth/signout" className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Sign Out
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">CG Master platform manage කරන්න</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">👥</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">සිසුන්</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">පාඨමාලා</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">👨‍🏫</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">Instructors</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-2">📝</div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">Enrollments</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/admin/students" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="bg-purple-100 rounded-xl p-3 text-2xl">👥</div>
            <div>
              <h3 className="font-semibold text-gray-900">Students</h3>
              <p className="text-gray-500 text-sm">සිසුන් manage කරන්න</p>
            </div>
          </a>
          <a href="/admin/courses" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="bg-blue-100 rounded-xl p-3 text-2xl">📚</div>
            <div>
              <h3 className="font-semibold text-gray-900">Courses</h3>
              <p className="text-gray-500 text-sm">පාඨමාලා manage කරන්න</p>
            </div>
          </a>
          <a href="/admin/instructors" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="bg-green-100 rounded-xl p-3 text-2xl">👨‍🏫</div>
            <div>
              <h3 className="font-semibold text-gray-900">Instructors</h3>
              <p className="text-gray-500 text-sm">Instructors manage කරන්න</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}