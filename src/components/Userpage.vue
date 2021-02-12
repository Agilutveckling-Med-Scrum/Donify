<template>
  <div id="userpage">
    <h2>Min sida</h2>
    <h3>Insamlade donationer: 23 750 SEK</h3>
    <button id="btn">Begär utbetalning</button>
     <p id="contact">Kontakta oss för för frågor eller ändringar</p>
     <div id="data">
       <hr>
    <p><strong>Kontaktuppgifter</strong></p>
    <form>
      <label>
     För- och efternamn: 
   <input v-model="username" placeholder="Maria Nilsson">
   </label>
     <label>
     Adress: 
   <input v-model="username" placeholder="Företagsgatan 5">
   </label>
    <label>
     Telefonnummer: 
   <input v-model="username" placeholder="070-0000000">
   </label>
    <label>
     E-postadress: 
   <input v-model="username" placeholder="foretag@foretag.se">
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
    <button>Spara ändringar</button>
   </form>
   </div>
    </div>
</template>



<style scoped>
#userpage {
  margin-top: 50px; 
  margin-left: 20px; 
}

#data {
  margin-top: 50px; 
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
  color: #718EFF; 
}

h3 {
  margin-top: 30px;
   margin-bottom: 10px;
   font-size: 20px; 
}

button {
  margin-top: 20px; 
  margin-left: 15px; 
}

#btn {
  margin-bottom: 30px; 
}

</style>