

<template>


  <div class="walkthrough" >
<div class="who-container" v-if="slides.slide1 === 'not done'">
<h2>Välkommen till Donify!</h2>
<p>Börja med att berätta vem du är</p>
  <b-button variant="primary" class="mx-auto" @click="slides.slide1 = 'done'" value="disabled">Privatperson</b-button>
  <b-button variant="primary" class="mx-auto" @click="slides.slide1 = 'done'">Företag</b-button>  
    <b-button variant="primary" class="mx-auto" @click="slides.slide1 = 'done' ">Organisation</b-button>  
<p><u> Gör detta senare </u></p>
</div>
  <div class="fundraiser-container" v-if="slides.slide2 === 'not done' && slides.slide1 === 'done' ">
<h2>Vad vill du donera till?</h2>
  <b-button variant="primary" class="mx-auto" @click="slides.slide2 = 'done'">Välgörenhet</b-button>  
  <b-button variant="primary" class="mx-auto" @click="slides.slide2 = 'done'">Företag</b-button>  
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
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)


  
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            slides: {
                slide1: 'not done',
                slide2: 'not done',
                slide3: 'not done'
            },
            hovers: false
        }
    },
    methods: {
        animation(){
            var tl = gsap.timeline({repeat: 0})
            tl.from('h2 ', { scale:0.3, duration: 1, opacity: 0, ease: 'easeOut'})
            tl.from('p:nth-of-type(1)', { scale:0.3, delay: .4, duration: 1,opacity: 0, ease: 'easeOut'})
            tl.from('.walkthrough .who-container button', { scale:0.3, delay: .5,  duration: 1, stagger: {amount:1.85}, opacity: 0, ease: 'easeOut'})
            tl.from('p:nth-of-type(2)', {scale:0.3, delay: .3, duration: 1, opacity: 0, ease: 'easeOut'})
        },
    },
    mounted(){
        this.animation()
    },
    watch:{
        'slides.slide1': function (val){
            console.log(val)
            if(val === 'done'){
                var tl = gsap.timeline({repeat: 0})
                tl.from('h2 ', { scale:0.3, duration: 1, opacity: 0, ease: 'easeOut'})
                tl.from('p:nth-of-type(1)', { scale:0.3, duration: 1,opacity: 0, ease: 'easeOut'})
                tl.from('.walkthrough .who-container button', { x:-1000, opacity: 0, ease: 'easeOut'})
                tl.from('p:nth-of-type(2)', {scale:0.3, delay: .3, duration: 1, opacity: 0, ease: 'easeOut'})
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
  text-align: center;
  background-color: #324f61;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23dd00ff'/%3E%3Cstop offset='1' stop-color='%23324f61'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ee8fff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ee8fff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
/*background-attachment: fixed;*/
background-size: cover;
background-repeat: no-repeat;
  background-position: center; 
  height: 100vh;
   
}
h2{
  color: white;
margin-top: 22%;
}

p{
  color: white;
}

.who-container{
   display: flex;
  flex-direction: column;
  justify-content: center; 
  /*background-color: cornsilk;*/
  margin: 0 auto;
  width: 67%;

}
.who-container > button{
  border-radius: 30px;
  font-size: 21.5px;
  padding: 18px;
  margin:25px 0px;
  width: 100%;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.1));
}

button:hover{
  background-color: whitesmoke;
}

/* Vem vill du donera till? */
.fundraiser-container{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  /*background-color: cornsilk;*/
  margin: 0 auto;
  width: 67%;
}

.fundraiser-container > button{
  border-radius: 25px;
  padding: 18px;
  margin:25px 0px;
  width: 100%;
}

button{
  background-color:  #1F9EFF 
}

}
</style>
