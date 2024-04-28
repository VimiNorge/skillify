import { insertUserSchema, users } from "~/server/database/schema"

export default defineEventHandler(async (event) => {
  // Map input to dB schema
  // reuse the drizzle schema to validate the input
  const body =  await readValidatedBody(event, insertUserSchema.parse)

  // Insert the user
  const newUser = await useDrizzle()
  .insert(users)
  .values(body)
  .returning()
  .get()

  return newUser
})
