<template>
  <div class="donerasida">
    <p>Idag donerade du</p>
    <p>150</p>
    <p>till</p>
    <p>Meddalnde från WWF</p>
    <button>Till betalning</button>
  </div>
</template>

<script>
export default {
    name: 'Donerasida'
}
</script>

<style scoped>
.donerasida {
  display: flex;
  flex-direction: column;
}
.meddelande {
  height: 300px;
  background-color: rgb(196, 192, 192);
}
button {
  width: 100px;
  height: 30px; 
  border-radius: 8%;
  margin: 20px auto;
}
</style>

<script>
export default {
  name: "Donerasida"
};
</script>

<style scoped>
.donerasida {
  display: flex;
  flex-direction: column;
}
</style>
