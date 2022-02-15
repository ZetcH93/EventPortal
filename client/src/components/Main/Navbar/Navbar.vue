<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">EventPortal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <NavbarItem/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarItem from "@/components/Main/Navbar/NavbarItem";

export default {
  name: "navbar",
  components: {
    NavbarItem
  },
}
</script>

<style scoped>

</style>