<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const urlCatergories = '/api/categories'
const urlSuggestions = '/api/trending/search'
const urlTrendings = '/api/trending/gif'
const { data: categories } = await useFetch<any>(urlCatergories)
const { data: suggetions } = await useFetch<any>(urlSuggestions)
const { data: trendings } = await useFetch<any>(urlTrendings)
const type = 'home'

useSeoMeta({
  title: page?.value?.title_home,
  ogTitle: page?.value?.title_home,
  description: page?.value?.desc_home,
  ogDescription: page?.value?.desc_home,
})
</script>

<template>
  <!-- search container -->
  <SearchContainer :type="type" />

  <!-- rating container -->
  <RatingContainer :type="type" />

  <!-- suggestion trending search container -->
  <SuggestionContainer :data="suggetions.data" />

  <!-- trending gif container -->
  <TrendingContainer :data="trendings.data" />

  <!-- categories gif container -->
  <CategoriesContainer :data="categories.data" />
</template>
