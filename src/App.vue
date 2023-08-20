<template>
  <div class="bg-slate-800 h-screen">
    <HeaderView></HeaderView>
    <TopSlider></TopSlider>
    <MainView :events="events"></MainView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainView from './views/MainView'
import HeaderView from './components/HeaderView/HeaderView'
import TopSlider from './components/TopSlider/TopSlider'
import { getEvents } from './services/api/fetch.ts'

const events = ref()

onMounted(async () => {
  events.value = await getEvents()
})

</script>

<style></style>
