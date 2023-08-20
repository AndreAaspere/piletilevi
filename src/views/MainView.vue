<template>
  <div class="p-5">
    <div>Muusikasündmused</div>
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-slate-700 rounded-md text-slate-200 cursor-pointer" v-for="(event, index) in events" :key="index">
        <img class="object-cover h-40 rounded-t-md w-full" :src="BASE_URL + event.image" :alt="'Image' + index" />
        <!-- TODO: justify-between vertically -->
        <div class="p-2 flex flex-col justify-between h-fit">
          <div class="" >
            <div class="text-sm text-blue-300">{{ formattedDate(event.date) }}</div>
            <div class="font-semibold">{{ event.title }}</div>
          </div>
          <div class="text-sm mb-2">{{ event.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

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
