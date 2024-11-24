export default function Footer() {
  return (
    <section id="about">
      <div className="w-full px-8 xl:px-4 py-8">
        <p className="text-left text-sm font-normal text-gray-500 dark:text-gray-400 ">
          Built with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </a>
          , deployed with Vercel
        </p>
      </div>
    </section>
  );
}
