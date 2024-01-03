import miscData from "../../../../app/public/data/misc.json";

interface MiscData {
  title: string;
  date: string;
  description: string;
}

export default function Misc() {
  return (
    <section id="misc">
      <div className="px-4 max-w-screen-xl py-8 lg:px-12 2xl:mr-54 items-start lg:items-center ">
        <div className="flex items-center w-full px-4 py-2">
          <h1 className="flex-shrink-0 font-bold text-3xl lg:text-2xl text-blue-500">
            Icing On Top
          </h1>
          <hr className="border-t-2 border-blue-300 my-auto ml-4 flex-grow" />
        </div>
        <div className="flex flex-col ">
          {miscData.map((miscItem: MiscData, index: number) => (
            <a
              key={index}
              className="rounded-lg shadow md:flex-row w-full group hover:bg-slate-700 transition-all duration-300"
            >
              <div className="flex justify-between leading-normal px-4 py-2 lg:px-16 ">
                <div className="flex gap-6 ">
                  <p className="text-sm font-bold text-slate-50 my-auto group-hover:text-blue-500 transition-all duration-300">
                    {miscItem.title}
                  </p>
                </div>
                <h5 className="text-xs font-thin tracking-tight text-slate-400 group-hover:text-slate-50 transition-all duration-30">
                  {miscItem.date}
                </h5>
              </div>
              {miscItem.description.trim() !== "" && (
                <div className="mb-2 px-12 font-extralight text-xs">
                  <ul className="list-disc list-inside">
                    <li className="pl-4 font-normal text-slate-400 group-hover:text-slate-50 transition-all duration-30">
                      {miscItem.description}
                    </li>
                  </ul>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
