import { insertProjectSchema, projects } from "~/server/database/schema"

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, insertProjectSchema.parse);

  const newProject = await useDrizzle()
    .insert(projects)
    .values(body)
    .returning()
    .get();

  return newProject;
})
