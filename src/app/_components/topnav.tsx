"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex w-screen p-4 font-semibold justify-between z-10">
      <Link href="/">XTCDEV</Link>
      <div className="flex gap-4">
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
