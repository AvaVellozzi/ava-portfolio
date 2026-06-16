import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-8 py-5">

        <div className="flex gap-6">
          <Link href="/" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-700 font-medium hover:from-blue-200 hover:to-indigo-200 hover:text-indigo-700 transition duration-300 shadow-sm hover:shadow-md">Home</Link>
          <Link href="/about" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-700 font-medium hover:from-blue-200 hover:to-indigo-200 hover:text-indigo-700 transition duration-300 shadow-sm hover:shadow-md">About</Link>
          <Link href="/resume" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-700 font-medium hover:from-blue-200 hover:to-indigo-200 hover:text-indigo-700 transition duration-300 shadow-sm hover:shadow-md">Resume</Link>
        </div>

      </div>
    </nav>
  );
}