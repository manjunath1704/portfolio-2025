import Hero from "./components/home/hero";
import FeaturedProjects from "./components/home/featured-projects";
import Projects from "./components/home/projects";
import Blog from "./components/home/blog";
import Cta from "./components/home/cta";

export default function Home() {
  return (
    <main>
    <Hero/>
    <FeaturedProjects/>
    <Projects/>
    <Blog/>
    <Cta/>
    </main>
  );
}
