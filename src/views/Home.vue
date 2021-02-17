<template>

  <div class="home">
    
     <h1>OmDonify</h1>
    <div class="home-container" >
                <b-button @click="Todonera">Donera Nu    
                </b-button>  
        <div class="row">
         <div class="col-lg-3">
              <h3>Toplista</h3>
               <select v-model="topLista">
                <option v-for="popular in toplist" v-bind:key="popular" :value="popular.key">{{popular.name}}</option>
                
            </select>
    </div>
     
     
            <div class="col-lg-4">
            <h4>Nyheter</h4>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. .</p>
            <p><b-button variant="primary" class="mx-auto">Veta Mera»</b-button></p>
            </div> </div>
     
    <footer id="footer">
      <a href="#" class="fa fa-facebook" />
      <a href="#" class="fa fa-twitter" />
      <a href="#" class="fa fa-instagram" />
      <a href="#" class="fa fa-linkedin" />

 

    </footer>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

  </div>
  
 </div>  
  
</template>
<script>

export default {

    name:'Home',
    methods: {
        Todonera() {
            this.$router.push({
                name: 'Donationpg1'
            })
        }
    }
    ,
    data: function() {
        return {
   
            topLista: [],
            
   
            toplist: [
                {key: 1, name: 'WHO'},
                {key: 2, name: 'RäddaBarnen'},
                {key: 3, name: 'Unicef'},
                {key: 4, name: 'Amnesty International'},
                {key: 5, name: ''},
                {key: 6, name: ''},
                {key: 7, name: ''}
            ]
        }
    }  
    
    
  

}

</script>

 
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');


.home{
  font-family: 'Open Sans', sans-serif;
   border-radius: 30px;
  font-size: 21.5px;
  padding: 18px;
  margin:25px 0px;
  width: 100%;
  height: 100%;
 display: flex;
 
  flex-direction: column;
  text-align: center;
  background-color: #324f61;
  align-items: center;
   justify-content: center;
    margin: 0 auto;
}
.home-container{
  flex-direction: column;
  
  font-family: 'Open Sans', sans-serif;
     border-radius: 20px;
  font-size: 21.5px;
  align-items: center;
   font-weight: 800;
    padding: 10px;
  margin:25px 0px;
  width: 100%;
}
b-button {
  margin-top: 20px; 
  margin-left: 15px; 
}

  
 h1{
   margin-top: 22%;
    font-family: 'Open Sans', sans-serif;
    color:beige;
   flex-grow: 1;
    margin-top: 2%;}
    .row{
      display: inline;
      flex-direction: row;
    }
  
.col-lg-4 {

background-color: bisque;
flex-direction: column;
flex-basis: 100px;

}

.col-lg-3{
flex-grow: 0;
flex-direction: column;
  background-color: bisque;
  flex-basis: 1000px;


}
 select {
    display: block;
    margin: 0 auto;
}

 #footer {

    background-color: grey;
    color: white;
    height: 5vh;
    display: flex;
    justify-content: center;
    position: fixed;
    padding: 10px 10px ;
    bottom: 1em;
    width: 70%;
}

#footer a {

    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.5em;
    color: white;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
    .home{
      flex-direction: column;
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }
}
</style>
