<template>
  <img class="h-10" :src="logo" alt="Logo" />
  <!-- <img :src="logoMobile" alt="Logo mobile" /> -->
</template>

<script setup>

import { onMounted } from 'vue'
import logo from '@/assets/Logo/logo.png' // Import the image using the relative path
import logoMobile from '@/assets/Logo/logo_mobile.png' // Import the image using the relative path

</script>
