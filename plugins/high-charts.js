

import Vue from 'vue'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
 
// Highcharts.setOptions({
//   lang: {
//           decimalPoint: ',',
//           thousandsSep: '.'
//         }
//   })
Vue.use(HighchartsVue, {
    highcharts: Highcharts
})