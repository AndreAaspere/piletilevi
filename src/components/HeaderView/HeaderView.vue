<template>
  <div class="sticky sm:relative top-0 sm:px-10 sm:pt-10 bg-white z-50">
    <div class="flex justify-between mb-5 items-center">
      <Logo></Logo>
      <Search @search="searchEvent"></Search>
      <UserMenu></UserMenu>
      <Menu class="cursor-pointer block sm:hidden mr-2" />
    </div>
    <MenuView></MenuView>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import MenuView from '../MenuView/MenuView'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import UserMenu from '../UserMenu/UserMenu'
import { Menu } from 'lucide-vue-next'

const emit = defineEmits(['search'])

const searchEvent = (search) => {
  emit('search', search)
}
</script>
