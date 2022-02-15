<template>
  <router-link :to="{ name: 'About' }" class="nav-item nav-link">About</router-link>
  <router-link :to="{ name: 'News' }" class="nav-item nav-link">News</router-link>
  <router-link :to="{ name: 'Organizations' }" class="nav-item nav-link">Organizations</router-link>
  <router-link :to="{ name: 'Contact' }" class="nav-item nav-link">Contact</router-link>
  <router-link :to="{ name: 'Login' }" class="nav-item nav-link">Login</router-link>
</template>

<script>
export default {
  name: "NavbarItem",
}
</script>

<style scoped>

</style>