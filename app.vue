<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Movie Site` : `Movie Site`;
	},
});
</script>
<template>
	<div>
		<nav>
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/movies">Movies</NuxtLink>
		</nav>
		<NuxtPage />
	</div>
</template>
