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
          <h1 className="flex-shrink-0 font-bold text-3xl lg:text-2xl">
            Where I've Worked
          </h1>
          <hr className="border-t-2 border-gray-600 my-auto ml-4 flex-grow" />
        </div>

        {experienceData.map((experience: ExperienceData, index: number) => (
          <a
            key={index}
            href={experience.link}
            target="_blank"
            className="py-4 rounded-lg shadow md:flex-row w-full lg:py-0 bg-slate-900 hover:bg-slate-700"
          >
            <div className="flex justify-between leading-normal px-4 lg:px-12 my-2 py-4">
              <div className="lg:flex gap-4">
                <p className="text-lg font-bold text-gray-50 my-auto">
                  {experience.company}
                </p>
                <p className="text-sm font-light text-gray-400 my-auto">
                  {experience.role}
                </p>
              </div>
              <h5 className="text-xs font-thin tracking-tight text-gray-400 my-auto">
                {experience.duration}
              </h5>
            </div>
            <div className="mb-3 px-4 lg:px-12 font-normal text-sm text-gray-400">
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
                  className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-4 py-1 my-2 rounded-lg"
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
