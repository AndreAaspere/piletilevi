<template>
  <div class="bg-slate-800 h-full">
    <HeaderView></HeaderView>
    <TopSlider :events="topEvents"></TopSlider>
    {{ view }}
    <Main :events="events"></Main>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import Main from './components/Main/Main'
import HeaderView from './components/HeaderView/HeaderView'
import TopSlider from './components/TopSlider/TopSlider'
import { getEvents, getTopEvents } from './services/api/fetch.ts'

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

provide('view', view)
</script>

<style></style>
