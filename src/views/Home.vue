<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer id="footer">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-linkedin"></a>
    </footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <h1>Donate Idag</h1>
    <HelloWorld msg="Welcome to Donate Page" />
    <b-button>Button1</b-button>
    <b-button>Button2</b-button>
    <b-button>Button3</b-button>
    <b-button>Button4</b-button>
    <Donerasida> </Donerasida>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Donerasida from "@/components/donerasida.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Donerasida
  }
};
</script>

<style scoped>
#footer {
  background-color: grey;
  color: white;
  height: 5vh;
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
}

h1 {
  display: flex;
  justify-content: space-between;
}
#footer a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  color: white;
</style>