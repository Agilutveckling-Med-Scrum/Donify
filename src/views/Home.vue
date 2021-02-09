<template>
  <div class="home">
    <h1>Donate Idag</h1>
    <Home msg="Welcome to Donate Page" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "Home",
  components: {
    Home
  }
};
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: space-between;
}
</style>
