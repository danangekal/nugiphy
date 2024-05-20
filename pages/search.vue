<script setup lang="ts">
const { data } = await useAsyncData('index', () => queryContent('/').findOne())
const type = 'search'

useSeoMeta({
  title: data?.value?.title_search,
  ogTitle: data?.value?.title_search,
  description: data?.value?.desc_search,
  ogDescription: data?.value?.desc_search,
})
</script>

<template>
  <div class="flex flex-col items-center justify-center py-6">
    <!-- search container -->
    <SearchContainer :type="type" />

    <!-- rating container -->
    <RatingContainer :type="type" />

    <!-- result search container -->
    <ResultContainer />
  </div>
</template>
