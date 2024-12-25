import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/sanity/sanity-utils";

export async function middleware(request: NextRequest) {

  const projects = await getProjects();
  // console.log(projects);

  // use random value to determine which variant to use
  const randomValue = Math.random();

  // use /variantb page if the randomValue is lowerthan or matches the weight of b variation
  if(randomValue <= (projects[0].weightb / 100)) {

    // use rewrite to use /b page for variation B
    return NextResponse.rewrite(new URL('/variantb', request.url));
  }
  
}

export const config = {
  matcher: "/"
}