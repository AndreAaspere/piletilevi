<template>
  <div class="flex flex-row">
    <input v-model="search" class="w-[100px] sm:w-[300px]" type="text"
      placeholder="Search for events, performers, venues">
    <div
      id="search-button"
      class="cursor-pointer bg-red-600 rounded-r-full w-12 border-t border-r botder-b border-slate-700 active:bg-red-400"
      @click="click">
      <Search class=" mt-2 ml-2" color="white" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { Search } from 'lucide-vue-next'

const search = ref('')
const emit = defineEmits(['search'])

const click = () => {
  if (search.value !== '') {
    emit('search', search.value)
  }
}

</script>

<style scoped>
input {
  @apply border border-slate-700 p-2 rounded-l-full pl-6
}</style>
