import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-5xl mx-auto flex justify-between p-5">

        <Link
          href="/"
          className="font-bold text-xl"
        >
          Ava Vellozzi
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
        </div>

      </div>
    </nav>
  );
}