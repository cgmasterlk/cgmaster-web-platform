"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("ඊමේල් හෝ මුරපදය වැරදියි!");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #4f46e5, transparent)" }} />

      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, #a78bfa, #818cf8, transparent)" }} />

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="CG Master" width={150} height={50} className="object-contain brightness-0 invert" />
        </div>

        <h1 className="text-2xl font-bold text-white text-center mb-1">ඔබේ ගිණුමට පිවිසෙන්න</h1>
        <p className="text-white/50 text-center text-sm mb-8">ඔබේ ඊමේල් සහ මුරපදය ඇතුළත් කරන්න</p>

        {error && (
          <div className="bg-red-500/20 border border-red-400/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-6">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">ඊමේල්</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ඔබේ ඊමේල් ලිපිනය"
              required
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(167,139,250,0.35)",
                color: "#ffffff",
                caretColor: "#a78bfa",
              }}
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-white/30
                focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">මුරපදය</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ඔබේ මුරපදය"
              required
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(167,139,250,0.35)",
                color: "#ffffff",
                caretColor: "#a78bfa",
              }}
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-white/30
                focus:border-violet-400 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.2)]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full font-bold py-3 rounded-xl transition-all text-white disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
            }}
          >
            {loading ? "⏳ පිවිසෙමින්..." : "🔑 Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-white/40 mt-6">
          ගිණුමක් නැද්ද?{" "}
          <a href="/register" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
