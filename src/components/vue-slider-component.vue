<template>
  <div class="slider">
    <vue-slider
      v-model="value"
      :enable-cross="false"
      :min="0"
      :max="1000"
      :interval="50"
      :tooltip="always"
      :tooltipPlacement="top"
      :tooltip-formatter="val => val + ' kr'"
    />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider
  },
  data() {
    return {
      value: 0
    };
  }
};
</script>
<style scoped>
.slider {
  width: 50%;
  margin: 0 auto 00;
}
</style>
