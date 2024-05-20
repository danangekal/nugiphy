<script setup lang="ts">
const currentVideoIndex = ref(0)
const props = defineProps<{
  videos: Array<any>
}>()

function handlePrevSlide() {
  currentVideoIndex.value = (currentVideoIndex.value - 1 + props?.videos?.length) % props?.videos?.length
}

function handleNextSlide() {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % props?.videos?.length
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="max-w-xl w-full relative">
      <div class="overflow-hidden rounded-lg">
        <div class="flex">
          <div
            v-for="({ id, images }, index) in videos"
            :key="id"
            :data-testid="`video-${index}`"
            class="w-full flex-none"
            :class="[index === currentVideoIndex ? 'block' : 'hidden']"
          >
            <video
              class="w-full"
              controls
            >
              <source
                :src="images?.original?.mp4"
                type="video/mp4"
              >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-2 right-2 flex items-center justify-between text-4xl font-bold text-white hover:text-blue-200">
        <button @click="handlePrevSlide">
          &lt;
        </button>
        <p
          v-for="({ id, title }, index) in videos"
          :key="id"
          class="text-xs truncate"
          :class="[index === currentVideoIndex ? 'block' : 'hidden']"
        >
          {{ title }}
        </p>

        <button @click="handleNextSlide">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>
