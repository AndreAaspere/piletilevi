<template>
  <div class="flex justify-between">
    <Logo></Logo>
    <Search></Search>
    <UserMenu></UserMenu>
  </div>
  <MenuView></MenuView>
</template>

<script setup>
import MenuView from '../MenuView/MenuView'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import UserMenu from '../UserMenu/UserMenu'
</script>
