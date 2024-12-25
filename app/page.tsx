import { getProjects, getHero } from "@/sanity/sanity-utils";
import { Project } from "@/types/Projects";

export default async function Home() {

  const projects = await getProjects();
  console.log('projects:', projects);
  const heroContent = await getHero();
  const hero = heroContent[0]; // Variation A hero
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">{hero.headline}</h1>
        { projects.map((project: Project)=> 
          (
            <div key={project._id}>
              <h2>VariationA name: {project.name}</h2>
              <p>VariationA slug: {project.slug}</p>
              <p>variantA id: {project.varianta._ref}</p>
            </div>
        )) }
      </main>
      
    </div>
  );
}


