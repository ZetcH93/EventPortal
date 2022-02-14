<template>
  <BaseWebsite msg="HELLOOO"/>
  <router-view/>
</template>

<script>
import BaseWebsite from './Views/Main/BaseWebsite.vue'

export default {
  name: 'App',
  components: {
    BaseWebsite
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
