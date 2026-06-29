"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  status: string;
  createdAt: string;
  _count: { enrollments: number };
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [form, setForm] = useState({ title: "", description: "", price: "", status: "coming_soon", thumbnail: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { fetchCourses(); }, []);

  async function fetchCourses() {
    setLoading(true);
    const res = await fetch("/api/admin/courses");
    const data = await res.json();
    setCourses(data);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setShowAddModal(false);
      setForm({ title: "", description: "", price: "", status: "coming_soon", thumbnail: "" });
      fetchCourses();
    } else {
      const data = await res.json();
      setError(data.error || "Error occurred");
    }
    setSaving(false);
  }

  async function handleEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedCourse) return;
    setSaving(true);
    setError("");
    const res = await fetch(`/api/admin/courses/${selectedCourse.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setShowEditModal(false);
      setSelectedCourse(null);
      fetchCourses();
    } else {
      const data = await res.json();
      setError(data.error || "Error occurred");
    }
    setSaving(false);
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`"${title}" delete කරන්නද?`)) return;
    await fetch(`/api/admin/courses/${id}`, { method: "DELETE" });
    fetchCourses();
  }

  function openEdit(course: Course) {
    setSelectedCourse(course);
    setForm({
      title: course.title,
      description: course.description || "",
      price: course.price.toString(),
      status: course.status,
      thumbnail: course.thumbnail || "",
    });
    setShowEditModal(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/admin">
          <Image src="/logo.png" alt="CG Master" width={120} height={29} className="object-contain" />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">← Dashboard</Link>
          <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">Admin</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
            <p className="text-gray-500 text-sm mt-1">පාඨමාලා manage කරන්න</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            + Add Course
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">⏳</div>
            <p>Loading...</p>
          </div>
        ) : courses.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center text-gray-400">
            <div className="text-4xl mb-3">📚</div>
            <p>Courses නැත</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <span className="text-5xl">🎨</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${course.status === "active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                      {course.status === "active" ? "සජීවීව" : "ඉක්මනින් එනවා"}
                    </span>
                    <span className="text-purple-600 font-bold text-sm">
                      {course.price > 0 ? `Rs. ${course.price}` : "Free"}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{course.description || "විස්තරයක් නැත"}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{course._count.enrollments} students</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEdit(course)}
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course.id, course.title)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(15,12,41,0.85)", backdropFilter: "blur(6px)" }}>
          <div className="relative w-full max-w-md rounded-2xl p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              background: "linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)",
              border: "1px solid rgba(167,139,250,0.25)",
            }}>

            {/* Accent top bar */}
            <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #a78bfa, #818cf8, transparent)" }} />

            <h2 className="text-lg font-bold text-white mb-1">📚 නව පාඨමාලාවක් එකතු කරන්න</h2>
            <p className="text-white/40 text-xs mb-5">Fields සම්පූර්ණ කර Add කරන්න</p>

            {error && (
              <div className="bg-red-500/20 border border-red-400/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-4">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">👤 පාඨමාලාවේ නම</label>
                <input type="text" required value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  placeholder="Blender 3D Masterclass" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">📝 විස්තරය</label>
                <textarea value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  rows={3} placeholder="පාඨමාලාව ගැන විස්තරයක්..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">💰 මිල (Rs.)</label>
                <input type="number" value={form.price}
                  onChange={e => setForm({ ...form, price: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  placeholder="5000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">🖼️ Thumbnail URL</label>
                <input type="text" value={form.thumbnail}
                  onChange={e => setForm({ ...form, thumbnail: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">⚙️ Status</label>
                <select value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]">
                  <option value="coming_soon" className="bg-[#1a1040] text-white">ඉක්මනින් එනවා</option>
                  <option value="active" className="bg-[#1a1040] text-white">සජීවීව</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => { setShowAddModal(false); setError(""); }}
                  className="flex-1 font-semibold py-2.5 rounded-xl text-sm transition-all text-white/70 hover:text-white"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="flex-1 font-bold py-2.5 rounded-xl text-sm text-white transition-all hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    boxShadow: "0 6px 24px rgba(124,58,237,0.4)",
                  }}>
                  {saving ? "⏳ Adding..." : "✅ Add Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(15,12,41,0.85)", backdropFilter: "blur(6px)" }}>
          <div className="relative w-full max-w-md rounded-2xl p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{
              background: "linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)",
              border: "1px solid rgba(167,139,250,0.25)",
            }}>

            {/* Accent top bar */}
            <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #a78bfa, #818cf8, transparent)" }} />

            <h2 className="text-lg font-bold text-white mb-1">✏️ පාඨමාලාව Edit කරන්න</h2>
            <p className="text-white/40 text-xs mb-5">Fields update කර Save කරන්න</p>

            {error && (
              <div className="bg-red-500/20 border border-red-400/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-4">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">👤 පාඨමාලාවේ නම</label>
                <input type="text" required value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  placeholder="Blender 3D Masterclass" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">📝 විස්තරය</label>
                <textarea value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  rows={3} placeholder="පාඨමාලාව ගැන විස්තරයක්..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">💰 මිල (Rs.)</label>
                <input type="number" value={form.price}
                  onChange={e => setForm({ ...form, price: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  placeholder="5000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">🖼️ Thumbnail URL</label>
                <input type="text" value={form.thumbnail}
                  onChange={e => setForm({ ...form, thumbnail: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                    caretColor: "#a78bfa",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                    focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  placeholder="https://..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">⚙️ Status</label>
                <select value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1.5px solid rgba(167,139,250,0.3)",
                    color: "#ffffff",
                  }}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]">
                  <option value="coming_soon" className="bg-[#1a1040] text-white">ඉක්මනින් එනවා</option>
                  <option value="active" className="bg-[#1a1040] text-white">සජීවීව</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => { setShowEditModal(false); setError(""); }}
                  className="flex-1 font-semibold py-2.5 rounded-xl text-sm transition-all text-white/70 hover:text-white"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="flex-1 font-bold py-2.5 rounded-xl text-sm text-white transition-all hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    boxShadow: "0 6px 24px rgba(124,58,237,0.4)",
                  }}>
                  {saving ? "⏳ Saving..." : "💾 Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}