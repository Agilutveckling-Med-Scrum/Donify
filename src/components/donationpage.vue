<template>
  <div class="donationPage">
    <p>Du har valt:</p>
    <p>Hur mycket vill du donera?</p>
    <VueSlider/>
    <p>
      150
      <select v-for="item in list" v-bind:key="item.id">
        <option>{{ item.rates.SEK }}</option>
      </select>
    </p>
    <p>Hur ofta vill du donera?</p>
    <div class="buttons">
      <div class="upbuttons">
        <button>En gång</button>
        <button>Varje månad</button>
        <button>Varje år</button>
      </div>
      <div class="downbutton">
        <button>Till betalning</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import VueSlider from "@/components/vue-slider-component.vue";

export default {
  name: "Donationpage",
  data() {
    return {
      list: undefined
    };
  },
  methods: {
    currencyApi() {
      Vue.axios.get("https://api.exchangeratesapi.io/latest").then(response => {
        this.list = response.rates;
        console.log(response.rates);
      });
    }
  },
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
