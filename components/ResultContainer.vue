<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const { query } = useRoute()
const qsPage = query?.page
const qsKeyword = query?.keyword
const qsRating = query?.rating
const urlSearch = `/api/search/gif?page=${qsPage}&rating=${qsRating}&keyword=${qsKeyword}`
const { data: gifs, pending, error, refresh } = await useFetch<any>(urlSearch, { lazy: true, watch: [query] })
// const { data: gifs, pending, error } = await useAsyncData(
//   'gifs',
//   () => $fetch(urlSearch),
//   {
//     watch: [query],
//   },
// )

function handlePrevPage() {
  const newPage = Number(qsPage) - 1
  refresh()
  navigateTo(`/search?page=${newPage}&rating=${qsRating}&keyword=${qsKeyword}`)
}

function handleNextPage() {
  const newPage = Number(qsPage) + 1
  refresh()
  navigateTo(`/search?page=${newPage}&rating=${qsRating}&keyword=${qsKeyword}`)
}
</script>

<template>
  <div class="flex flex-col w-full items-center justify-between">
    <div class="flex flex-row items-start py-4 text-sm text-blue-500 ">
      <p>{{ page?.title_search }}</p>
    </div>
    <div class="flex flex-col items-center justify-between w-full">
      <DotLoading v-if="pending" />
      <p
        v-else-if="error"
        class="text-red-500 text-md"
      >
        {{ page?.title_error_general }}
      </p>
      <div v-else-if="gifs?.data?.length">
        <div class="flex flex-row flex-wrap items-center justify-between">
          <div
            v-for="({ id, images, title }) in gifs?.data"
            :key="id"
            class="flex flex-col items-center justify-between"
          >
            <p class="text-xs truncate">
              {{ title }}
            </p>
            <video
              class="py-4"
              controls
            >
              <source
                :src="images?.fixed_height?.mp4"
                type="video/mp4"
              >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="flex flex-row flex-wrap w-full items-center justify-between py-4 text-blue-500 text-xs sm:text-lg">
          <button
            class="w-20 sm:w-32 flex items-center justify-center border px-2.5 py-0.5 rounded-md"
            :class="[gifs?.pagination?.offset === 0 ? 'bg-slate-100 text-slate-400 border-slate-400' : 'hover:bg-blue-100 border-blue-500']"
            :disabled="gifs?.pagination?.offset === 0"
            @click="handlePrevPage"
          >
            <svg
              class="hidden sm:block w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Previous
          </button>
          <button
            class="w-20 sm:w-32 flex items-center justify-center border border-blue-500 px-2.5 py-0.5 hover:bg-blue-100 rounded-md"
            @click="handleNextPage"
          >
            Next
            <svg
              class="hidden sm:block w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      <p
        v-else
        class="text-blue-500 text-md"
      >
        {{ page?.title_no_data }}
      </p>
    </div>
  </div>
</template>
