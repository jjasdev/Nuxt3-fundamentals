export default defineNuxtRouteMiddleware((to, from) => {
	// const isLoggedIn = useIsLoggedIn();
	const user = useUser();
	if (!user.isLoggedIn) {
		// return abortNavigation("You are not allowed to visit this page");
		return navigateTo({ path: "/login" });
	}
});
