<template>
  <div class="home">
    <HelloWorld></HelloWorld>
    <Donationpage></Donationpage>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Donationpage from "@/components/donationpage.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Donationpage
  }
};
</script>
