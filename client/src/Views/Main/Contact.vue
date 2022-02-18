<template><br>

  <br>
  <h3>Contact us here!</h3>
  <h5>Got any questions or concerns? Fill in the form and tell us about your issue and we'll get in touch with you
    soon.</h5>
  <br>
  <div class="container-sm ">
    <br>
    <div>


    </div>
    <div class="col-sm">
      <div class="mb-3">
        <input id="exampleFormControlInput1" class="form-control" placeholder="Name" type="text">
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email">
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="13" placeholder="Message"></textarea>
      </div>
      <br>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn" type="button">Send message</button>
      </div>
      <br>
    </div>
  </div>
  <br>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.container-sm {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;

}

.btn {
  background-color: #4CAF50;
  color: white;
}

.col-sm {
  padding: 20px;
}

</style>