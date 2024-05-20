<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app'

const props = defineProps<{
  data: Array<any>
}>()

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const store = useAppStore()
const { setKeyword } = store
const { rating, keyword } = storeToRefs(store)

function handleBtnClick(word: string) {
  setKeyword(word)
  navigateTo(`/search?page=1&rating=${rating.value}&keyword=${word}`)
}
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
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>

      <p>{{ page?.title_suggestion_container }}</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <button
        v-for="word in props.data"
        :key="word"
        class="border border-blue-500 text-blue-500 text-xs truncate me-2 px-2.5 py-0.5 my-0.5 rounded-full"
        :class="[keyword === word ? 'bg-blue-100' : '']"
        @click="handleBtnClick(word)"
      >
        {{ word }}
      </button>
    </div>
  </div>
</template>
