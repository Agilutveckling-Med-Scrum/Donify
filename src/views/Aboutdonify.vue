<template>


  <div class="about">
    <h2 class="heading">Om Donify</h2>
    <div class="container">
      <img class="balloons" src="../assets/Balloons-small.png" alt="Balloons">
      <div class="centered">Give a festive Gift</div>
    </div>
    <h2>Donify är världens mest betrodda plattform online för insamling till välgörenhet</h2>
    <p>
      Donify hjälper organisationer att uppnå sina mål med hjälp av användarnas ekonomiska stöd. Donationstjänsten kan hjälpa samt stötta slutkunder i den breda skalan. Allt från att hjälpa samhällets mest utsatta med medicin, till ett nystartat företag att uppnå sin dröm. 
      Donify samarbetar tätt med välkända välgörenhetsorganisationer och stämmer regelbundet av hur donationerna kommer till nytta.
    </p>
    <div class="sponsors">
    <img class="happyman" alt="happy-man" src="../assets/happyman.png">
    <img class="quote" alt="quote-from-cancerfonden" src="../assets/quote-cancer.png">
    <img class="marie" src="../assets/mariecurie.png">
    </div>
    <img class="map" src="../assets/world.png">
    <div class="circle1">
      <p class="circletx1">Härifrån kan du donera</p>
    </div>
    <div class="circle2">
      <p class="circletx2">Donify-kontor</p>

    </div>
    <div class="circle3">
      <p class="circletx3">Ej verksamma</p>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Aboutdonify',
    data: function() {
        return {
            topLista: [],
            toplist: [
                { key: 1, name: 'WHO' },
                { key: 2, name: 'RäddaBarnen' },
                { key: 3, name: 'Unicef' },
                { key: 4, name: 'Amnesty International' },
                { key: 5, name: '' },
                { key: 6, name: '' },
                { key: 7, name: '' }
            ]
        }
    },
    // add method to click to donationpage
    methods: {
        Todonera() {
            this.$router.push({
                name: 'Donationpage1'
            })
        }
    }
}
</script>


<style scoped lang="scss">

/* Raleway */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
/* Open sans */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@media screen and (min-width: 375px) and (max-width: 812px) {
.aboutdonify {
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    flex-direction: column;
}
}
.balloons {
  width: 100%;
  height: auto;
}
p {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  text-align: left;
  margin: 25px;
  color:rgb(53, 52, 52);
}
.sponsors {
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
}
.container {
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: type 3s steps(14);
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Raleway', san-serif;
  font-size: 40px;
  border-right:4px solid red;
  color: black;
  width: 14ch;
  text-align: center;
}
@keyframes type {
  0% {
    width: 0ch;
  }
  100% {
    width: 14ch;
  }

}
h2 {
  font-family: 'Raleway', san-serif;
  font-size: 31.25px;
  text-align: left;
  margin: 25px;
  justify-content: center;
  color:rgb(53, 52, 52);
}





.btn-group {

    min-width: 160px;
    height: 40px;
    position: relative;
    align-items: center;
    margin: 10px 1px;
    display: inline-block;
    vertical-align: middle;
}



body {
    background-color: #666666;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
}
.heading {
  text-align: center;
}
.happyman {
  margin: 30px;
}
.quote {
  margin: 30px;
}
.marie {
  margin: 30px;
}
.map {
  margin-top: 30px;
  width: 100%;
  height: auto;
}
.circle1 {
  height: 15px;
  width: 15px;
  background-color: #8A2BE2;
  border-radius: 50%;
  text-align: center;
  margin:40px;
  margin-bottom: 0px;
}
.circle2 {
  height: 15px;
  width: 15px;
  background-color: #FF00FF;
  border-radius: 50%;
  text-align: center;
  margin-left: 40px;
  margin-bottom: 10px;
  margin-bottom: 0px;
}
.circle3 {
  height: 15px;
  width: 15px;
  background-color: #1F9EFF;
  border-radius: 50%;
  text-align: center;
  margin-left: 40px;
  margin-bottom: 10px;
  margin-bottom: 100px;
}
.circletx1 {
  width: 250px;
  margin-top: 0px;
}
.circletx2 {
  width: 250px;
}
.circletx3 {
  width: 250px;

}
@media screen and (min-width:813px) and (max-width: 980px) {
  .aboutdonify {
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    flex-direction: column;
}
}
</style>
