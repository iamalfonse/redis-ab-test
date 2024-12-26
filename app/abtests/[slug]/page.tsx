import { getHeros } from "@/sanity/sanity-utils";

export default async function Page({ params } : { params: { slug: string }}) { // get the URL params using the slug (since the folder structure is asking for [slug] parameter)
    const heroContent = await getHeros();
    const paramSlug = await params;

    type HeroType = {
        slug: {current: string};
    }

    // use filter to select the matching hero slug with the params slug
    const hero = await heroContent.filter((hero: HeroType) => { 
        const heroSlug: string = hero.slug.current;
        if(heroSlug == paramSlug.slug) {
            return hero;
        }
    })
    
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">{hero[0].headline}</h1>
        <h2 className="text-2xl font-bold">{hero[0].subheading}</h2>
        </main>
      </div>
    );
}