<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-10">
      <q-toolbar class="bg-grey-6">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title > Laptop Rental System </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item-label header> Essential Links </q-item-label>
          <div v-if="notRegis">
            <EssentialLink
              v-for="link in unregisessentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </div>
          <div v-else-if="isUser">
            <EssentialLink
              v-for="link in useressentialLinks"
              :key="link.title"
              v-bind="link"
              :user="isUser"
              :admin="isAdmin"
            />
          </div>
          <div v-else-if="isAdmin">
            <EssentialLink
              v-for="link in adminessentialLinks"
              :key="link.title"
              v-bind="link"
              :user="isUser"
              :admin="isAdmin"
            />
          </div>
        </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { userDBStore } from "../stores/User";
import { adminStore } from "../stores/AdminStore";

const unregislinksList = [
  {
    title: "Request",
    caption: "Fill in your request form",
    icon: "description",
    link: "/request",
  },
  {
    title: "Register",
    caption: "Register to track your request",
    icon: "app_registration",
    link: "/register",
  },
  {
    title: "Login",
    caption: "Login to the system",
    icon: "login",
    link: "/",
  },
];

const userlinksList = [
  {
    title: "Request",
    caption: "Fill in your request form",
    icon: "description",
    link: "/user/request",
  },
  {
    title: "Check Status",
    caption: "Check your status",
    icon: "app_registration",
    link: "/user/status",
  },
  {
    title: "Logout",
    caption: "Login to the system",
    icon: "logout",
    link: "/",
  },
];
const adminlinksList = [
  {
    title: "Dashboard",
    caption: "Your Dashboard",
    icon: "description",
    link: "/admin",
  },
  {
    title: "Manage Product",
    caption: "Manage your Product",
    icon: "construction",
    link: "/admin/mng",
  },
  {
    title: "Manage Request",
    caption: "Manage your requests",
    icon: "app_registration",
    link: "/admin/request",
  },
  {
    title: "Logout",
    caption: "Login to the system",
    icon: "logout",
    link: "/",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      unregisessentialLinks: unregislinksList,
      useressentialLinks: userlinksList,
      adminessentialLinks: adminlinksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      userName: "Annonymous",
      userdb: userDBStore(),
      admin: adminStore(),
    };
  },
  methods: {
    adminLogout() {
      admin.alladmin[0].isLogin = false;
    },
  },
  computed: {
    notRegis() {
      let isnotRegis = false;
      if (!this.isAdmin && !this.isUser) {
        isnotRegis = true;
      }
      return isnotRegis;
    },
    isUser() {
      let isUser = false;
      this.userdb.alluser.forEach((element) => {
        if (element.isLogin == true) {
          isUser = true;
        }
      });
      return isUser;
    },
    },
    isAdmin() {
      let isAdmin = false;
      if (this.admin.alladmin[0].isLogin) {
        isAdmin = true;
      }
      return isAdmin;
    },
    // getUsername() {
    //   let name = "Annonymous";
    //   if (this.isAdmin) {
    //     name = "admin";
    //   } else if (this.isUser) {
    //     this.userdb.alluser.forEach((element) => {
    //       if (element.isLogin == true) {
    //         name = element.username;
    //       }
    //     });
    //   } else if (this.isTech) {
    //     this.techdb.alltech.forEach((element) => {
    //       if (element.isLogin == true) {
    //         name = element.username;
    //       }
    //     });
    //   }
    //   return name;
    // },
    // getIcon() {
    //   let icon = "https://cdn-icons-png.flaticon.com/512/848/848006.png";
    //   if (this.isAdmin) {
    //     icon = "https://cdn-icons-png.flaticon.com/512/6024/6024190.png";
    //   } else if (this.isTech) {
    //     icon = "https://cdn-icons-png.flaticon.com/512/1154/1154992.png";
    //   }
    //   return icon;
    // },
});
</script>
