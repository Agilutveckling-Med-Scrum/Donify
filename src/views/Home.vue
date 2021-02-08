<template>
  <div class="home">
    <HelloWorld></HelloWorld>
    <Donationpage></Donationpage>
    <Donerasida></Donerasida>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Donationpage from "@/components/donationpage.vue";
import Donerasida from "../components/donerasida.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Donationpage,
    Donerasida
  }
};
</script>
