<template>
  <div class="donationPage">
    <p>Du har valt:</p>
    <p>Hur mycket vill du donera?</p>
    <VueSlider></VueSlider>
    <p>
      150
      <select name="" id=""
        ><option value="sek">Sek</option></select
      >
    </p>
    <p>Hur ofta vill du donera?</p>
    <div class="buttons">
      <div class="upbuttons">
        <button>En gång</button>
        <button>Varje månad</button>
        <button>Varje år</button>
      </div>
      <div class="downbutton">
        <button>Till beatlning</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "@/components/vue-slider-component.vue";
export default {
  name: "Donationpage",
  components: {
    VueSlider
  }
};
</script>

<style scoped>
template {
  background-color: #f1f4f4;
}
button {
  margin-left: 10px;
}
.downbutton {
  margin-top: 200px;
}
@media screen and (max-width: 40.5em) {
  .product-img {
    width: auto;
    float: none;
  }
}
</style>
