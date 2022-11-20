<template>
        <q-card class="q-ma-sm">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fth-en%2Fshop%2Fbuy-mac%2Fmacbook-air%2Fm1-chip&psig=AOvVaw3kcf7fcCPPfCeAjvbZovXR&ust=1669026042916000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjj5dXEvPsCFQAAAAAdAAAAABAJ" />

          <q-card-section>
            <div class="text-h6">Macbook{{ index }}</div>
            <div class="text-subtitle2">Rental this Laptop</div>
            <div class="q-pa-md">
              <div class="q-gutter-md row">
                <q-select
                  filled
                  v-model="data"
                  label="Price"
                  :options="stringObtions"
                  style="width: 250px"
                  behavior="menu"
                  @update:model-value="priceCheck()"
                />
                <q-input
                  filled
                  v-model="price"
                  :dense="dense"
                  disable
                  style="width: 250px"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
</template>

<script>
// import { Notify } from "quasar";
// import { useLoginUserStore } from "../stores/loginUserStore";
export default {
  name: "CardLaptop",
  data() {
    return {
      data: null,
      price: null,
      stringObtions:["Day","Week", "Year"],
    };
  },
  methods: {
    priceCheck(){
      if(this.data == "Day"){
        this.price = 200;
      }else if(this.data == "Week"){
        this.price = 1000;
      }else{
        this.price = 42000;
      }
    }
  },
};
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 300px
</style>
