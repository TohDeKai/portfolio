import miscData from "../../../../app/public/data/misc.json";

interface MiscData {
  title: string;
  date: string;
  description: string;
}

export default function Misc() {
  return (
    <section>
      <div className="px-4 max-w-screen-xl py-8 lg:px-12 2xl:mr-54 flex flex-col items-start lg:items-center">
        {miscData.map((miscItem: MiscData, index: number) => (
          <a
            key={index}
            className="rounded-lg shadow md:flex-row w-full bg-slate-900 hover:bg-slate-700"
          >
            <div className="flex justify-between leading-normal px-12 py-2">
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
    </section>
  );
}
