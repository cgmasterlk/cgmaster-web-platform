import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="CG Master Logo"
          width={160}
          height={50}
          className="object-contain"
          priority
        />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <Link href="/courses" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          Courses
        </Link>
        <Link href="/instructors" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          Instructors
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          Contact
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <Link href="/login" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors">
          Login
        </Link>
        <Link href="/register" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          Get Started
        </Link>
      </div>
    </nav>
  );
}