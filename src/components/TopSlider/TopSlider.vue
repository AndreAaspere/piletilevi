<template>
  <div class="bg-slate-600 rounded-md p-5 mx-4 mt-2 sm:mt-10">
    <div class="flex flex-row justify-between mb-4">
      <div class="text-lg font-semibold">Müügi TOP</div>
      <div class="flex flex-row space-x-2">
        <div>1/2</div>
        <ChevronLeft class="cursor-pointer" color="lightblue" />
        <ChevronRight class="cursor-pointer" color="blue" />
      </div>
    </div>
    <div>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div class="text-slate-200 cursor-pointer" v-for="(event, index) in events" :key="index"
          v-show="view === 'md' ? true : index < 2">
          <div class="absolute bg-red-600 w-5 pl-1 text-sm mt-2 rounded-r-full">{{ index + 1 }}</div>
          <img class="object-cover h-32 sm:h-24 rounded-md w-full" :src="BASE_URL + event.image" :alt="'Image' + index" />
          <div class="p-2 flex flex-col">
            <div class="text-sm mb-2">{{ formatDate(event.date) }}</div>
            <div class="font-semibold mb-2">{{ event.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject } from 'vue'
import { formatDate } from '../../helper/helper.ts'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const BASE_URL = 'https://api.intra.piletilevi.ee'

const props = defineProps(['events'])
const view = inject('view')

</script>
