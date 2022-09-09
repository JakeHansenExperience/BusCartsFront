<template>
<div>
<div>
  Floor 2
</div>


</div>
</template>


<script>

export default {
  data() {
    return {


      
      secondFloorCarts: {
        "202": {
    "name": "202",
    "status": "Open",
    "floor": 2,
    "dishes": "g",
    "silverware": "red",
    "liquids": "r",
    "trash": "green",
    "linens": "g",
    "cups": "g"
  },
  "208": {
    "name": "208",
    "status": "Open",
    "floor": 2,
    "dishes": "g",
    "silverware": "y",
    "liquids": "r",
    "trash": "g",
    "linens": "g",
    "cups": "g"
  },
  "215": {
    "name": "215",
    "status": "Open",
    "floor": 2,
    "dishes": "g",
    "silverware": "y",
    "liquids": "r",
    "trash": "g",
    "linens": "g",
    "cups": "g"
  },
  "222": {
    "name": "222",
    "status": "Open",
    "floor": 2,
    "dishes": "g",
    "silverware": "y",
    "liquids": "r",
    "trash": "g",
    "linens": "g",
    "cups": "g"
  },
  "228": {
    "name": "228",
    "status": "Open",
    "floor": 2,
    "dishes": "g",
    "silverware": "y",
    "liquids": "r",
    "trash": "g",
    "linens": "g",
    "cups": "g"
  },
  "232": {
    "name": "232",
    "status": "Open",
    "floor": 2,
    "dishes": "g",
    "silverware": "y",
    "liquids": "r",
    "trash": "g",
    "linens": "g",
    "cups": "g"
  },
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
