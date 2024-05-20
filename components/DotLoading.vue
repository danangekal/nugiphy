<template>
  <div class="flex justify-center items-center py-6">
    <div class="flex">
      <div
        v-for="dot in 5"
        :key="dot"
        class="w-5 h-5 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-3 animate-bounce"
      />
    </div>
  </div>
</template>
