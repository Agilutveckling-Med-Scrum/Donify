<template>
  <div id="userpage">
    <h2>Min sida</h2>


    <div id="info">
    <h4>Insamlade donationer:</h4>
    <h4 style="color:#1F9EFF"><strong>23 750 SEK</strong></h4>
    <b-button variant="secondary" class="mx-auto" id="btn-1" >Begär utbetalning</b-button> 
     <p id="contact">Kontakta oss för för frågor eller ändringar</p>
     </div>


     <div id="data">
    <p><strong>Kontaktuppgifter</strong></p>
    <form>
      <label>
     För- och efternamn: 
   <input placeholder="Maria Nilsson">
   </label>
     <label>
     Adress: 
   <input placeholder="Företagsgatan 5">
   </label>
    <label>
     Telefonnummer: 
   <input placeholder="070-0000000">
   </label>
    <label>
     E-postadress: 
   <input placeholder="foretag@foretag.se">
   </label>
    </form>

   <p id="login"><strong>Inloggningsuppgifter</strong></p>
   <form>
   <label>
     Användarnamn:
   <input v-model="username" placeholder="foretag@foretag.se">
   </label>
   <label>
     Nytt lösenord: 
   <input v-model="password" placeholder="Lösenord" type="password"/>
   </label>
   <label>
     Upprepa nytt lösenord: 
   <input v-model="password" placeholder="Lösenord" type="password"/>
   </label>

    <b-button variant="primary" class="mx-auto" id="btn-2" >Spara ändringar</b-button>
   </form>
   </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    }
}
</script>

<style scoped lang="scss">
* {
  margin-left:0 !important;
}


#userpage {
  margin-top: 40px; 
  margin-left: 20px; 
}

#info {
  display: block; 
  background-color: #020D74;
  color: white; 
  padding-top: 20px; 
  padding-left: 20px; 
  padding-bottom: 10px;
}

#data {
  margin-top: 50px; 
  margin-left: 20px !important; 
  display: block; 
}

label, input {
  display: block; 
}

label {
  margin-left: 15px; 
}

input {
 margin-bottom: 20px; 
 padding: 3px;
 border: 2px solid #CCCCCC;
 border-radius: 4px; 
}

#login {
margin-top: 40px; 
}

#contact { 
  cursor: pointer; 
  color: #1F9EFF; 
  margin-top: 30px; 
}

h2 {
  text-align: center; 
  margin-bottom: 20px; 
}

h4 {
  margin-top: 30px;
  margin-bottom: 30px;
}

#btn-1 {
  margin-top: 10px; 
  margin-bottom: 30px; 
}

#btn-2 {
  margin-top: 20px; 
  margin-bottom: 100px; 
}

</style>