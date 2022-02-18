<template>
  <div class="container-sm">
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </form>
    <br>
    <h4 class="text">Organization register</h4>
    <h5>There are many different organisations in the event portal. <br>You can search the register in the area of
      activities you are interested in.</h5>
  </div>
</template>

<script>
export default {
  name: "Organizations"
}
</script>

<style scoped>
.container-sm {
  padding: 50px;
  text-align: left;

}

.text {
  font-weight: bolder;
}
</style>