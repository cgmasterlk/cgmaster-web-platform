"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
  enrollments: { course: { title: string } }[];
};

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", password: "", phone: "" });
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    setLoading(true);
    const res = await fetch("/api/admin/students");
    const data = await res.json();
    setStudents(data);
    setLoading(false);
  }

  async function handleAddStudent(e: React.FormEvent) {
    e.preventDefault();
    setAdding(true);
    setError("");
    const res = await fetch("/api/admin/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    });
    if (res.ok) {
      setShowAddModal(false);
      setNewStudent({ name: "", email: "", password: "", phone: "" });
      fetchStudents();
    } else {
      const data = await res.json();
      setError(data.error || "Error occurred");
    }
    setAdding(false);
  }

  async function handleRemoveStudent(id: string, name: string) {
    if (!confirm(`"${name}" ඉවත් කරන්නද?`)) return;
    await fetch(`/api/admin/students/${id}`, { method: "DELETE" });
    fetchStudents();
  }

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/admin">
          <Image src="/logo.png" alt="CG Master" width={120} height={40} className="object-contain" />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">← Dashboard</Link>
          <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">Admin</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Students</h1>
            <p className="text-gray-500 text-sm mt-1">සිසුන් manage කරන්න</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            + Add Student
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6">
          <input
            type="text"
            placeholder="🔍 සිසුන් සොයන්න (නම හෝ ඊමේල්)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all text-gray-900 placeholder:text-gray-400"
            style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
            onFocus={e => { e.currentTarget.style.border = "1.5px solid #7c3aed"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.12)"; }}
            onBlur={e => { e.currentTarget.style.border = "1.5px solid #e5e7eb"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">සිසුන් ලැයිස්තුව</h2>
            <span className="text-sm text-gray-500">{filtered.length} සිසුන්</span>
          </div>

          {loading ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-4xl mb-3">⏳</div>
              <p>Loading...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-4xl mb-3">👥</div>
              <p>සිසුන් නැත</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">නම</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">ඊමේල්</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">දුරකථන</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Courses</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">දිනය</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map(student => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                            {student.name[0].toUpperCase()}
                          </div>
                          <span className="font-medium text-gray-900 text-sm">{student.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{student.phone || "-"}</td>
                      <td className="px-6 py-4">
                        <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                          {student.enrollments.length} courses
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(student.createdAt).toLocaleDateString("si-LK")}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemoveStudent(student.id, student.name)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{ background: "rgba(15,12,41,0.85)", backdropFilter: "blur(6px)" }}>
          <div className="relative w-full max-w-md rounded-2xl p-7 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)",
              border: "1px solid rgba(167,139,250,0.25)",
            }}>

            {/* Accent top bar */}
            <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #a78bfa, #818cf8, transparent)" }} />

            <h2 className="text-lg font-bold text-white mb-1">🎓 නව සිසුවෙකු එකතු කරන්න</h2>
            <p className="text-white/40 text-xs mb-5">Fields සම්පූර්ණ කර Add කරන්න</p>

            {error && (
              <div className="bg-red-500/20 border border-red-400/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-4">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleAddStudent} className="space-y-4">
              {[
                { label: "👤 නම", key: "name", type: "text", placeholder: "සිසුවාගේ සම්පූර්ණ නම", required: true },
                { label: "📧 ඊමේල්", key: "email", type: "email", placeholder: "email@example.com", required: true },
                { label: "📱 දුරකථන", key: "phone", type: "tel", placeholder: "07XXXXXXXX", required: false },
                { label: "🔒 මුරපදය", key: "password", type: "password", placeholder: "අවම අකුරු 8ක්", required: true },
              ].map(field => (
                <div key={field.key}>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wider">{field.label}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    value={newStudent[field.key as keyof typeof newStudent]}
                    onChange={e => setNewStudent({ ...newStudent, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1.5px solid rgba(167,139,250,0.3)",
                      color: "#ffffff",
                      caretColor: "#a78bfa",
                    }}
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-white/25
                      focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
                  />
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <button type="button"
                  onClick={() => { setShowAddModal(false); setError(""); }}
                  className="flex-1 font-semibold py-2.5 rounded-xl text-sm transition-all text-white/70 hover:text-white"
                  style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
                  Cancel
                </button>
                <button type="submit" disabled={adding}
                  className="flex-1 font-bold py-2.5 rounded-xl text-sm text-white transition-all hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    boxShadow: "0 6px 24px rgba(124,58,237,0.4)",
                  }}>
                  {adding ? "⏳ Adding..." : "✅ Add Student"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}