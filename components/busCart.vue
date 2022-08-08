<template>
<div>
  <v-select
            :items="bays"
            label="Bay"
            outlined
            :value= "bay"
            @input="setSelectedBay"
          ></v-select>
  <div>
    <v-container class="backgroundCart"

    >
      <v-row class="justify-center"
      >
        <v-col cols=3 @click="key='Linens'"
        >
          <PartsLinens ></PartsLinens>
        </v-col>
        <v-col cols=3 @click="key = 'TopBin'">
          <PartsTopBin ></PartsTopBin>
        </v-col>
        <v-col cols=3 @click="key = 'Silverware'">
          <PartsSilverware></PartsSilverware>
        </v-col>
        </v-row>

      <v-row class="justify-center">
        <v-col cols=3 @click="key = 'Trash'">
          <PartsTrash ></PartsTrash>
        </v-col>
        <v-col cols=3 @click="key = 'Liquids'">
          <PartsLiquids></PartsLiquids>
        </v-col>
        <v-col cols=3 @click="key = 'Second Shelf'">
          <PartsSecondShelf></PartsSecondShelf>
        </v-col>

      </v-row>
      <v-row class="justify-center">
      <v-col cols=3>
        <PartsTowels></PartsTowels>
      </v-col>
      <v-col cols=3 @click="key = 'BottomBin'">
        <PartsBottomBin></PartsBottomBin>
      </v-col>
      <v-col cols=3 @click="key = 'BottomShelf'">
        <PartsBottomShelf></PartsBottomShelf>
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
  @click="updateCart()"
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
      bays: ['MainBar', 'Lounge', 'Terrace','105','111','115','123','128','132','205','211','215','223','228','232','305','311','315','323','328','332'],
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
  async updateCart() {
    console.log(this.bay)
    const ip = await this.$axios.$put('/api/updateBusCart', {
      bay: this.bay,
      key: this.key,
      val: this.value
    })
    this.ip = ip
  },
  setSelectedBay(value){
    this.bay = value
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
