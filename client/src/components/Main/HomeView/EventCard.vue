<template>
  <div v-for="event in events" :key="event.id" class="col">
    <div class="card ">
      <img :src="image" alt="test" class="card-img-top">
      <div class="card-body shadow-sm rounded">
        <h5 class="card-title">{{ event.name }}</h5>
        <p class="card-text">{{ event.description }}
          <br>
          <router-link :to="{ name: 'About' }" class="float-right btn btn-sm float-end" type="button">
            Read more
          </router-link>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import canoe from '@/assets/images/canoe.jpg'

export default {
  name: "EventCard",
  props: ['events'],
  data() {
    return {
      image: canoe
    }
  }
}
</script>

<style scoped>
.card {
  z-index: 1;
}

.btn {
  border-color: #b95d21;
  background-color: #DC8045;
  color: white;
}

.btn:hover {
  background-color: #b45a1d;
}

</style>