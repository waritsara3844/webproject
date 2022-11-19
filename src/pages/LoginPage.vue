<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-pink-2">
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-img
                    src="icons/Laptops.png"
                    spinner-color="white"
                  ></q-img>
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="q-pa-md">
                    <div
                      class="text-h6 q-pb-md text-pink-5 text-center text-weight-bolder q-mt-xl"   >
                      Login
                    </div>
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="username"
                        label="Username"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type Username',
                        ]"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val !== null && val !== '') ||
                            'Please type your password',]"
                      />

                      <div>
                        <q-btn label="Login" type="submit" color="pink" @click="onSubmit()" />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="pink"
                          flat
                          class="q-ml-sm"
                          @click="onReset()"
                        />
                      </div>
                      <div>
                        <center><a href="/register" class="text-grey-6">Create new Account</a></center>
                      </div>
                    </q-form>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { Notify } from "quasar";
// import { useLoginUserStore } from "../stores/loginUserStore";
import { userDBStore } from "../stores/User";
import { adminStore } from "../stores/AdminStore";
export default {
  name: "LoginPage",
  data() {
    return {
      username: null,
      password: null,
      isPwd: true,
      //   storeLogUser: useLoginUserStore(),
      userdb: userDBStore(),
      admin: adminStore(),
    };
  },
  methods: {
    onReset() {
      this.username = null;
      this.password = null;
      this.isPwd = true;
    },
    onSubmit() {
      let correct = false;
      if (this.username == "admin" && this.password == "12345**") {
        this.admin.alladmin[0].isLogin = true;
        this.$router.push("/admin");
      } else {
        this.userdb.alluser.forEach((element) => {
          if (
            element.username == this.username &&
            element.password == this.password
          ) {
            element.isLogin = true;
            correct = true;
            this.$router.push("/user/request");
          }
        });
        if (!correct) {
          alert("Username or password is incorrect please try again");
        }
      }
    },
    checkUserType() {},
  },
};
</script>
