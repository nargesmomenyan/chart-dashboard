<template>
  <div>
    <v-menu
      v-model="datePickerMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <template v-slot:activator="{on}">
        <v-text-field v-model="persianDate" :label="label" prepend-icon="event" readonly v-on="on"></v-text-field>
      </template>
      <v-date-picker
        v-model="gregorianDate"
        @input="datePickerMenu = false"
        @change="save"
        v-bind="$attrs"
        v-on="$listeners"
        locale="fa"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import moment from "moment-jalaali";

export default {
  data: () => ({
    datePickerMenu: false,
    persianDate: ""
  }),
  props: {
    gregorianDate: {
    },
    label: ""
  },
  methods: {
    save(inputDate) {
      this.persianDate = moment(inputDate).format("jYYYY/jMM/jDD");
      this.$emit("selectedDate", {
        gregorianDate: this.gregorianDate,
        Text: this.persianDate
      });
    }
  },
  created() {
    console.log(this.gregorianDate);
     this.persianDate = moment(this.value).format("jYYYY/jMM/jDD");
  }
};
</script>

