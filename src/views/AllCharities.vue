<template>
    <div class="charity-container">
        <h1>Alla Välgörenheter</h1>
        <Charities />
    </div>
</template>

<script>
import Charities from '../components/Charities.vue'

export default {
    name: 'Charity',
    components: {
        Charities
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');

h1 {
    margin: 20px 0px 55px 0px;
    font: 'poppins';
}

p {
    font: 'OpenSans';
}

.charity-container {
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
