<script setup lang="ts">
const props = defineProps<{
  type: 'home' | 'search'
}>()

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const store = useAppStore()
const { setRating } = store
const { rating, keyword } = storeToRefs(store)
const ratingOption = [
  {
    label: 'Level 1 - G',
    value: 'g',
  },
  {
    label: 'Level 2 - PG',
    value: 'pg',
  },
  {
    label: 'Level 3 - PG 13',
    value: 'pg-13',
  },
  {
    label: 'Level 4 - R',
    value: 'r',
  },
]

function handleClickRating(value: string) {
  setRating(value)
  if (props.type === 'search') {
    navigateTo(`/search?page=1&rating=${value}&keyword=${keyword.value}`)
  }
}
</script>

<template>
  <div class="flex flex-col w-full items-center justify-between">
    <div class="py-2 space-x-2 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-500">
      <p>{{ page?.title_rating }}</p>
      <button
        v-for="({ label, value }) in ratingOption"
        :key="value"
        class="border border-blue-500 me-2 px-2.5 py-0.5 my-0.5 rounded-full"
        :class="[rating === value ? 'bg-blue-200' : '']"
        @click="handleClickRating(value)"
      >
        {{ label }}
      </button>
    </div>
  </div>
</template>
