export default function Misc() {
  return (
    <section>
      <div className="px-4 max-w-screen-xl py-8 lg:px-12 2xl:mr-54 flex flex-col lg:flex-row items-start lg:items-center">
        <a
          href="#"
          className="rounded-lg shadow md:flex-row w-full bg-slate-900 hover:bg-slate-700"
        >
          <div className="flex justify-between leading-normal px-12 py-4">
            <div className="flex gap-6 mb-2">
              <p className="text-lg font-bold text-gray-50 my-auto">
                Award/Certification
              </p>
            </div>
            <h5 className="text-sm font-thin tracking-tight text-gray-400">
              MMM YYYY
            </h5>
          </div>
          <div className="mb-3 px-12 font-normal text-md text-gray-400">
            <p className="mb-3 font-normal text-gray-400">
              Project Description
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
