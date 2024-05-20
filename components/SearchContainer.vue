<script setup lang="ts">
const props = defineProps<{
  type: 'home' | 'search'
}>()

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const store = useAppStore()
const { rating, keyword } = storeToRefs(store)

function handleKeySearch() {
  navigateTo(`/search?page=1&rating=${rating.value}&keyword=${keyword.value}`)
}
</script>

<template>
  <div class="flex flex-col w-full items-center justify-between">
    <p
      v-if="props.type === 'home'"
      class="py-4 font-medium sm:font-bold text-3xl sm:text-5xl text-blue-500"
    >
      {{ page?.title_app }}
    </p>
    <a
      v-else
      href="/"
      :title="page?.title_go_to_home"
      class="py-4 font-medium sm:font-bold text-3xl sm:text-5xl text-blue-500"
    >
      {{ page?.title_app }}
    </a>
    <div class="w-full sm:w-1/2 relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        id="search"
        v-model="keyword"
        type="search"
        autoCorrect="off"
        autoComplete="off"
        name="search"
        :placeholder="page?.placeholder_search"
        class="block w-full p-4 ps-10 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 text-blue-500"
        @keyup.enter="handleKeySearch"
      >
    </div>
  </div>
</template>
