<script setup lang="ts">
const props = defineProps<{
  data: Array<any>
}>()

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <div class="flex flex-col w-full items-center justify-between">
    <div class="flex flex-row space-x-1 py-4 text-sm text-blue-500 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
      <p>{{ page?.title_trending_container }}</p>
    </div>
    <VideoCarousel :videos="props.data" />
  </div>
</template>
