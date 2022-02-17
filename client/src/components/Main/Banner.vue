<template>
  <div class="banner-image">
    <div class="banner-text">
      <h1 v-if="$route.meta['viewTitle']">{{ $route.meta['viewTitle'] }}</h1>
      <p v-if="$route.meta['description']">{{ $route.meta['description'] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style scoped>
.banner-image {
  background-image: linear-gradient(rgba(220, 128, 69, 0.6), rgba(220, 128, 69, 0.6)), url("../../assets/images/banner.jpg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.banner-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

@media only screen and (max-width: 600px) {
  .banner-image {
    height: 250px;
  }
}
</style>