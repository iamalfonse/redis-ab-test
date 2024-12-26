import { NextRequest, NextResponse } from "next/server";
import { getHeros } from "@/sanity/sanity-utils";
import { Hero } from "./types/Heros";

// function used to grab the specific URL slug depending on the variant weight
function selectABTest(slugArray: string[], weights: number[]) {
  let totalWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }

  const random = Math.random() * totalWeight;
  let weightSum = 0;

  for (let i = 0; i < slugArray.length; i++) {
    weightSum += weights[i];
    if (random < weightSum) {
      return slugArray[i];
    }
  }
}

export async function middleware(request: NextRequest) {

  const heros = await getHeros();

  const heroArray = heros.map((hero: Hero) => hero.slug.current)
  const weightsArray = heros.map((hero: Hero) => hero.weight)

  // grab winning slug
  const winningSlug = selectABTest(heroArray, weightsArray);

  // use rewrite to use /abtests/{slug} to show the winning variation
  return NextResponse.rewrite(new URL(`/abtests/${winningSlug}`, request.url));
}

export const config = {
  matcher: "/"
}