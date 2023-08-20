<template>
  <img v-if="view==='md'" :src="logo" class="h-[4rem]" alt="Logo mobile" />
  <img v-if="view==='sm'" :src="logoMobile" class="h-[4rem] p-2" alt="Logo mobile" />
</template>

<script setup>

import { inject } from 'vue'
import logo from '@/assets/Logo/logo.png'
import logoMobile from '@/assets/Logo/logo_mobile.png'

const view = inject('view')
</script>
