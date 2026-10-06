import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="HireMatrix home" className={`inline-flex ${className}`}>
      <Image
        src="/logo.png"
        alt="HireMatrix"
        width={420}
        height={250}
        preload
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
