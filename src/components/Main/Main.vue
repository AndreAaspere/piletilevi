<template>
  <div class="p-5">
    <div class="font-semibold text-lg mb-2">Muusikasündmused</div>
    <div class="grid sm:grid-cols-4 gap-4">
      <div class="sm:bg-slate-700 rounded-md text-slate-200 cursor-pointer relative flex flex-row sm:flex-col"
        v-for="(event, index) in events" :key="index">
        <Heart class="hidden sm:block cursor-pointer absolute right-1 top-1" fill="blue" style="fill-opacity: .3;"
          stroke-width="1" />
        <img class="object-cover h-24 sm:h-40 w-24 sm:w-full rounded-md sm:rounded-t-md " :src="BASE_URL + event.image"
          :alt="'Image' + index" />
        <!-- TODO: justify-between vertically -->
        <div class="sm:p-2 px-2 flex flex-col justify-between h-fit">
          <div class="block sm:hidden font-semibold">{{ event.title }}</div>
          <div>
            <div class="text-sm text-blue-300">{{ formattedDate(event.date) }}</div>
            <div class="hidden sm:block font-semibold">{{ event.title }}</div>
          </div>
          <div class="text-sm mb-2">{{ event.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { formatDate } from '../../helper/helper.ts'
import { Heart } from 'lucide-vue-next'

const BASE_URL = 'https://api.intra.piletilevi.ee'

const props = defineProps(['events'])

const formattedDate = (dateString) => {
  // TODO extra formatting: bullet point, remove comma
  const date = new Date(dateString)
  const formattedDate = date.toLocaleString('et-ET', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return formattedDate
}
</script>
