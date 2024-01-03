import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <div className="px-4 max-w-screen-xl text-center pt-16 pb-8 lg:px-12 2xl:mr-54 flex flex-col lg:flex-row items-start lg:items-center">
        <a
          href="#"
          className="flex flex-row w-full px-12 rounded-lg bg-slate-900 hover:bg-slate-700"
        >
          <div className="object-cover py-4 rounded-t-lg h-auto rounded-none rounded-s-lg">
            <Image src="/static/image-4.jpg" alt="" width={100} height={100} />
          </div>

          <div className="flex flex-col pl-8 py-4 justify-start leading-normal">
            <div className="flex flex-row gap-3 mb-2">
              <h5 className=" my-auto text-2xl font-bold tracking-tight text-gray-50">
                Title
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

            <p className="mb-3 font-normal text-gray-400">
              Project Description
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
