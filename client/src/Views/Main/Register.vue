<template>
    <div class="container mt-5">
        <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <h1 class="font-weight-bold mt-3">
                    Event<span class="logo-span">Portal</span>
                </h1>
                <div class="card my-5 border-0">
                    <div class="card-body rounded shadow-sm">
                        <h5 class="card-title text-center font-weight-bold p-4">
                            Register
                        </h5>
                        <form
                            class="form-signin"
                            @submit.prevent="registerUser"
                        >
                            <div class="mb-3 form-label-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First name..."
                                    v-model="user.firstName"
                                />
                            </div>
                            <div class="mb-3 form-label-group">
                                <input
                                    type="text"
                                    v-model="user.lastName"
                                    class="form-control"
                                    placeholder="Last Name..."
                                />
                            </div>
                            <div class="mb-3 form-label-group">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Email..."
                                    v-model="user.email"
                                />
                            </div>
                            <div class="mb-3 form-label-group">
                                <input
                                    type="password"
                                    v-model="user.password"
                                    class="form-control"
                                    placeholder="Password..."
                                />
                            </div>
                            <div class="mb-3 form-label-group">
                                <input
                                    type="password"
                                    v-model="user.repeatPassword"
                                    class="form-control"
                                    placeholder="Repeat Password..."
                                />
                            </div>

                            <input
                                type="submit"
                                value="Register"
                                class="btn btn-primary btn-block"
                            />
                            <!-- oauth -->
                            <!--  <p class="text-center mt-3">OR</p>
                            <div class="d-grid gap-2 mt-3 mb-4">
                                <a
                                    href="#"
                                    class="btn btn-block btn-outline-danger"
                                    ><i class="fa-brands fa-google mr-2"></i
                                    >Sign up with Google</a
                                >
                                <a
                                    href="#"
                                    class="btn btn-block btn-outline-primary"
                                    ><i class="fa-brands fa-facebook mr-2"></i
                                    >Sign up with Facebook</a
                                >
                            </div> -->
                            <!-- // oauth -->
                            <div
                                class="d-flex justify-content-between align-items-center mb-4 mt-3"
                            >
                                <!-- Checkbox -->
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                    />
                                    <label class="form-check-label"
                                        ><a href="#" class="text-secondary"
                                            >Terms of use. Privacy policy</a
                                        ></label
                                    >
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                repeatPassword: "",
            },
        };
    },
    methods: {
        async registerUser() {
            // Check
            console.log(this.user);
        },
    },
    /* for changing body background-color inside a scoped style */
    created() {
        document.body.style.background = "#f5f7fb";
    },
    beforeUnmount() {
        document.body.style.background = "#f5f7fb";
    },
};
</script>

<style lang="scss" scoped>
body {
    background-color: #f5f7fb;
}
</style>
