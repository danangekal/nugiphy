<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData('index', () => queryContent('/').findOne())

useHead({
  titleTemplate: `%s - ${data?.value?.title_app}`,
  meta: [{ property: 'og:title', content: `${route.meta.title} - ${data?.value?.title_app}` }],
})
</script>

<template>
  <div>
    <main class="flex min-h-screen flex-col p-24">
      <slot />
    </main>
  </div>
</template>
