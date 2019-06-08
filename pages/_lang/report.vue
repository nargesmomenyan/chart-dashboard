<template>
  <v-container fluid>
    <v-sparkline
      auto-draw
      :value="value"
    ></v-sparkline>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
      value: [100, 200, 300, 400, 900, 400],
      padding: 8,
      readius: 10,
      autoDraw:true,
      gradients: [
        ["#222"],
        ["#42b3f4"],
        ["red", "orange", "yellow"],
        ["purple", "violet"],
        ["#00c6ff", "#F0F", "#FF0"],
        ["#f72047", "#ffd200", "#1feaea"]
      ]
    
  })
};
</script>

