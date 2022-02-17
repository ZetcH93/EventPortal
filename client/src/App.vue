<template>
    <div id="app">
        <!-- hide includes based on the route name -->
        <Base v-if="!$route.meta.hideBase" />
        <router-view />
    </div>
</template>

<script>
import Base from "@/Views/Main/Base";
export default {
    name: "App",
    components: { Base },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

#app {
    font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
