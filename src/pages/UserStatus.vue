<template>
  <div style="text-align: center">
    <h2 style="margin-bottom: 0px">Check Status</h2>
  </div>
  <div class="q-pa-md">
    <q-table
      title="Request status"
      :rows="getData"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-btn
              v-if="props.row.status == 'pending'"
              color="negative"
              label="pending"
              text-color="white"
            />
            <q-btn
              v-else-if="props.row.status == 'in-process'"
              color="yellow-8"
              label="in-process"
              text-color="white"
            />
            <q-btn
              v-if="props.row.status == 'finished'"
              color="positive"
              label="finished"
              text-color="white"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { requestDBStore } from "../stores/RequestStore";
import { userDBStore } from "../stores/User";
export default {
  name: "UserStatus",
  data() {
    return {
      requestdb: requestDBStore(),
      userdb: userDBStore(),
      columns: [
        {
          name: "id",
          required: true,
          label: "Request ID",
          align: "left",
          field: (row) => row.name,
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "date",
          align: "center",
          label: "Date",
          field: "date",
        },
        { name: "devicename", label: "Device Name", field: "devicename" },
        { name: "devicebrand", label: "Device Brand", field: "devicebrand" },
        { name: "price", label: "Price charged", field: "price" },
        { name: "status", label: "Status", field: "status" },
      ],
    };
  },
  methods: {},
  computed: {
    getData() {
      const row = [];
      this.requestdb.allrequest.forEach((element, index) => {
        if (!element.available && element.username == this.getUsername) {
          row.push({
            id: this.requestdb.allrequest[index].id,
            date: this.requestdb.allrequest[index].date,
            devicename: this.requestdb.allrequest[index].devicename,
            devicebrand: this.requestdb.allrequest[index].devicebrand,
            price: this.requestdb.allrequest[index].price,
            status: this.requestdb.allrequest[index].status,
          });
        }
      });
      return row;
    },
    getUsername() {
      let name = "";
      this.userdb.alluser.forEach((element) => {
        if (element.isLogin == true) {
          name = element.username;
        }
      });
      console.log(name);
      return name;
    },
  },
};
</script>

<style></style>
