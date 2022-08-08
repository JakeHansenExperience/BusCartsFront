<template>
<div>
  {{selected}}
  <v-select
            :items="busCartParts"
            label="BusCartPart"
            outlined
            :value= "selected"
            @input="update"
          ></v-select>
          <!-- <v-card id='myDiv'>

</v-card> -->
<div id='myDiv'></div>
<!-- <vue-plotly :data="data" :layout="layout" :options="options"/> -->
<v-btn
elevation="2"
block
@click="launchGraph()"
> Update </v-btn>
</div>
</template>

<script>
// import VuePlotly from '@statnett/vue-plotly'
export default {

  // components: {
  //   VuePlotly
  // },
computed: {
  graphWidth() {
    switch (this.$vuetify.breakpoint.name){
          case 'xs': return 290
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
    }
  }
},

  data () {
    return {
      busCartParts: ['Linens','Silverware','TopBin','Liquids','SecondShelf','Trash','BottomBin','BottomShelf'],
      data: [{ x: [1, 3], y: [2, 4] }],
      layout: {},
      options: {},
      selected: '',
      // graphWidth: 600,
      graphHeight: 600,
      analytics: {
  "First": {
    "105": 10,
    "111": 20,
    "115": 30,
    "123": 40,
    "128": 50,
    "132": 0,
    "Lounge": 0,
    "Average": 0
  },
  "Second": {
    "205": 0,
    "211": 0,
    "215": 0,
    "223": 0,
    "228": 0,
    "232": 0,
    "MainBar": 0,
    "Average": 0
  },
  "Third": {
    "305": 0,
    "311": 0,
    "315": 0,
    "323": 0,
    "328": 0,
    "332": 0,
    "Terrace": 0.9,
    "Average": 0.1285714285714286
  }
}
    }
  },

  methods: {
    launchGraph () {
//     var res = {
//   "First": {
//     "105": 50,
//     "111": 50,
//     "115": 0,
//     "123": 0,
//     "128": 0,
//     "132": 0,
//     "Lounge": 20,
//     "Average": 17.142857142857142
//   },
//   "Second": {
//     "205": 0,
//     "211": 0,
//     "215": 0,
//     "223": 0,
//     "228": 0,
//     "232": 70,
//     "MainBar": 10,
//     "Average": 11.428571428571429
//   },
//   "Third": {
//     "305": 0,
//     "311": 0,
//     "315": 80,
//     "323": 70,
//     "328": 0,
//     "332": 0,
//     "Terrace": 90,
//     "Average": 34.285714285714285
//   }
// };
var res = this.analytics
    var yLabels = ['BC05', 'BC11', 'BC15', 'BC23', 'BC28', 'BC32', 'Bar', 'Avg']
    var firstFloor = [];
    var secondFloor = [];
    var thirdFloor = []
    firstFloor.push(res['First']['105'])
    firstFloor.push(res['First']['111'])
    firstFloor.push(res['First']['115'])
    firstFloor.push(res['First']['123'])
    firstFloor.push(res['First']['128'])
    firstFloor.push(res['First']['132'])
    firstFloor.push(res['First']['Lounge'])
    firstFloor.push(res['First']['Average'])
    secondFloor.push(res['Second']['205'])
    secondFloor.push(res['Second']['211'])
    secondFloor.push(res['Second']['215'])
    secondFloor.push(res['Second']['223'])
    secondFloor.push(res['Second']['228'])
    secondFloor.push(res['Second']['232'])
    secondFloor.push(res['Second']['MainBar'])
    secondFloor.push(res['Second']['Average'])
    thirdFloor.push(res['Third']['305'])
    thirdFloor.push(res['Third']['311'])
    thirdFloor.push(res['Third']['315'])
    thirdFloor.push(res['Third']['323'])
    thirdFloor.push(res['Third']['328'])
    thirdFloor.push(res['Third']['332'])
    thirdFloor.push(res['Third']['Terrace'])
    thirdFloor.push(res['Third']['Average'])


    var trace1 = {
      type: 'scatter',
      x: firstFloor,
      y: yLabels,
      mode: 'markers',
      name: 'firstFloor',
      marker: {
        color: 'rgba(156, 165, 196, 0.95)',
        line: {
          color: 'rgba(156, 165, 196, 1.0)',
          width: 1,
        },
        symbol: 'circle',
        size: 16
      }
    };
    var trace2 = {
      type: 'scatter',
      x: secondFloor,
      y: yLabels,
      mode: 'markers',
      name: 'secondFloor',
      marker: {
        color: 'rgba(255, 0, 0, 0.8)',
        line: {
          color: 'rgba(255, 0, 0, 0.8)',
          width: 1,
        },
        symbol: 'circle',
        size: 16
      }
    };
    var trace3 = {
      type: 'scatter',
      x: thirdFloor,
      y: yLabels,
      mode: 'markers',
      name: 'thirdFloor',
      marker: {
        color: 'rgba(0, 255, 0, 0.8)',
        line: {
          color: 'rgba(0, 255, 0, 0.8)',
          width: 1,
        },
        symbol: 'circle',
        size: 16
      }
    };



    var data = [trace1,trace2,trace3];

    var layout = {
      title: 'BusCartData',
      xaxis: {
        showgrid: false,
        showline: true,
        range: [0,100],
        linecolor: 'rgb(102, 102, 102)',
        titlefont: {
          font: {
            color: 'rgb(204, 204, 204)'
          }
        },
        tickfont: {
          font: {
            color: 'rgb(102, 102, 102)'
          }
        },
        autotick: false,
        dtick: 10,
        ticks: 'outside',
        tickcolor: 'rgb(102, 102, 102)'
      },

      legend: {
        font: {
          size: 10,
        },
        yanchor: 'middle',
        xanchor: 'right'
      },
      width: this.graphWidth,
      height: this.graphHeight,
      paper_bgcolor: 'rgb(254, 247, 234)',
      plot_bgcolor: 'rgb(254, 247, 234)',
      hovermode: 'closest'
    };

    Plotly.newPlot('myDiv', data, layout);
  },
  async update(value){
    this.selected = value;
    var string;
    string = '/api/busCartAnalytics/' + value;
    console.log("String: ", string)
    const response = await this.$axios.$get(string);
    this.analytics = response;
  }

  }
}
</script>
