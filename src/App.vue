<template>
  <div class="bg-slate-800 h-screen">
    <HeaderView></HeaderView>
    <TopSlider :events="topEvents"></TopSlider>
    <MainView :events="events"></MainView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainView from './views/MainView'
import HeaderView from './components/HeaderView/HeaderView'
import TopSlider from './components/TopSlider/TopSlider'
import { getEvents, getTopEvents } from './services/api/fetch.ts'

const events = ref()
const topEvents = ref()

onMounted(async () => {
  events.value = await getEvents()
  topEvents.value = await getTopEvents()
})

</script>

<style></style>
