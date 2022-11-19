import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const requestDBStore = defineStore("requestDB", {
  state: () => ({
    allrequest: [
      {
        id: useStorage("request1id", "1"),
        username: useStorage("request1username", ""),
        techname: useStorage("request1techname", ""),
        status: useStorage("request1status", ""),
        devicename: useStorage("request1dname", ""),
        devicebrand: useStorage("request1brand", ""),
        date: useStorage("request1date", ""),
        datefinish: useStorage("request1datefinish", ""),
        price: useStorage("request1price", 0),
        available: useStorage("request1available", true),
      },
    ],
  }),
  getters: {},
  actions: {},
});
