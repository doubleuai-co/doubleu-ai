import Image from "next/image";
import Link from "next/link";

export function LogoNav({
  width = 100,
  height = 80,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/doubleU.svg"
        alt="logo"
        placeholder="blur"
        blurDataURL="/doubleU.svg"
        width={width}
        height={height}
      />
    </Link>
  );
}
