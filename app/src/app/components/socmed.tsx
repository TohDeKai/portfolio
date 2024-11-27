import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function SocMed() {
  return (
    <section className="flex justify-start">
      <div className="flex space-x-6 w-full pr-32 px-8 xl:px-16 py-4 xl:pt-0 xl:w-auto text-slate-500 ">
        {" "}
        <Link href="https://github.com/TohDeKai" target="_blank">
          <LuGithub
            size={36}
            className="hover:text-blue-500 transition-all duration-300"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/tohdekai/" target="_blank">
          <LuLinkedin
            size={36}
            className="hover:text-blue-500 transition-all duration-300"
          />
        </Link>
      </div>
    </section>
  );
}
