import Self from "./components/self";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Misc from "./components/misc";

const menuItems = [
  { title: "About", link: "#" },
  { title: "Experience", link: "#" },
  { title: "Projects", link: "#" },
  { title: "Misc", link: "#" },
];

export default function Home() {
  return (
    <main>
      <div className="fixed w-1/2 h-full top-0 left-0 bg-slate-900">
        <Self />
        <Nav menuItems={menuItems} />
      </div>
      <div className="relative h-full w-1/2 top-0 left-1/2  bg-slate-900">
        <About />
        <Experience />
        <Projects />
        <Misc />
      </div>
    </main>
  );
}
