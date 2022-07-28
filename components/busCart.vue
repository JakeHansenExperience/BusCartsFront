<template>
<div>
  <v-select
            :items="bays"
            label="Bay"
            outlined
            :value= "bay"
          ></v-select>
  <div>
    <v-container class="backgroundCart"

    >

      <v-row
      >
        <v-col @click="key='Linens'"
        >
          <PartsLinens ></PartsLinens>
        </v-col>
        <v-col @click="key = 'TopBin'">
          <PartsTopBin ></PartsTopBin>
        </v-col>
        <v-col @click="key = 'Silverware'">
          <PartsSilverware></PartsSilverware>
        </v-col>
        <v-col @click="key = 'Trash'">
          <PartsTrash ></PartsTrash>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        </v-col>
        <v-col @click="key = 'Liquids'">
          <PartsLiquids></PartsLiquids>
        </v-col>
        <v-col @click="key = 'Second Shelf'">
          <PartsSecondShelf></PartsSecondShelf>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
      <v-row>
      <v-col>
      </v-col>
      <v-col @click="key = 'BottomBin'">
        <PartsBottomBin></PartsBottomBin>
      </v-col>
      <v-col @click="key = 'BottomShelf'">
        <PartsBottomShelf></PartsBottomShelf>
      </v-col>
      <v-col>
      </v-col>
      </v-row>
    </v-container>
  </div>
  <div>
    Selected: {{key}}
    <v-spacer></v-spacer>
    Value: {{value}}
  </div>
  <div>
    <v-card>
        <v-card-text>
          <v-slider
            v-model="value"
            step="10"
            thumb-label
            ticks
          ></v-slider>
        </v-card-text>
      </v-card>
  </div>
  <v-btn
  elevation="2"
  block
  @click="fetchSomething()"
> Update </v-btn>


</div>
</template>


<script>
export default {
  data() {
    return {
      key: "",
      value: 0,
      bay: '',
      bays: ['MainBar', 'Lounge', 'Terrace'],
      busCarts: {
          "id": 0,
          "Floor": 0,
          "Bay": "string",
          "Linens": 0,
          "Silverware": 0,
          "TopBin": 0,
          "Liquids": 0,
          "SecondShelf": 0,
          "Trash": 0,
          "BottomBin": 0,
          "BottomShelf": 0,
          "Status": "string"
},

    }
  },
  methods: {
  async fetchSomething() {
    console.log(this.bay)
    const ip = await this.$axios.$put('/api/updateBusCart', {
      bay: "Terrace",
      key: this.key,
      val: this.value
    })
    this.ip = ip
  }
}


  // methods: {
  //   async sendUpdate() {
  //     await this.$axios.$put('/updateBusCart',
  //   {
  //       bay: 'Terrace',
  //       key: 'Silverware',
  //       val: 69,
  //   },
  // }
  //
  // }
};



</script>

<style scoped>
.backgroundCart {
  background: white;
  background-size: cover;

}
</style>
