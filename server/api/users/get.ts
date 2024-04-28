import { users } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const allUsers = await useDrizzle()
  .select()
  .from(users)
  .all()

  return allUsers
});
