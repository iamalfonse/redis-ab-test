import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "vxfsag1a",
    dataset: "production",
    title: "Redis AB Test",
    apiVersion: "2024-12-23",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }, // comes from ./sanity/schemas/index.ts
})

export default config;