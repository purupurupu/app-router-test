import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/about/us">About Us</Link>
      <Link href="/about/someone">About Someone Else</Link>
    </div>
  );
}
