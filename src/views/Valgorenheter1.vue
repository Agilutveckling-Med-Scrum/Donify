
<template>
  <div class="valgorenheter-container">
        <h1>Välgörenheter</h1>
        <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search Charity.."/>
        
      </div>
       <p @click="$router.push('/charities')"><u> Donify</u></p>  
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
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    width: 80vw;
    height: 100vh;
    top: 0;
    z-index: 1;
}
</style>