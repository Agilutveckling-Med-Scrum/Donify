
<template>
  <div class="valgorenheter-container">
        <h1>Välgörenheter</h1>
        <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search Charity.."/>
        
      </div>
      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="$router.push('/donationpg1')">Donera 
                    </button>
        
    </div>
</template>
<script>
import Charities from '../components/Charities.vue'

export default {
    
   
    name: 'Valgorenheter1',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Charities
    },
    data : function() {
        return {
        
            
            search: ''
        }
    }
    
    
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

h1 {
    margin: 20px 0px 55px 0px;
    font: 'poppins';
}

p {
    font: 'OpenSans';
}

.valgorenheter-container {
    display: flex;
    /*flex-direction: column;*/
    margin: 0 auto;
    text-align: center;
    width: 80vw;
    height: 100vh;
    top: 0;
    z-index: 1;
}
button{
 text-align: center;
    margin-top: 10px;
    margin-bottom: 70px;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
    .valgorenheter-container {
    display: flex;
    /*flex-direction: column;*/
    margin: 0 auto;
    text-align: center;
    width: 80vw;
    height: 100vh;
    top: 0;
    z-index: 1;
}

}

</style>