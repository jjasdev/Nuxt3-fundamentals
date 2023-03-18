<script setup lang="ts">
// const isLoggedIn = useIsLoggedIn();
const user = useUser();
function logout() {
	// isLoggedIn.value = false;
	user.isLoggedIn = false;
	useRouter().push("/");
}
</script>
<template>
	<nav>
		<NuxtLink to="/">Home</NuxtLink>
		<NuxtLink to="/movies">Movies</NuxtLink>
		<NuxtLink v-if="user.isLoggedIn" to="/admin">Dashboard</NuxtLink>
		<NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
		<a href="#" v-else @click.prevent="logout">Logout</a>
	</nav>
	<slot></slot>
</template>
