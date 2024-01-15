import Self from "./components/self";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Misc from "./components/misc";
import SocMed from "./components/socmed";

const menuItems = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Misc", link: "#misc" },
];

export default function Home() {
  return (
    <main className="selection:bg-cyan-400 selection:text-slate-700">
      <div className=" bg-slate-950 w-full lg:fixed lg:w-1/2 lg:h-full lg:top-0 lg:left-0 ">
        <Self />
        <SocMed />
        <div className="hidden lg:block">
          <Nav menuItems={menuItems} />
        </div>
      </div>
      <div className="bg-slate-950 w-full lg:relative h-full lg:w-1/2 lg:top-0 lg:left-1/2  ">
        <About />
        <Experience />
        <Projects />
        <Misc />
      </div>
    </main>
  );
}
