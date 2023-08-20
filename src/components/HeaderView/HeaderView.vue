<template>
  <div class="px-10 pt-10 bg-slate-500">
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
