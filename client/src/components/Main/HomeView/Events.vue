<template>
  <h2>Events</h2>
  <div class="event-cards">
    <div class="row row-cols-2 row-cols-md-2 g-4 align-items-center">
      <EventCard :events="events"/>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/Main/HomeView/EventCard";

export default {
  name: "Events",
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          'name': 'Event one',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nibh, fringilla id consequat vel, accumsan ut nisi. Nullam ultricies velit sit amet ipsum faucibus, id malesuada est interdum. Suspendisse vitae erat et nunc iaculis dapibus vitae in elit. Proin.'
        },
        {
          'name': 'Event two',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nibh, fringilla id consequat vel, accumsan ut nisi. Nullam ultricies velit sit amet ipsum faucibus, id malesuada est interdum. Suspendisse vitae erat et nunc iaculis dapibus vitae in elit. Proin.'
        },
        {
          'name': 'Event three',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nibh, fringilla id consequat vel, accumsan ut nisi. Nullam ultricies velit sit amet ipsum faucibus, id malesuada est interdum. Suspendisse vitae erat et nunc iaculis dapibus vitae in elit. Proin.'
        },
        {
          'name': 'Event four',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci nibh, fringilla id consequat vel, accumsan ut nisi. Nullam ultricies velit sit amet ipsum faucibus, id malesuada est interdum. Suspendisse vitae erat et nunc iaculis dapibus vitae in elit. Proin.'
        },
      ]
    }
  }
}
</script>

<style scoped>
.event-cards {
  width: 60rem;
  margin: auto auto -7rem;
}

@media only screen and (max-width: 600px) {
  .event-cards {
    width: 20rem;
    margin: auto auto -7rem;
  }
}
</style>