<template>
  <div class="flex flex-row space-x-6">
    <div class="flex flex-row space-x-2 relative">
      <User class="cursor-pointer" />
      <div class="font-semibold hidden sm:block">Triin</div>
      <div class="bg-green-600 w-3 h-3 rounded-full absolute left-2 top-4"></div>
    </div>
    <Heart class="cursor-pointer hidden sm:block" />
    <div class="relative hidden sm:block">
      <ShoppingCart class="cursor-pointer" />
      <div class="bg-red-600 w-5 h-5 rounded-full absolute left-3 text-center text-white text-sm bottom-3">3</div>
    </div>
    <Menu class="cursor-pointer block sm:hidden mr-2" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { User, Heart, ShoppingCart, Menu } from 'lucide-vue-next'

</script>

<style scoped></style>
