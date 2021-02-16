
<template>
  <div class="home">
    <div class="home-container">
 <h1 >This is a Donate Page</h1>

                
                 
 <p>
    <b-button variant="primary" class="mx-auto" @click="Todonera">Donera Nu</b-button>
 </p>

 <div class="row">
            <div class="col-lg-4">
                <h2>Nyheter</h2>
                <p>
                    Donec sed odio dui. Etiam porta sem malesuada magna mollis
                    euismod. Nullam id dolor id nibh ultricies vehicula ut id
                    elit. Morbi leo risus, porta ac consectetur ac, vestibulum
                    at eros. Praesent commodo cursus magna.
                </p>
                <p>
                    <b-button variant="primary" class="mx-auto" >Veta Mer »</b-button>
                    
                </p>
            </div>
          
            <div class="col-lg-4">
                <h4>Toplista</h4>
                <select v-model="topLista">
                    <option
                        v-for="popular in toplist"
                        v-bind:key="popular"
                        :value="popular.key"
                        >{{ popular.name }}</option
                    >
                </select>

               
               
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
  </div>  
</template>
<script>

export default {
    name: 'Home',
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
    },
    components: {}
}

</script>

<style scoped>


h1 {
    display: flex;
    justify-content: space-between;
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

#footer a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
    color: white;
}

</style>
