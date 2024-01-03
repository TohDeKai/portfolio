import miscData from "../../../../app/public/data/misc.json";

interface MiscData {
  title: string;
  date: string;
  description: string;
}

export default function Misc() {
  return (
    <section id="misc">
      <div className="px-4 max-w-screen-xl py-8 lg:px-12 2xl:mr-54 items-start lg:items-center">
        <div className="flex items-center w-full px-4 py-2">
          <h1 className="flex-shrink-0 font-bold text-3xl lg:text-2xl">
            Icing On Top
          </h1>
          <hr className="border-t-2 border-gray-600 my-auto ml-4 flex-grow" />
        </div>
        <div className="flex flex-col">
          {miscData.map((miscItem: MiscData, index: number) => (
            <a
              key={index}
              className="rounded-lg shadow md:flex-row w-full bg-slate-900 hover:bg-slate-700"
            >
              <div className="flex justify-between leading-normal px-4 py-2 lg:px-16">
                <div className="flex gap-6 ">
                  <p className="text-sm font-bold text-gray-50 my-auto">
                    {miscItem.title}
                  </p>
                </div>
                <h5 className="text-xs font-thin tracking-tight text-gray-400">
                  {miscItem.date}
                </h5>
              </div>
              {miscItem.description.trim() !== "" && (
                <div className="mb-2 px-12 font-extralight text-xs text-gray-400">
                  <ul className="list-disc list-inside">
                    <li className="pl-4 font-normal text-gray-400">
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
