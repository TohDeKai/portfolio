import Image from "next/image";
import projectsData from "../../../../app/public/data/projects.json";

interface ProjectData {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  link: string;
}

export default function Projects() {
  return (
    <section id="projects" className="w-full px-8 flex flex-col xl:px-0">
      <div className="flex  py-2">
        <h1 className="flex-shrink-0 font-bold text-2xl text-blue-700">
          What I&apos;ve Worked On
        </h1>
        <hr className=" border-t-2 border-blue-300 my-auto ml-4 flex-grow" />
      </div>

      {projectsData.map((project: ProjectData, index: number) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          className="py-2 rounded-xl shadow md:flex-row w-full xl:py-4 transition-all duration-300 group xl:hover:bg-slate-700"
        >
          <div className="flex flex-col xl:flex-row justify-between leading-normal xl:px-4 my-2">
            <div className="object-cover xl:w-1/3">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={650}
                height={5650}
                className="rounded-md"
              />
            </div>

            <div className="flex flex-col pt-4 xl:pt-0 xl:w-2/3 xl:pl-4 justify-start leading-normal">
              <div className="flex flex-row gap-3 pb-2">
                <h5 className="font-bold tracking-tight text-lg text-slate-50 xl:group-hover:text-blue-500 transition-all duration-300">
                  {project.title}
                </h5>
                <svg
                  className="w-[14px] h-[14px] my-auto text-slate-50 xl:group-hover:text-blue-300 transition-all duration-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </div>

              <p className="pb-2 text-left text-sm font-normal text-slate-400 xl:group-hover:text-slate-50 transition-all duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="border-blue-300 border-2 text-blue-300 text-xs font-medium me-2 px-4 py-1 mt-2 rounded-xl xl:group-hover:text-slate-900 xl:group-hover:bg-blue-300 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
