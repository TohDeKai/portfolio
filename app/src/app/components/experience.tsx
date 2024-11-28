import React from "react";
import experienceData from "../../../../app/public/data/experience.json";
import { LuFileText } from "react-icons/lu";

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  points: string[];
  skills: string[];
  link: string;
  recommendationLink?: string; // Optional field for recommendation link
}

export default function Experience() {
  return (
    <section id="experience" className="w-full px-8 pt-4 flex flex-col xl:px-0">
      <div className="flex pt-4 py-2">
        <h1 className="flex-shrink-0 font-bold text-2xl text-primary">
          Where I&apos;ve Worked
        </h1>
        <hr className="border-t-2 border-primary-light my-auto ml-4 flex-grow" />
      </div>

      {experienceData.map((experience: ExperienceData, index: number) => (
        <a
          key={index}
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 rounded-xl shadow md:flex-row w-full xl:py-4 transition-all duration-300 group xl:hover:bg-secondary"
        >
          <div className="flex flex-col xl:flex-row leading-normal xl:px-4 my-2">
            <p className="text-lg whitespace-nowrap font-bold text-text my-auto xl:group-hover:text-primary transition-all duration-300">
              {experience.company}
            </p>
            <div className="text-sm flex w-full justify-between items-center xl:pl-4">
              <p className=" font-light text-text-secondary my-auto xl:group-hover:text-text transition-all duration-300">
                {experience.role}
              </p>

              <h5 className=" font-extralight tracking-tight text-text-secondary my-auto xl:group-hover:text-text transition-all duration-300">
                {experience.duration}
              </h5>
            </div>
          </div>
          <div className="mb-3 xl:px-4 font-normal text-text-secondary xl:group-hover:text-text transition-all duration-300">
            <ul className="text-sm list-disc list-inside space-y-2">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap xl:px-4 pb-4 items-center">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="border-primary border-2 text-primary text-xs font-medium me-2 px-4 py-1 rounded-xl xl:group-hover:text-black xl:group-hover:bg-primary xl:group-hover:border-primary transition-all duration-300"
              >
                {skill}
              </span>
            ))}

            {experience.recommendationLink && (
              <>
                <a
                  href={experience.recommendationLink}
                  target="_blank"
                  className="hidden md:flex py-2 px-4 bg-text text-bg rounded-md text-xs mt-2 xl:text-sm md:ml-auto  gap-2 xl:hover:bg-primary xl:hover:text-text duration-300"
                >
                  <LuFileText className="h-4 w-4 xl:h-5 xl:w-5" />
                  Recommendation
                </a>
              </>
            )}
          </div>
          {experience.recommendationLink && (
            <>
              <a
                href={experience.recommendationLink}
                target="_blank"
                className="py-2 px-4 bg-text text-bg rounded-md text-xs flex gap-2 w-40 md:hidden"
              >
                <LuFileText className="h-4 w-4" />
                Recommendation
              </a>
            </>
          )}
        </a>
      ))}
    </section>
  );
}
