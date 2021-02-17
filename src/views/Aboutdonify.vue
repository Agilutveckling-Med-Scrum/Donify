<template>

<div class="aboutdonify">
    <div class="container">
        <h2>OmDonify</h2>
        <section class="section">
            <div class="container-fliud">
                <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    @click="Todonera"
                >
                    Donera
                </button>
            </div>

        </section>
        <div class="row">
            <div class="col-lg-4">

            <h2>Nyheter</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. .</p>
            <p><b-button variant="primary" class="mx-auto">Veta Mera»</b-button></p>
          </div>
           
            <div class="col-lg-4">
              <h4>Toplista</h4>
               <select v-model="topLista">
                <option v-for="popular in toplist" v-bind:key="popular" :value="popular.key">{{popular.name}}</option>
                
            </select>
            
             
          </div>
         </div>
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

<style scoped>
.aboutdonify {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  flex-direction: column;
}
h2 {
  text-align: center; 
  padding-bottom: 20px; 
}


b-button {
    min-width: 160px;
    height: 40px;
    position: relative;
    margin: 10px 1px;
    display: inline-block;
    vertical-align: middle;

}


body {
  background-color: #666666 ;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}


</style>

