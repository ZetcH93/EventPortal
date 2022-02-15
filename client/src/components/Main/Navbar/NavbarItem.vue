<template>
    <router-link :to="{ name: 'Home' }" class="nav-item nav-link">Home</router-link>
    <router-link :to="{ name: 'About' }" class="nav-item nav-link">About</router-link>
</template>

<script>
export default {
  name: "NavbarItem",
}
</script>

<style scoped>

</style>