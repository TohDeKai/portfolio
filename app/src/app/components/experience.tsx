export default function Experience() {
  return (
    <section>
      <div className="px-4 max-w-screen-xl py-8 lg:px-12 2xl:mr-54 flex flex-col lg:flex-row items-start lg:items-center">
        <a
          href="#"
          className="rounded-lg shadow md:flex-row w-full bg-slate-900 hover:bg-slate-700"
        >
          <div className="flex justify-between leading-normal px-12 py-4">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-50">
              Company - Role
            </h5>
            <h5 className="text-sm font-thin tracking-tight text-gray-400">
              MMM YYYY - MMM YYYY
            </h5>
          </div>
          <p className="mb-3 px-12 font-normal text-gray-400">
            <ul className="list-disc list-inside">
              <li>Point #1</li>
              <li>Point #1</li>
              <li>Point #1</li>
              <li>Point #1</li>
              <li>Point #1</li>
            </ul>
          </p>
        </a>
      </div>
    </section>
  );
}
