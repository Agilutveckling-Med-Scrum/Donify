<<<<<<< HEAD
<template>
  <div class="home">
    <Questions />
    <About />
  </div>
</template>

<script>
import Questions from '@/components/Questions.vue'
import About from '@/views/About.vue'

export default {
    name: 'Home',
    components: {
        Questions,
        About
    }
}
</script>

<style scoped></style>
=======
<template>
    <div class="walkthrough">
        <div class="who-are-you" v-if="slides.slide1 === 'not done'">
            <h2>Välkommen till Donify!</h2>
            <p>Börja med att berätta vem du är</p>
            <div class="who-container">
                <b-button
                    variant="primary"
                    class="mx-auto"
                    @click="slides.slide1 = 'done'"
                    >Privatperson</b-button
                >
                <b-button
                    variant="primary"
                    class="mx-auto"
                    @click="slides.slide1 = 'done'"
                    >Företag</b-button
                >
                <b-button
                    variant="primary"
                    class="mx-auto"
                    @click="slides.slide1 = 'done'"
                    >Organisation</b-button
                >
            </div>
            <p><u> Gör detta senare </u></p>
        </div>
        <div class="fundraiser-container" v-if="slides.slide1 === 'done'">
            <h2>Donera till...?</h2>
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
    components: {},
    data() {
        return {
            slides: {
                slide1: 'not done',
                slide2: 'not done',
                slide3: 'not done'
            }
        }
    }
}
</script>

<style scoped>
/*Mobile*/
/*vem är du? val*/
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
    .walkthrough {
        display: flex;
        flex-direction: column;
    }
    h2 {
        margin-top: 82.5px;
    }

    .who-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: cornsilk;
        margin: 0 auto;
        width: 67%;
    }
    .who-container > button {
        border-radius: 25px;
        padding: 18px;
        margin: 25px 0px;
        width: 100%;
    }

    /* Vem vill du donera till? */
    .fundraiser-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: cornsilk;
        margin: 0 auto;
        width: 67%;
    }

    .fundraiser-container > button {
        border-radius: 25px;
        padding: 18px;
        margin: 25px 0px;
        width: 100%;
    }
}
</style>
>>>>>>> da259e3e33d40938e190c62082de3c3c159a604e
