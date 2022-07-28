<template>
  <div>

    <v-img  @click="myVariable = true" src="/binLogo.png" contain max-width="250" max-height="150"> </v-img>
     Hi there 
  </div>
</template>

<script>
export default{
  data () {
    return {
      myVariable: false
    }
  }
}
</script>
