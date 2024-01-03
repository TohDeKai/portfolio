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
    <section id="projects">
      <div className="px-4 max-w-screen-xl py-8 pb-8 lg:px-12 2xl:mr-54 flex flex-col lg:flex-row items-start lg:items-center">
        {projectsData.map((project: ProjectData, index: number) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="lg:flex flex-row w-full px-4 lg:px-12 rounded-lg bg-slate-900 hover:bg-slate-700"
          >
            <div className=" object-cover py-4 ">
              <Image
                src={project.imageSrc}
                alt=""
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col lg:pl-8 py-4 justify-start align-top leading-normal">
              <div className="flex flex-row gap-3 mb-2">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-50">
                  {project.title}
                </h5>
                <svg
                  className="w-[14px] h-[14px] my-auto text-gray-50 "
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

              <p className="mb-3 text-left font-normal text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap pb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-4 py-1 my-2 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
