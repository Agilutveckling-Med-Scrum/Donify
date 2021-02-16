
<template>
  <div class="home">
<div class="home-container" >
  <h2>Om Donify</h2>
   <b-button variant="primary" class="mx-auto" @click="donerasida">Donera Nu</b-button>

   <div class="row">
            <div class="col-3" >
            <h4>Toplista</h4>
            <select v-model="topLista">
                <option v-for="popular in toplist" v-bind:key="popular" :value="popular.key">{{popular.name}}</option>
                
            </select>
          </div>
           <div class="col-4">
            <h4>Nyheter</h4>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><b-button variant="primary" class="mx-auto" >Veta Mer »</b-button></p>
          </div>
   </div>
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
</div>
  </div>
</template>
<script>
export default {
    name:'home',
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
    }  ,
    methods: {
        donerasida() {
            this.$router.push({
                name: 'Donerasida'
            })
        }
    },
}
</script>
<style scoped>
 
h2{
  color: white;
margin-top: 2%;
}

.home{
 display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #324f61;
}
/*.home {
 display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 50px;
  background-color: #2196F3;
  padding: 10px;
}*/
#footer {
  background-color: #324f61;
  color: black;
  height: 6vh;
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
}

.row{
  color: rgb(245, 231, 231);
}

 .row {
display: grid;

  grid-row: col -4px ;
  grid-gap: 50px;
  background-color: #2196F3;
  padding: 10px;
}
.col-3{
  justify-content: right;
float: right;;
}
#footer a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  color: black;
}
 b-button {
  width: 100px;
  height: 30px; 
  border-radius: 8%;
  margin: 20px auto;
}
</style>

