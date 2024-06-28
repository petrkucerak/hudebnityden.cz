import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-between">
      <div className="w-[90vw] max-w-[1000px] flex flex-row items-stretch justify-between">
        <ul className="flex flex-col items-start">
          <Link
            href="https://youtube.com/playlist?list=PL1UM1smQzl-6XJaLq9OYh36LoWKOU1XAE"
            target="_blank"
            rel="external"
            className=""
          >
            <li>Záznam z HT 2023</li>
          </Link>
          <Link
            href="https://youtube.com/playlist?list=PL1UM1smQzl-7YNPqy8znl9s3vmisHRR3h"
            target="_blank"
            rel="external"
            className=""
          >
            <li>Záznam z HT 2022</li>
          </Link>
          <Link
            href="https://youtube.com/playlist?list=PL1UM1smQzl-7Cdq9MxYU6VYZC_mzk9Wi4"
            target="_blank"
            rel="external"
            className=""
          >
            <li>Záznam z HT 2021</li>
          </Link>
          <Link
            href="https://youtube.com/playlist?list=PL1UM1smQzl-5VP4DJyktpfslvvq7KvHGR"
            target="_blank"
            rel="external"
            className=""
          >
            <li>Záznam z HT 2020</li>
          </Link>
        </ul>
        <ul className="flex flex-col items-end">
          <Link
            href="https://www.instagram.com/dczm_vesmir/"
            target="_blank"
            rel="external"
          >
            <li className="flex items-center my-1">
              dczm_vesmir
              <IconBrandInstagram stroke={1.5} size={28} className="ml-1" />
            </li>
          </Link>
          <Link
            href="https://www.facebook.com/HudebniTyden"
            target="_blank"
            rel="external"
          >
            <li className="flex items-center my-1">
              HudebniTyden
              <IconBrandFacebook stroke={1.5} size={28} className="ml-1" />
            </li>
          </Link>
          <Link
            href="https://www.youtube.com/@dczmvesmir6084"
            target="_blank"
            rel="external"
          >
            <li className="flex items-center my-1">
              dczmvesmir6084
              <IconBrandYoutube stroke={1.5} size={28} className="ml-1" />
            </li>
          </Link>
          <Link
            href="mailto:info@hudebnityden.cz"
            target="_blank"
            rel="external"
          >
            <li className="flex items-center my-1">
              info@hudebnityden.cz
              <IconMail stroke={1.5} size={28} className="ml-1" />
            </li>
          </Link>
        </ul>
      </div>
      <p className="mb-8 mt-4">&copy;2024 Hudební týden</p>
    </footer>
  );
}
