<template>
  <q-page>
    <div class="q-pa-sm">
      <div class="row justify-center q-gutter-sm">
            <CardLaptop/>
      </div>
  </div>
  </q-page>
</template>

<script>
import  CardLaptop  from "src/components/CardLaptop.vue"
export default {
  name:"UserRental",
  components: {
    CardLaptop
  },
};
</script>

<style>

</style>
