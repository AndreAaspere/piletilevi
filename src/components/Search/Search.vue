<template>
  <div class="flex flex-row">
    <input class="w-[100px] sm:w-[400px]" type="text" placeholder="Search for events, performers, venues">
    <div class="bg-red-600 rounded-r-full w-12 border-t border-r botder-b border-slate-700">
      <Search class="cursor-pointer mt-2 ml-2" color="white" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Search } from 'lucide-vue-next'

</script>

<style scoped>
input {
  @apply border border-slate-700 p-2 rounded-l-full pl-6
}
</style>
