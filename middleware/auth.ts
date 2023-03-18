export default defineNuxtRouteMiddleware((to, from) => {
	const userIsLoggedIn = true;
	if (!userIsLoggedIn) {
		// return abortNavigation("You are not allowed to visit this page");
		return navigateTo({ path: "/login" });
	}
});
