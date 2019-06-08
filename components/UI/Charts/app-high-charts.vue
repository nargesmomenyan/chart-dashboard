<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputOptions: {
      type: Object
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: this.inputOptions.chartType.toLowerCase()
        },
        title: {
          text: this.inputOptions.title
        },
        xAxis: {
          categories: this.inputOptions.xAxisو
        },
        yAxis: {
          title: {
            text: this.inputOptions.yTitle
          }
        },
        series: this.inputOptions.dataSeries
      }
    };
  },
  watch: {
    inputOptions: {
      handler(val) {
        this.chartOptions.title.text = this.inputOptions.title;
        this.chartOptions.yAxis.title.text = this.inputOptions.yTitle;
        this.chartOptions.chart.type = this.inputOptions.chartType.toLowerCase();
        this.chartOptions.series.data = this.inputOptions.data;
        this.chartOptions.xAxis.categories = this.inputOptions.xAxis;
        this.chartOptions.series = this.inputOptions.dataSeries;
      },
      deep: true
    }
  }
};
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>