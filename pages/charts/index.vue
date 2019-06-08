<template>
  <div>
    <v-container>
      <v-layout justify-space-around>
        <v-flex xs4>
          <v-select label="فریمورک نمودار" v-model="selectedChart" :items="chartLibs"></v-select>
        </v-flex>
        <v-flex xs4>
          <v-select label="نوع نمودار" v-model="chartOptions.chartType" :items="chartTypes"></v-select>
        </v-flex>
      </v-layout>
    </v-container>

    <keep-alive>
      <component :is="selectedChart" :inputOptions="chartOptions"></component>
    </keep-alive>
    <v-divider></v-divider>
    <br>
    <v-container fluid>
      <v-card>
        <v-card-title>
          <h3>اطلاعات نمودار</h3>
        </v-card-title>

        <v-card-text>
          <v-layout justify-space-between>
            <v-flex xs4>
              <v-text-field box label="عنوان نمودار" v-model="chartOptions.title"/>
            </v-flex>
            <v-flex xs4>
              <v-text-field xs4 box label="عنوان محور عمودی" v-model="chartOptions.yTitle"/>
            </v-flex>
            <v-flex xs4>
              <h4>محور افقی</h4>
              <v-flex v-for="index in 4" :key="index">
                <p>{{index}}</p>
                <input v-model.number="chartOptions.xAxis[index-1]">
              </v-flex>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AppHighCharts from "~/components/UI/Charts/app-high-charts";
export default {
  data() {
    return {
      selectedChart: "HighCharts",
      chartLibs: ["highCharts", ""],
      chartTypes: ["Spline", "AreaSpline", "Line", "Scatter", "Column", "Area"],
      chartOptions: {
        chartType: "Spline",
        dataSeries: [
          {
            name: "بهار",
            data: [1, 2, 3, 4]
          },
          {
            name: "تابستان",
            data: [5, 6, 7, 8]
          }
        ],
        title: "",
        xAxis: ["1385", "1390", "1395", "1400"],
        yAxis: [1000, 3000, 15000, 50000],
        yTitle: ""
      }
    };
  },
  components: {
    HighCharts: AppHighCharts
  }
};
</script>

