<template>
  <div class="walkthrough" style="background-color: grey">
<h2>Välkommen till Donify!</h2>
<p>Börja med att berätta vem du är</p>
<div class="button-container" style="background-color:white">
  <b-button variant="primary" class="mx-auto">Privat person</b-button>  
  <b-button variant="primary" class="mx-auto">Företag</b-button>  
  <b-button variant="primary" class="mx-auto">Organisation</b-button>  
</div>
  </div>
</template>

<script>

export default {
    name: 'Home',
    components: {

    }
}
</script>

<style scoped>

/*Mobile*/

@media only screen 
and (min-device-width: 375px) 
and (max-device-width: 812px) {

.walkthrough{
  position: absolute;
   height: 100%;
   width: 100%;
}
h2{
margin-top: 22%;}

.button-container{
  margin: 0 auto;
  height: auto;
  position: relative;
  width: 67%;

}
.button-container > button{
  border-radius: 25px;
  display: block;
  padding: 18px;
  margin:25px 0px;
  width: 100%
}
}




</style>
