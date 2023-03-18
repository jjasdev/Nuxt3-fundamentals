<script setup>
const route = useRoute();
const { data } = useFetch(
	`http://www.omdbapi.com/?apikey=54639314&i=${route.params.id}`,
	{
		pick: ["Plot", "Title", "Error"],
		key: `/movies/${route.params.id}`,
	}
);

if (data.value.Error === "Incorrect IMDb ID.") {
	showError({ statusCode: 404, statusMessage: "Page Not Found" });
}

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
console.log(route.params.id);
</script>
<template>
	<pre>
		<h1>{{ data }}</h1>
	</pre>
</template>
