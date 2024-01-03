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
    <section id="experience">
      <div className="px-4 max-w-screen-xl py-8 lg:px-12 2xl:mr-54 flex flex-col  items-start lg:items-center">
        <div className="flex items-center w-full px-4 py-2">
          <h1 className="flex-shrink-0 font-bold text-3xl text-blue-700 lg:text-2xl">
            Where I've Worked
          </h1>
          <hr className=" border-t-2 border-blue-300 my-auto ml-4 flex-grow" />
        </div>

        {experienceData.map((experience: ExperienceData, index: number) => (
          <a
            key={index}
            href={experience.link}
            target="_blank"
            className="py-4 rounded-lg shadow md:flex-row w-full lg:py-0 transition-all duration-300 group hover:bg-slate-700"
          >
            <div className="flex justify-between leading-normal px-4 lg:px-12 my-2 py-4">
              <div className="lg:flex gap-4">
                <p className="text-lg font-bold text-slate-50 my-auto group-hover:text-blue-500 transition-all duration-300">
                  {experience.company}
                </p>
                <p className="text-sm font-light text-slate-400 my-auto group-hover:text-blue-300 transition-all duration-300">
                  {experience.role}
                </p>
              </div>
              <h5 className="text-xs font-thin tracking-tight text-slate-400 my-auto group-hover:text-slate-50 transition-all duration-300">
                {experience.duration}
              </h5>
            </div>
            <div className="mb-3 px-4 lg:px-12 font-normal text-sm text-slate-400 group-hover:text-slate-50 transition-all duration-300">
              <ul className="list-disc list-inside space-y-2">
                {experience.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap px-4 lg:px-12 pb-4">
              {experience.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="border-blue-300 border-2 text-blue-300 text-xs font-medium me-2 px-4 py-1 my-2 rounded-lg group-hover:text-slate-900 group-hover:bg-blue-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
