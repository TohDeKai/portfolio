import React from "react";
import experienceData from "../../../../app/public/data/experience.json";

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  points: string[];
  skills: string[];
  link: string;
}

export default function Experience() {
  return (
    <section id="experience" className="w-full px-8 pt-4 flex flex-col xl:px-0">
      <div className="flex pt-4 py-2">
        <h1 className="flex-shrink-0 font-bold text-2xl text-blue-700">
          Where I&apos;ve Worked
        </h1>
        <hr className="border-t-2 border-blue-300 my-auto ml-4 flex-grow" />
      </div>

      {experienceData.map((experience: ExperienceData, index: number) => (
        <a
          key={index}
          href={experience.link}
          target="_blank"
          className="py-2 rounded-xl shadow md:flex-row w-full xl:py-4 transition-all duration-300 group xl:hover:bg-slate-700"
        >
          <div className="flex flex-col xl:flex-row leading-normal xl:px-4 my-2">
            <p className="text-lg whitespace-nowrap font-bold text-slate-50 my-auto xl:group-hover:text-blue-500 transition-all duration-300">
              {experience.company}
            </p>
            <div className="text-sm flex w-full justify-between items-center xl:pl-4">
              <p className=" font-light text-slate-400 my-auto xl:group-hover:text-blue-300 transition-all duration-300">
                {experience.role}
              </p>

              <h5 className=" font-extralight tracking-tight text-slate-400 my-auto xl:group-hover:text-slate-50 transition-all duration-300">
                {experience.duration}
              </h5>
            </div>
          </div>
          <div className="mb-3 xl:px-4 font-normal text-slate-400 xl:group-hover:text-slate-50 transition-all duration-300">
            <ul className="text-sm list-disc list-inside space-y-2">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap xl:px-4 pb-4">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="border-blue-300 border-2 text-blue-300 text-xs font-medium me-2 px-4 py-1 mt-2 rounded-xl xl:group-hover:text-slate-900 xl:group-hover:bg-blue-300 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </a>
      ))}
    </section>
  );
}
