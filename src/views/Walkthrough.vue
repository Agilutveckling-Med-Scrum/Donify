<template>
  <div class="walkthrough" >
<h2>Välkommen till Donify!</h2>
<p>Börja med att berätta vem du är</p>
<div class="who-container" style="background-color:whitesmoke">
  <b-button variant="primary" class="mx-auto">Privatperson</b-button>  
  <b-button variant="primary" class="mx-auto">Företag</b-button>  
  <b-button variant="primary" class="mx-auto">Organisation</b-button>  
</div>
<p><u> Gör detta senare </u></p>
  <div class="fundraiser-container" v-if="slides.slide1 === 'done'">
   <b-button variant="primary" class="mx-auto">Välgörenhet</b-button>  
  <b-button variant="primary" class="mx-auto">Företag</b-button>  
  <b-button variant="primary" class="mx-auto">Organisation</b-button>  
  <b-button variant="primary" class="mx-auto">Privatperson</b-button>  
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
                slide1: 'done',
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
  margin: 60px auto;
  height: auto;
  position: relative;
  width: 67%;

}
.who-container > button{
  border-radius: 25px;
  display: block;
  padding: 18px;
  margin:25px 0px;
  width: 100%
}

/* Vem vill du donera till? */
.fundraiser-container{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-content: center; 
  background-color: cornsilk;
  width: 67%;
}

.fundraiser-container > button{
  border-radius: 25px;
  padding: 18px;
  margin:25px 0px;
  text-align: center;
  width: 100%;
}

}




</style>
