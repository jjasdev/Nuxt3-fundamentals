<script setup>
const route = useRoute();
const { data } = await useFetch(
	`http://www.omdbapi.com/?apikey=54639314&i=${route.params.id}`,
	{
		pick: ["Plot", "Poster", "Title", "Error"],
		key: `/movies/${route.params.id}`,
	}
);

if (data.value?.Error === "Incorrect IMDb ID.") {
	showError({ statusCode: 404, statusMessage: "Page Not Found" });
}
useHead({
	title: data.value?.Title,
	meta: [
		{
			name: "description",
			content: data.value.Plot,
		},
		{
			property: "og:description",
			content: data.value.Plot,
		},
		{
			property: "og:image",
			content: data.value.Poster,
		},
		{
			name: "twitter:card",
			content: summary_large_image,
		},
	],
});

// const { data } = await useAsyncData(
// 	() => {
// 		return $fetch(
// 			`http://www.omdbapi.com/?apikey=54639314&i=${route.params.id}`
// 		);
// 	},
// 	{
// 		pick: ["Plot", "Title"],
// 		// transform(data) {
// 		// 	return {
// 		// 		Plot: data.Plot,
// 		// 		Title: data.Title,
// 		// 	};
// 		// },
// 	}
// );
// const res = await $fetch(
// 	`http://www.omdbapi.com/?apikey=54639314&i=${route.params.id}`
// );
</script>
<template>
	<pre>
		<h1>{{ data }}</h1>
	</pre>
</template>
