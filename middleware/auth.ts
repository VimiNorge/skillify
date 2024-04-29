export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession()

  if (to.path !== '/' && !loggedIn.value) {
    return navigateTo('/')
  }
})
