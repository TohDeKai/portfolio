import Self from "./components/self";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Misc from "./components/misc";
import SocMed from "./components/socmed";
import Footer from "./components/footer";

const menuItems = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Misc", link: "#misc" },
  {
    title: "Resume",
    link: "/docs/Toh De Kai - Resume.pdf",
    openInNewTab: true,
  },
];

export default function Home() {
  return (
    <main className="selection:bg-primary selection:text-black">
      <div className="bg-bg w-full xl:fixed xl:w-1/2 xl:h-full xl:top-0 xl:left-0 flex xl:items-start xl:justify-end">
        <div className="">
          <Self />
          <SocMed />
          <Nav menuItems={menuItems} />
        </div>
      </div>
      <div className="bg-bg w-full xl:relative h-full xl:w-1/2 xl:top-0 xl:left-1/2">
        <div className="w-full xl:w-11/12">
          <About />
          <Experience />
          <Projects />
          <Misc />
          <Footer />
        </div>
      </div>
    </main>
  );
}
