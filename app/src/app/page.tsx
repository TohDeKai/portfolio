import Self from "./components/self";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Misc from "./components/misc";

const menuItems = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Misc", link: "#misc" },
];

export default function Home() {
  return (
    <main>
      <div className="bg-slate-900 w-full lg:fixed lg:w-1/2 lg:h-full lg:top-0 lg:left-0 ">
        <Self />
        <div className="hidden lg:block">
          <Nav menuItems={menuItems} />
        </div>
      </div>
      <div className="bg-slate-900 w-full lg:relative h-full lg:w-1/2 lg:top-0 lg:left-1/2  ">
        <About />
        <Experience />
        <Projects />
        <Misc />
      </div>
    </main>
  );
}
