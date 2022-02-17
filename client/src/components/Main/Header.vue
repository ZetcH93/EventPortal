<template>
  <Navbar/>
  <Banner/>
</template>

<script>
import Navbar from "@/components/Main/Navbar/Navbar";
import Banner from "@/components/Main/Banner";

export default {
  name: "Header",
  components: {
    Navbar,
    Banner
  }
}
</script>

<style scoped>

</style>