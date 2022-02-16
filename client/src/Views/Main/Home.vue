<template>
  <!-- Organization bubblor -->
  <OrganizationBubbles/>
  <!-- Events -->
  <Events/>
</template>

<script>
import Events from "@/components/Main/HomeView/Events";
import OrganizationBubbles from "@/components/Main/HomeView/OrganizationBubbles";

export default {
  name: 'BaseWebsite',
  components: {OrganizationBubbles, Events},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
