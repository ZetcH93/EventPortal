<template><br>

  <br>
  <h3>Contact us here!</h3>
  <h5>Got any questions or concerns? Fill in the form and tell us about your issue and we'll get in touch with you
    soon.</h5>
  <br>
  <div class="container-sm ">
    <div class="col-md p-4 shadow">
      <div class="mb-3">
        <input id="exampleFormControlInput1" class="form-control" placeholder="Your name..." type="text">
      </div>
      <div class="mb-3">
        <input id="exampleFormControlInput2" class="form-control" placeholder="Your email..." type="email">
      </div>
      <div class="mb-3">
        <textarea id="exampleFormControlTextarea1" class="form-control" placeholder="The message..."
                  rows="13"></textarea>
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

.btn {
  background-color: #4CAF50;
  color: white;
}

</style>