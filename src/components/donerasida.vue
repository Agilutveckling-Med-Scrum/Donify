<template>
  <div class="donerasida">
    <p>Idag donerade du</p>
    <p><strong>150 SEK</strong></p>
    <p>till <span>WWF</span></p>
    <div class="meddelande">Meddalnde från WWF</div>
    <button>Till beatlning</button>
  </div>
</template>

<script>
export default {
  name: 'Donerasida'
};
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
