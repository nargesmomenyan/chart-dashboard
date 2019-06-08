<template>
  <highcharts :options="defaultOption" v-bind="$attrs" v-on="$listeners"></highcharts>
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
      defaultOption: {
        tooltip: {
          pointFormat: "{series.name}: {point.y:,.0f}",
          useHTML: true
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        }
      }
    };
  },
  created() {
    Object.assign(this.defaultOption, this.inputOptions);
  },
  watch: {
    inputOptions: {
      handler(val) {
        Object.assign(this.defaultOption, this.inputOptions);
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