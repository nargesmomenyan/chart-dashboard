<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-space-between>
      <v-flex xs6>
        <v-card>
          <v-card-text>
            <div>
              <app-high-charts :inputOptions="callBasedOnSpecialistStats"></app-high-charts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-text>
            <div>
              <app-high-charts :inputOptions="callStats"></app-high-charts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-text>
            <div>
              <app-high-charts :inputOptions="physicianPatiensStats"></app-high-charts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card>
          <v-card-text>
            <div>
              <app-high-charts :inputOptions="loadRrevenueStats"></app-high-charts>
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
      callBasedOnSpecialistStats: data.callBasedOnSpecialistStats,
      callStats: data.allCallStats,
      physicianPatiensStats: data.physicianPatiensStats,
      revenueStats: data.revenueStats,
      test: data.test
    };
  },
  components: {
    AppHighCharts
  },
  computed: {
    loadRrevenueStats() {
      var chartData = this.revenueStats;

      this.$store.commit("SetRevenueStats", {
        name: "هزینه‌های جانبی ",
        data: [1, 2, 5, 9, 2, 3]
      });
      chartData.series.push(this.$store.getters.getRevenueStats);

      return chartData;
    }
  }
};
</script>

