import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 flex flex-col items-center text-center">

        {/* Badge */}
        <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          🎨 Sri Lanka's #1 CG Learning Platform
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6 max-w-3xl">
          Master <span className="text-purple-600">3D & Creative</span> Skills with Expert Instructors
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg max-w-xl mb-10">
          Live classes via Zoom. Real projects. Industry-ready skills. Join CG Master and transform your creative career.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link href="/courses" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base">
            Explore Courses
          </Link>
          <Link href="/about" className="border border-gray-300 hover:border-purple-600 hover:text-purple-600 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors text-base">
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-16 border-t border-gray-100 pt-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">500+</p>
            <p className="text-gray-500 text-sm mt-1">Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">4</p>
            <p className="text-gray-500 text-sm mt-1">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">Live</p>
            <p className="text-gray-500 text-sm mt-1">Classes via Zoom</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">100%</p>
            <p className="text-gray-500 text-sm mt-1">Practical</p>
          </div>
        </div>

      </section>
    </main>
  );
}