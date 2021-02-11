<template>
  <div class="walkthrough" >
<div class="who-container" style="background-color:whitesmoke" v-if="slides.slide1 === 'not done'">
<h2>Välkommen till Donify!</h2>
<p>Börja med att berätta vem du är</p>
  <b-button variant="primary" class="mx-auto" @click="slides.slide1 = 'done'">Privatperson</b-button>  
  <b-button variant="primary" class="mx-auto" @click="slides.slide1 = 'done'">Företag</b-button>  
  <b-button variant="primary" class="mx-auto" @click="slides.slide1 = 'done' ">Organisation</b-button>  
<p><u> Gör detta senare </u></p>
</div>
<h2>Vad vill du donera till?</h2>
  <div class="fundraiser-container" v-if="slides.slide2 === 'not done' && slides.slide1 === 'done' ">
  <b-button variant="primary" class="mx-auto" @click="slides.slide2 = 'done'">Välgörenhet</b-button>  
  <b-button variant="primary" class="mx-auto" @click="slides.slide2 = 'done'">Företag</b-button>  
  <b-button variant="primary" class="mx-auto" @click="slides.slide2 = 'done'">Organisation</b-button>  
  <b-button variant="primary" class="mx-auto" @click="slides.slide2 = 'done'">Privatperson</b-button>  
  </div>
  <div class="donate-to-container" v-if="slides.slide2 === 'done'  && slides.slide3 === 'not done'">
      <!-- No the this might be deleted at a later stage --> Ska denna sidan vara med, ja eller nej? Tar det i gruppen senare.
  <b-button variant="primary" class="mx-auto" @click=" slides.slide3 = 'done'">Välgörenhet</b-button>  
  <b-button variant="primary" class="mx-auto" @click=" slides.slide3 = 'done'">Företag</b-button>  
  <b-button variant="primary" class="mx-auto" @click=" slides.slide3 = 'done'">Organisation</b-button>  
  <b-button variant="primary" class="mx-auto" @click=" slides.slide3 = 'done'" >Privatperson </b-button>  
  </div>
  </div>
</template>

<script>

export default {
    name: 'Home',
    components: {
    },
    data() {
        return {
            slides:{
                slide1: 'not done',
                slide2: 'not done',
                slide3: 'not done',
            }
        }
    }
}
</script>

<style scoped>

/*Mobile*/
/*vem är du? val*/
@media only screen 
and (min-device-width: 375px) 
and (max-device-width: 812px) {

.walkthrough{
  display: flex;
  flex-direction: column;
   
}
h2{
margin-top: 22%;}

.who-container{
   display: flex;
  flex-direction: column;
  justify-content: center; 
  background-color: cornsilk;
  margin: 0 auto;
  width: 67%;

}
.who-container > button{
  border-radius: 25px;
  padding: 18px;
  margin:25px 0px;
  width: 100%;
}

/* Vem vill du donera till? */
.fundraiser-container{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  background-color: cornsilk;
  margin: 0 auto;
  width: 67%;
}

.fundraiser-container > button{
  border-radius: 25px;
  padding: 18px;
  margin:25px 0px;
  width: 100%;
}

}




</style>
