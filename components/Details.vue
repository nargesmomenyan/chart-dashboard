<template>
  <div>
    <h2>{{$t("details.title")}}</h2>
    <v-form>
      <v-container>
        <v-text-field
          :label="$t('details.packageDetails')"
          v-model="packageDetails"
        ></v-text-field>

        <v-text-field
          :label="$t('details.weight')"
          type="number"
          v-model="weight"
        ></v-text-field>

        <v-text-field
          :label="$t('details.width')"
          type="number"
          v-model="width"
        ></v-text-field>

        <v-text-field
          :label="$t('details.Height')"
          type="number"
          v-model="height"
        ></v-text-field>

        <v-text-field
          :label="$t('details.Length')"
          type="number"
          v-model="length"
        ></v-text-field>

        <v-btn class="previous" @click="previous">{{$t("stepper.previous")}}</v-btn>
        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>

export default {
  data: () => ({
    packageDetails: "Complete Workstatsion (Monitor)",
    weight: 25,
    width: 110,
    height: 90,
    length: 150
  }),
  
  methods: {
    submit() {
      const info = [
        this.packageDetails,
        this.weight,
        this.width,
        this.height,
        this.length
      ];
      this.$emit("detailInfoWasSet", info);
    },
    previous() {
      this.$emit("previous", "Details");
    }
  }
};
</script>
<style>
.submit {
  float: left;
}
.previous {
  float: right;
}
</style>
