import { projects } from "~/server/database/schema"

export default defineEventHandler(async (event) => {
  const allProjects = await useDrizzle()
  .select()
  .from(projects);

  return allProjects
})
