"use client";
import Link from "next/link";

export default function Card({
  title,
  image,
  description,
  className,
  link2form,
}) {
  return (
    <div
      className={`${className} w-[90vw] max-w-[600px] rounded-xl hover:drop-shadow-xl my-8`}
    >
      <img src={image} className="rounded-xl" />
      <h2 className="mt-4 text-2xl font-bold">{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <div className="mb-10 mt-6">
        {link2form !== undefined ? (
          <Link
            href={link2form}
            target="_blank"
            className="rounded border border-white p-4 hover:bg-[#333333] transition"
          >
            přihlásit se
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
