import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="hidden md:flex w-screen p-4 font-semibold justify-between">
      <Link href="/">XTCDEV</Link>
      <div className="flex gap-4">
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
