<script lang="ts" setup>
const query = ref("ant");
const movies: any = ref([]);
async function search() {
	// @ts-ignore
	const { Search } = await $fetch(
		`http://www.omdbapi.com/?i=tt3896198&apikey=54639314&s=${query.value}`
	);
	movies.value = Search;
}
</script>

<template>
	<form @submit.prevent="search">
		<input type="text" v-model="query" />
		<button>Search</button>
	</form>
	<ul>
		<li v-for="movie in movies" :key="movie.imdbID">
			<NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
				<img :src="movie.Poster" :alt="movie.title" />
			</NuxtLink>
		</li>
	</ul>
</template>

<style scoped></style>
