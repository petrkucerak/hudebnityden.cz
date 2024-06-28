import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-b from-[#161616] opacity-80 absolute pb-8 pt-3">
      <Link href="/" className="flex flex-row justify-center items-center">
        <img src="/assets/logo/logo_white.svg" className="w-20 md:w-28" />
        <h1 className="text-xl md:text-4xl font-bold">
          Hudební týden na&nbsp;Vesmíru
        </h1>
      </Link>
    </div>
  );
}
