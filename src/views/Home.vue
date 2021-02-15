
<template>
  <div class="home">
    <div class="home-container" style="background-color:whitesmoke" >
   
   
     <h2>OmDonify</h2>
    
    <section class="section">
            <div class="container-fliud">
                  
                <b-button @click="walkthrough">Donera Nu
                  
                </b-button>  
            </div> 
            
        </section>
        <div class="row">
         <div class="col-lg-4">
              <h4>Toplista</h4>
               <select v-model="topLista">
                <option v-for="popular in toplist" v-bind:key="popular" :value="popular.key">{{popular.name}}</option>
                
            </select>
    </div>
     
     
            <div class="col-lg-4">
            <h2>Nyheter</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. .</p>
            <p><b-button variant="primary" class="mx-auto">Veta Mera»</b-button></p>
            </div> </div>
    </div>    
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
  
</template>
<script>

export default {
    name:'Home',
    methods: {
        walkthrough() {
            this.$router.push({
                name: 'Walkthrough'
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

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  text-align: center
   
}
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
  h2{
margin-top: 2%;}
  #footer a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
    color: white;
  }

</style>

