<script setup lang="ts">
definePageMeta({
	layout: "plain",
});

// // UseState
// const isLoggedIn = useIsLoggedIn();

const user = useUser();
function login() {
	// isLoggedIn.value = true;
	user.isLoggedIn = true;
	useRouter().push("/admin");
}
</script>
<template>
	<form @submit.prevent="login">
		<h1>Login</h1>
		<label>
			Username
			<input type="text" />
		</label>
		<label>
			Password
			<input type="password" />
		</label>
		<button>Login</button>
	</form>
</template>
