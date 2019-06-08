<template>
  <div>
    <h2>{{$t("services.title")}}</h2>
    <v-form>
      <v-container>
        <v-select
          :label="$t('services.DeliveryType')"
          v-model="deliveryType"
          :items="deliveryTypes"
        ></v-select>

        <v-select
          :label="$t('services.PackagingType')"
          v-model="packagingType"
          :items="packagingTypes"
        ></v-select>

        <v-select
          :label="$t('services.time')"
          v-model="deliveryWindow"
          :items="deliveryWindows"
        ></v-select>

        <v-btn class="previous" @click="previous">{{$t("stepper.previous")}}</v-btn>
        <v-btn class="submit" color="primary" @click="submit">{{$t("stepper.nextStep")}}</v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>

export default {
  data: () => ({
    deliveryType: "",
    packagingType: "",
    deliveryWindow: "",
    deliveryTypes: [
      "Overnight Delivery (within 48 hours)",
      "Express Delivery (within 5 working days)"
    ],
    packagingTypes: ["Regular Packaging", "Oversized Packaging"],
    deliveryWindows: ["Morning", "Afternoon"]
  }),
  methods: {
    submit() {
      const info = [this.deliveryType, this.packagingType, this.deliveryWindow];
      this.$emit("servicesWasSet", info);
    },
    previous() {
      this.$emit("previous", "Services");
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
