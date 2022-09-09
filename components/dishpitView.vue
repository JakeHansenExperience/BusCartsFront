<template>
<div>
<v-container>
  <v-row>
    <v-col>
      <span> BusCarts Remaining: {{busCartsRemaining}} </span>
    </v-col>
  </v-row>

<v-row>
  <v-col cols=4>
  <span>  First Floor </span>
  </v-col>
  <v-col cols=4>
    <span> Second Floor </span>
  </v-col>
  <v-col cols=4>
    <span>  Third Floor </span>
  </v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['102'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['102']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['102']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['202'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['202']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['202']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['302'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['302']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['302']}}
        </v-btn>
      </div>
</v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['108'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['108']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['108']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['208'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['208']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['208']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['308'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['308']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['308']}}
        </v-btn>
      </div>
</v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['115'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['115']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['115']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['215'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['215']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['215']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['315'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['315']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['315']}}
        </v-btn>
      </div>
</v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['122'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['122']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['122']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['222'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['222']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['222']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['322'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['322']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['322']}}
        </v-btn>
      </div>
</v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['128'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['128']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['128']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['228'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['228']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['228']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['328'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['328']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['328']}}
        </v-btn>
      </div>
</v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['132'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['132']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['132']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['232'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['232']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['232']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['332'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['332']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['332']}}
        </v-btn>
      </div>
</v-col>
</v-row>

<v-row>
<v-col cols=4>
  <div v-if="buscartStatus['Lounge'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['Lounge']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['Lounge']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['Mainbar'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['Mainbar']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['Mainbar']}}
        </v-btn>
      </div>
</v-col>
<v-col cols=4>
  <div v-if="buscartStatus['Terrace'] == 'open'">
  <v-btn
          rounded
          color="green"
          dark
          >
          {{buscartStatus['Terrace']}}
              </v-btn>
</div>
<div v-else>
          <v-btn

                  rounded
                  color="red"
                  dark
                  >
          {{buscartStatus['Terrace']}}
        </v-btn>
      </div>
</v-col>
</v-row>

</v-container>
</div>
</template>


<script>

export default {
  data() {
    return {
      testColor: 'red',
      testLabel: 'closed',
      busCartsRemaining: 12,
      firstFloorData: ['open', 'closed'],
      secondFloorData: ['closed', 'open'],
      thirdFloorData: ['open', 'open'],
      buscartStatus: {
  "102": "closed",
  "108": "closed",
  "115": "closed",
  "122": "closed",
  "128": "closed",
  "132": "closed",
  "202": "closed",
  "208": "open",
  "215": "open",
  "222": "open",
  "228": "open",
  "232": "open",
  "302": "open",
  "308": "open",
  "315": "open",
  "322": "open",
  "328": "closed",
  "332": "closed",
  "Lounge": "closed",
  "Mainbar": "open",
  "Terrace": "open"
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
