
<template>
    <div class="home">
        <div class="container">  
        <div id="logo">
            <img src="../assets/logo.png"
            />
            </div> 

            <div id="picture-1"> 
                <p class="text">
                  <strong>Aktuellt</strong><br>
                   WHO deklarerade i mars 2020 att coronasmittan är en global pandemi där miljontals människor blivit smit­tade och hun­dra­tusen­tals har dött. På bara några månader har coronaviruset blivit ett globalt hot mot allas hälsa.
                    </p>
                    </div>
                    <h4 id="text-under">make someone happy!</h4>
                    <div id="btn-1">
                        <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            @click="Todonera"
                        >
                            Donera nu
                        </button>
                    </div>
              
            
            <div id="toplist">
                <h4>De 5 populäraste på Donify</h4>
                 <p
                        v-for="popular in toplist"
                        v-bind:key="popular"
                        :value="popular.key"
                        >{{popular.number}}{{ popular.name }}
                        </p>
            </div>
            

            <div id="news" >
                <h4>Nyheter</h4>
                  <div id="picture-2">
                    <p class="text">
                      <strong>WWF</strong><br>
                       Earth Hour är världens största miljömanifestation. 2021 är ett viktigt år då världens ledare kommer fatta flera viktiga globa beslut. Var med och gör skillnad för planeten genom att göra förändringar i din vardag.
                    </p>
                    </div>
                    <div id="picture-3">
                    <p class="text">
                      <strong>Startup</strong><br>
                       Startupbolag eller uppstartsbolag kallas de bolag som precis börjat sin verksamhet. Entreprenörerna som äger en startup försöker hitta en skalbar affärsmodell och ständigt utveckla den istället för en fast modell.
                    </p>
                    </div>
                    <div id="btn-2">
                        <button type="button" class="btn btn-secondary">
                            Läs mer
                        </button>
                    </div>
                    
                
            </div>
        </div>  

    <footer id="footer">
      <a href="#" class="fa fa-facebook" />
      <a href="#" class="fa fa-twitter" />
      <a href="#" class="fa fa-instagram" />
      <a href="#" class="fa fa-linkedin" />
    </footer>

    
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </div>


  
</template>


<script>
export default {
    name: 'Home',
    methods: {
        Todonera() {
            this.$router.push({
                name: 'Donationpg1'
            })
            this.$router.push('/all')
        }
    },
    data: function() {
        return {
            toplist: [
                { key: 1, number: 1, name: '. WHO' },
                { key: 2, number: 2, name: '. RäddaBarnen' },
                { key: 3, number: 3, name: '. Unicef' },
                { key: 4, number: 4, name: '. Amnesty International' },
                { key: 5, number: 5, name: '. WWF' },
            ]
        }
    }
}
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

#picture-1 {
  margin-top: 40px; 
position: relative;
padding-top: 300px; 
width: 100%;
background: linear-gradient(to top, white, transparent), url("../assets/facemask_640.jpg"); 
background-size: cover; 
}

#picture-2 {
  margin-top: 20px; 
position: relative;
padding-top: 300px; 
width: 100%;
background: linear-gradient(to top, black, transparent), url("../assets/wwf_640.jpg"); 
background-size: cover; 
color: white; 
}

#picture-3 {
  margin-top: 20px; 
position: relative;
padding-top: 300px; 
width: 100%;
background: linear-gradient(to top, black, transparent), url("../assets/startup_640.jpg"); 
background-size: cover; 
color: white; 
}

.text {
  position: absolute;
  bottom: 2px;
  left: 10px;
}

.home {
    display: flex;
}
#text-under {
    margin-top: 30px;
    margin-bottom: 20px; 
    color: #020D74; 
    text-align: center; 
}
img{
    margin-top: 30px; 
    margin-left: 10px; 
}

#logo {
     text-align: center; 
}

h4 {
  margin-top: 20px;
  margin-bottom: 20px;
}
#btn-1 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 70px;
}
#btn-2 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 100px;
}
#readmore {
    text-align: right;
}

 select {
    display: block;
    margin: 0 auto;
}

#search {
margin-top: 50px; 
margin-bottom: 50px; 
}

#toplist {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 25px; 
    background-color: #D09E54; 
}
#news {
    margin-top: 50px; 
    margin-bottom: 70px;
}


@media (min-width: 950px)  {
    #footer {
    background-color: grey;
    color: white;
    height: 5vh;
    display: flex;
    justify-content: center;
    position: fixed;
    padding: 10px 10px ;
    bottom: 0;
    width: 100%;
    flex-direction: row;
    
    padding-bottom:10;
    margin-right: 0;
    
}
}
#footer a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.5em;
    color: white;
}
// Media Queries
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
    .aboutdonify{
      flex-direction: column;
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }
}
@media screen and (min-width: 720px) {
#picture-1, #picture-2, #picture-3 {
    padding-top: 400px; 
}
img {
    display: none; 
    }
}
@media screen and (min-width: 980px) {
#picture-1 {
    padding-top: 600px; 
    background: linear-gradient(to top, white, transparent), url("../assets/facemask_1920.jpg"); 
    background-size: cover; 
}
#picture-2 {
    padding-top: 600px; 
    background: linear-gradient(to top, black, transparent), url("../assets/wwf_1920.jpg"); 
    background-size: cover; 
}
#picture-3 {
    padding-top: 600px; 
    background: linear-gradient(to top, black, transparent), url("../assets/startup_1920.jpg"); 
    background-size: cover; 
}
#toplist {
    flex-direction: row;
    }
}
</style>