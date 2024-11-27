import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function SocMed() {
  return (
    <section className="flex justify-start">
      <div className="flex space-x-6 w-full pr-32 px-8 xl:px-16 py-4 xl:pt-0 xl:w-auto text-text-secondary ">
        <Link href="https://github.com/TohDeKai" target="_blank">
          <LuGithub className="h-6 w-6 sm:h-9 sm:w-9 xl:hover:text-primary xl:hover:scale-125 transition-transform duration-300" />
        </Link>
        <Link href="https://www.linkedin.com/in/tohdekai/" target="_blank">
          <LuLinkedin className="h-6 w-6 sm:h-9 sm:w-9 xl:hover:text-primary xl:hover:scale-125 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
