<template>
  <div class="home">
    <h1>Donate Idag</h1>
    <HelloWorld msg="Welcome to Donate Page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: space-between;
}
</style>
