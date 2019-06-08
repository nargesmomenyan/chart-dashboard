<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-space-between>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            <h4></h4>
          </v-card-title>
          <v-card-text>
            <div>
              <highcharts class="chart" :options="callBasedOnSpecialistStats"></highcharts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            <h4></h4>
          </v-card-title>
          <v-card-text>
            <div>
              <highcharts class="chart" :options="callStats"></highcharts>
              <!-- <app-high-charts :inputOptions="chartOptions"></app-high-charts> -->
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            <h4></h4>
          </v-card-title>
          <v-card-text>
            <div>
              <highcharts class="chart" :options="physicianPatiensStats"></highcharts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

       <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            <h4></h4>
          </v-card-title>
          <v-card-text>
            <div>
              <highcharts class="chart" :options="revenueStats"></highcharts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import Highcharts from "highcharts";
import AppHighCharts from "~/components/UI/Charts/app-high-charts";
import * as data from "~/assets/data.js";
export default {
  data() {
    return {
      //   chartTypes: ["Spline", "AreaSpline", "Line", "Scatter", "Column", "Area"],
      callBasedOnSpecialistStats: data.callBasedOnSpecialistStats,
      callStats: data.allCallStats,
      physicianPatiensStats: data.physicianPatiensStats,
      revenueStats:data.revenueStats
    };
  },
  components: {
    AppHighCharts
  }
};
</script>

