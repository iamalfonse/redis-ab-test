import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "vxfsag1a",
    dataset: "production",
    apiVersion: "2024-12-23",
});

export async function getProjects() {
    // use GroQ
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            varianta,
            variantb,
            weighta,
            weightb,
        }`
    );
}

export async function getHeros() {

    return client.fetch(
        groq`*[_type == "hero"]{
            _id,
            _createdAt,
            name,
            slug,
            headline,
            subheading,
            weight
        }`
    );
}