<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";

export default {
  name: "Base",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>