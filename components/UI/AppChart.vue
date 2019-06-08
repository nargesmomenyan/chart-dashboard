<template>
  <v-container fluid>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      auto-draw
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot/>
    </v-sparkline>
  </v-container>
</template>

<script>
export default {
  name: "AppHighChart",
  props: {}
};
</script>