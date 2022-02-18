<template>
  <!-- Footer -->
  <div class="sloped"></div>
  <div class="container-fluid px-5 pb-3">
    <div class="row">
      <div class="col-sm">
        <!-- column for the information and event-portal logo -->
        <h5 class="title"><b>Event<span
            style="color: #DC8045">Portal</span></b></h5>
        <p>The Event Portal is made for organizations and their members. Here you will find news, events and be able to
          manage your own registered organization when you have logged in.</p>
      </div>
      <!-- column for the links -->
      <div class="col-sm d-flex flex-column align-items-center">
        <router-link :to="{ name: 'Home' }" class="nav-item nav-link pt-0">Home</router-link>
        <router-link :to="{ name: 'About' }" class="nav-item nav-link">About</router-link>
        <router-link :to="{ name: 'News' }" class="nav-item nav-link">News</router-link>
        <router-link :to="{ name: 'Contact' }" class="nav-item nav-link">Contact</router-link>
        <router-link :to="{ name: 'Login' }" class="nav-item nav-link">Login</router-link>
      </div>
      <!-- column for the contact-form, made so that the contact-form disappears when it gets smaller  -->
      <div class="col-sm d-none d-lg-block px-5">
        <h5>Contact us</h5>
        <div class="mb-3">
          <input id="exampleFormControlInput1" class="form-control" placeholder="Name" type="text">
        </div>
        <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email">
        </div>
        <div class="mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn" type="button">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>

.nav-item:hover {
  color: #DC8045 !important;
  font-weight: 900;
}

.nav-item {
  color: white;
}

.title {
  font-weight: bold;
  font-size: 2rem;
}

.col-sm {
  color: white;
}

.sloped {
  height: 200px;
  z-index: -1;
  margin-bottom: -1px;
  clip-path: polygon(0 0, 100% 88%, 100% 100%, 0% 100%); /* This is where you change how the blue footer should cut*/
  background-color: #00143D;
}

.container-fluid {
  background-color: #00143D;
  position: center;
}

.btn {
  background-color: #DC8045;
  color: white;
}

@media only screen and (max-width: 600px) {
  .sloped {
    height: 50px;
  }
}
</style>