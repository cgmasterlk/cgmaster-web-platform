import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import Image from "next/image";
import Link from "next/link";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect("/login");
  if (session.user.role === "ADMIN") redirect("/admin");
  if (session.user.role === "INSTRUCTOR") redirect("/instructor");

  const student = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      enrollments: {
        include: { course: true }
      }
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/">
          <Image src="/logo.png" alt="CG Master" width={130} height={40} className="object-contain" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">👋 ආයුබෝවන්, {session.user.name}!</span>
          <a href="/api/auth/signout" className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
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
            <p className="text-2xl font-bold text-gray-900">{student?.enrollments.length || 0}</p>
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
            <p className="text-gray-500 text-sm">සම්පූර්ණ කළ</p>
          </div>
        </div>

        {/* My Courses */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">මගේ පාඨමාලා</h2>
          {!student?.enrollments.length ? (
            <div className="text-center py-12 text-gray-400">
              <div className="text-5xl mb-3">📭</div>
              <p>ඔබ තවම කිසිම පාඨමාලාවකට ලියාපදිංචි වී නැත.</p>
              <Link href="/#courses" className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors">
                පාඨමාලා බලන්න
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {student.enrollments.map(enrollment => (
                <div key={enrollment.id} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  {enrollment.course.thumbnail ? (
                    <img src={enrollment.course.thumbnail} alt={enrollment.course.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                  ) : (
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-4xl">🎨</span>
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 mb-1">{enrollment.course.title}</h3>
                  <p className="text-gray-500 text-xs mb-3">
                    ලියාපදිංචි: {new Date(enrollment.enrolledAt).toLocaleDateString("si-LK")}
                  </p>
                  <Link href={`/courses/${enrollment.course.id}`} className="block text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                    පාඨමාලාව බලන්න
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">මගේ ගිණුම</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400 w-24">නම:</span>
              <span className="text-gray-900 font-medium">{student?.name}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400 w-24">ඊමේල්:</span>
              <span className="text-gray-900 font-medium">{student?.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400 w-24">දුරකථන:</span>
              <span className="text-gray-900 font-medium">{student?.phone || "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}