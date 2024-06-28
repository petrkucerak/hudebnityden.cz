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
      className={`${className} w-[90vw] max-w-[500px] rounded-xl hover:drop-shadow-2xl mb-8 mx-4`}
    >
      {image !== undefined ? (
        <img src={image} className="rounded-xl" />
      ) : (
        <iframe
          width="100%"
          height="280"
          src="https://www.youtube.com/embed/videoseries?si=pqzjVq5cqwXCcd24&amp;list=PL1UM1smQzl-6XJaLq9OYh36LoWKOU1XAE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
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
