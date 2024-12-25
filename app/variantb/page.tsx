import { getHero } from "@/sanity/sanity-utils";

export default async function Home() {

  const heroContent = await getHero();
  const hero = heroContent[1]; //grab variant B

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-2xl font-bold">{hero.headline}</h1>
      <h2 className="text-2xl font-bold">{hero.subheading}</h2>
      </main>
      
    </div>
  );
}


