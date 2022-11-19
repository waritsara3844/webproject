import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const userDBStore = defineStore("userDB", {
  state: () => ({
    alluser: [
      {
        id: useStorage("user1id", "1"),
        fullname: useStorage("user1fullname", "Shunya"),
        email: useStorage("user1email", "s@g.com"),
        username: useStorage("user1username", "shun"),
        userType: useStorage("user1userType", "user"),
        password: useStorage("user1password", "123456"),
        accessToken: useStorage("user1accessToken", ""),
        available: useStorage("user1value", false),
        isLogin: useStorage("user1isLogin", false),
      }
    ],
  }),
  getters: {},
  actions: {},
});
