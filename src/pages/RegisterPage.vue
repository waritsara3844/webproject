<template>
  <q-page>
    <div style="text-align: center">
      <h4>Register</h4>
    </div>
    <div class="flex justify-center">
      <q-card class="my-card bg-pink-3 q-px-md q-py-md" style="width: 30rem">
        <div class="flex flex-center">
          <q-icon name="account_circle" color="grey-6" size="4rem" />
        </div>
        <q-card-section>
          <q-form
            @submit.prevent="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            ref="myRegisterForm"
          >
            <div>
              <q-input
                v-model="fullname"
                type="text"
                label="Your Fullname"
                color="white"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required',
                ]"
              />
            </div>
            <div>
              <q-input
                v-model="email"
                type="text"
                label="Your Email"
                color="white"
                lazy-rules
                :rules="[emailValidate, requiredValidate]"
              />
            </div>
            <div>
              <q-input
                v-model="username"
                type="text"
                label="Your username"
                color="white"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required',
                ]"
              />
            </div>
            <div>
              <q-input
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="Your Password"
                color="white"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length >= 6) || 'Must be at least 6 characters',
                ]"
              >
                <template #append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <q-btn label="Submit" type="submit" color="pink-4" />
              <q-btn
                label="Reset"
                type="reset"
                color="white"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { emailValidate, requiredValidate } from "../util/validation";
import { userDBStore } from "../stores/User";
export default {
  name: "RegisterPage",
  data() {
    return {
      id:"",
      fullname: "",
      email: "",
      username: "",
      password: "",
      isPwd: true,
      userdb: userDBStore(),
    };
  },
  methods: {
    emailValidate,
    requiredValidate,
    onSubmit() {
      var i = 0;
      let max = this.userdb.alluser.length - 1;
      this.userdb.alluser.forEach((element) => {
        console.log('test');
        if (element.available && i == 0) {
          element.id = this.id;
          element.fullname = this.fullname;
          element.email = this.email;
          element.username = this.username;
          element.password = this.password;
          element.available = false;
          element.userType = "user";
          i++;
          max++;
          alert(
            "Successfully created an account please log in to use the system"
          );
          this.$router.push("/");
        }
        else if (max == 0) {
          alert("User amount is full right now");
        }
        max--;
      });
      this.onReset();
    },
    onReset() {
      this.fullname = null;
      this.email = null;
      this.username = null;
      this.password = null;
    },
  },
};
</script>

<style>
h4{
  color: rgb(213, 17, 102);
}
</style>
