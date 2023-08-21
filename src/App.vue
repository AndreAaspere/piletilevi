<template>
  <div class="bg-gray-200">
    <HeaderView @search="searchEvent"></HeaderView>
    <TopSlider :events="topEvents"></TopSlider>
    <Main :events="events"></Main>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import Main from './components/Main/Main'
import HeaderView from './components/HeaderView/HeaderView'
import TopSlider from './components/TopSlider/TopSlider'
import { getEvents, getTopEvents } from './services/api/fetch.js'

const events = ref()
const topEvents = ref()

const view = ref()

onMounted(async () => {
  events.value = await getEvents()
  topEvents.value = await getTopEvents()
  view.value = window.innerWidth < 640 ? 'sm' : 'md'
})

window.onresize = function () {
  view.value = window.innerWidth < 640 ? 'sm' : 'md'
}

const searchEvent = (search) => {
  events.value = events.value.filter((event) => {
    return String(event.title).toLowerCase().includes(search.toLowerCase())
  })
}

provide('view', view)
</script>

<style></style>
