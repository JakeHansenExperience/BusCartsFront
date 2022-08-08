<template>
  <v-expansion-panels>
    <v-expansion-panel
    >
      <v-expansion-panel-header>
        Third Floor
      </v-expansion-panel-header>
      <v-expansion-panel-content >
        <v-avatar v-for="key, val in third" :color='key'>
          <span> {{val}} </span>
         </v-avatar>

      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel
    >
      <v-expansion-panel-header>
        Second Floor
      </v-expansion-panel-header>
      <v-expansion-panel-content >
        <v-avatar v-for="key, val in second" :color='key'>
          <span> {{val}} </span>
         </v-avatar>

      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel
    >
      <v-expansion-panel-header>

        First Floor
      </v-expansion-panel-header>
      <v-expansion-panel-content >
        <v-avatar v-for="key, val in first" :color='key'>
          <span> {{val}} </span>
         </v-avatar>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

    <script>
    export default{
      data () {
        return {
          colorInData: "orange",
          first: {
          "105": 'green',
          "111": 'green',
          '115': 'green',
          'lounge': 'green',
          '123': 'green',
          '128': 'green',
          '132': 'green',
        },
        second: {
        "205": 'green',
        "211": 'green',
        '215': 'yellow',
        'MainBar': 'green',
        '223': 'red',
        '228': 'yellow',
        '232': 'red',
      },
        third: {
        "305": 'red',
        "311": 'red',
        '315': 'yellow',
        'Terrace': 'yellow',
        '323': 'yellow',
        '328': 'green',
        '332': 'green',
      },
      }
      }
    }

    </script>
