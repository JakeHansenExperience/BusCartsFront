<template>
<div>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('102')"
    >
      102
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('202')"
    >
      202
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('302')"
    >
      302
    </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('108')"
    >
      108
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('208')"
    >
      208
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('308')"
    >
      308
    </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('115')"
    >
      115
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('215')"
    >
      215
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('315')"
    >
      315
    </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('122')"
    >
      122
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('222')"
    >
      222
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('322')"
    >
      322
    </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('128')"
    >
      128
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('228')"
    >
      228
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('328')"
    >
      328
    </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('132')"
    >
      132
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('232')"
    >
      232
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('332')"
    >
      332
    </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('Lounge')"
    >
      Lounge
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('Mainbar')"
    >
      Mainbar
    </v-btn>
      </v-col>
      <v-col>
        <v-btn
      class="ma-2"
      outlined
      color="white"
      @click="changeBay('Terrace')"
    >
      Terrace
    </v-btn>
      </v-col>
    </v-row>

  </v-container>

</div>
</template>


<script>

export default {
  data() {
    return {

}


},
  props: {
    //the parameters the comopnet accepst
    // 102 108 115 122 128 132 Lounge Mainbar Terrace
    // message: String,
    // product: Object,
    // email: {
      // type: String
      // required: true,
      // default: 'none'
      // validator: function (value) {
      //   return true if valid
      // }
  },
  computed: {
    // fullName: function () {
    //   return this.fistName + ' ' + this.lastName
  },
  watch: {
    //called when firstname changes value
    // firstName: function (value, oldValue) {...}
  },


  methods: {
    changeBay(bay) {
      console.log("inChildBay: ", bay)
      this.$emit('changeBay', bay)
      console.log("inChild")
    }

},
//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
};

</script>

<style scoped>


/*
vuetify styling

ranges from 0-16
{property} {direction} -{size}
property is type of spacing, m for margin p for padding
direction designates the side the property applies to
t (top)
b (bottom)
l (left)
r (right)
x (left and right )
y (top and bottom)
a (all directions)
size (1-16)
1 is 4px, 2 is 8 px, n1 is -4 px or auto

with breakpoints for screen sizes, xs, sm, md, lg, xl

{property}{direction}-{breakpoint}-{size} */


</style>
