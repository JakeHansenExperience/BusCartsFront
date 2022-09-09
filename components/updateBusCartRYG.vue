<template>
<div>
  <div>
    <v-expansion-panels v-model="panel" focusable>
    <v-expansion-panel

    >

      <v-expansion-panel-header >
        <span align='center' justify='center'>
        {{buscartNum}}
      </span>
      </v-expansion-panel-header>


      <v-expansion-panel-content v-if='showContent'>
        <buscartPicker @changeBay='changeBayParent'></buscartPicker>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>

  <div>
    <v-container
    class="px-0"
    fluid
  >
  <v-row>
    <v-spacer>
    </v-spacer>
    <v-col cols=3 class="pl-3 mt-2">
      Status
    </v-col>
  <v-spacer></v-spacer>
    <v-switch
      v-model="switch1"
      :label="statusLabel"
      @click="switchStatus"
    ></v-switch>
    <v-spacer></v-spacer>
  </v-row>

  </v-container>
  </div>



  <div>
      <redYellowGreenSelector imgurl="/plates.png" theKey="dishes"  :theColor='platesColor' :theBay='buscartNum'></redYellowGreenSelector>
      <redYellowGreenSelector imgurl="/silverware.png" theKey="silverware"   :theColor='silverwareColor' :theBay='buscartNum'></redYellowGreenSelector>
  <redYellowGreenSelector imgurl="/trash.png" theKey="trash"   :theColor='trashColor' :theBay='buscartNum'></redYellowGreenSelector>
  <redYellowGreenSelector imgurl="/linens.png" theKey="linens"   :theColor='linensColor' :theBay='buscartNum'></redYellowGreenSelector>
    <redYellowGreenSelector imgurl="/liquids.png" theKey="liquids"   :theColor='liquidsColor' :theBay='buscartNum'></redYellowGreenSelector>
  <redYellowGreenSelector imgurl="/cup.png" theKey="cups"   :theColor='cupColor' :theBay='buscartNum'></redYellowGreenSelector>







</div>
</div>
</template>


<script>

export default {
  data() {
    return {
      buscartNum: '102',
      bay: null,
      panel: [],
      switch1: true,
      statusLabel: 'open',
      showAllBays: false,
      platesColor: 'green',
      silverwareColor: null,
      trashColor: 'null',
      linensColor: 'blue',
      liquidsColor: 'orange',
      cupColor: 'purple',
      showContent: 'true',
      bcData: {},

      buscarts: {"204": {
                        "name": "204",
                        "status": "Open",
                        "floor": 2,
                        "dishes": "green",
                        "silverware": "yellow",
                        "liquids": "red",
                        "trash": "green",
                        "linens": "green",
                        "cups": "green"
                      },
                  "Mainbar": {
                              "name": "Mainbar",
                              "status": "Open",
                              "floor": 2,
                              "dishes": "green",
                              "silverware": "green",
                              "liquids": "green",
                              "trash": "green",
                              "linens": "green",
                              "cups": "green"
                            }
                    }

            }


},
  props: {
    //the parameters the comopnet accepst
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
    changeBayParent(bay){
      console.log("changeBAyParent")
      this.buscartNum = bay
      this.panel = []
      this.platesColor = this.bcData[bay]['dishes']
      this.silverwareColor = this.bcData[bay]['silverware']
      this.trashColor = this.bcData[bay]['trash']
      this.linensColor = this.bcData[bay]['linens']
      this.liquidsColor = this.bcData[bay]['liquids']
      this.cupColor = this.bcData[bay]['cups']
      this.statusLabel = this.bcData[bay]['status']
    },
    switchStatus(){
      if(this.statusLabel == 'open'){
        this.statusLabel = 'closed'
      }
      else {
        this.statusLabel = 'open'
      }
    },
    async grabBCData(){
      const response = await this.$axios.$get('/api/readAllBusCarts');
      this.bcData = response

      const startingBay = '202'
      this.changeBayParent(startingBay)
    }

},
//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
  mounted() {
    console.log("MountedBaby");
    this.grabBCData();

    console.log("CalledThatData")


  }
};

</script>

<style scoped>

</style>
