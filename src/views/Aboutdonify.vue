
<template>
<div class="aboutdonify">
 
   <h2>OmDonify</h2>
    <section class="section">
            <div class="container-fliud">
                  
                <button @click="home">Donera
                  
                </button>  
            </div> 
        </section>
 <div class="row">
            <div class="col-lg-4">
            <h2>Nyheter</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. .</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
            <div class="col-lg-4">
             <h2>Updates</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. cursus magna.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <h4>Toplista</h4>
               <select v-model="topLista">
                <option v-for="popular in toplist" v-bind:key="popular" :value="popular.key">{{popular.name}}</option>
                
            </select>
            
              <h2>Notifications</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.Praesent commodo cursus magna.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
         </div>
</div>
</template>
<script>
export default {
    methods: {
        home() {
            this.$router.push({
                name: 'Home'
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

<style>
.aboutdonify {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  flex-direction: column;
}
h2 {
  text-align: center; 
  padding-bottom: 20px; 
}

.btn-group {
  color : #666666;
  min-width: 160px;
  height: 40px;
  position: relative;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
}
.btn-group a:hover {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #666666 ;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}



</style>