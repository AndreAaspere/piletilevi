<template>
  <div class="sticky sm:relative top-0 sm:px-10 sm:pt-10 bg-slate-500 z-50">
    <div class="flex justify-between mb-5 items-center">
      <Logo></Logo>
      <Search></Search>
      <UserMenu></UserMenu>
    </div>
    <MenuView></MenuView>
  </div>
</template>

<script setup>
import MenuView from '../MenuView/MenuView'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import UserMenu from '../UserMenu/UserMenu'
</script>
