<template>
    <div class="donationPage3">
        <p>Idag donerade du</p>
        <p>
            <strong>{{ this.$store.state.numvalue }} SEK</strong>
        </p>
        <p>till <span>WWF</span></p>
        <div class="meddelande">Meddalnde från WWF</div>
        <button type="button" @click="Tohome">Till startsidan</button>
    </div>
</template>

<script>
export default {
    methods: {
        Tohome() {
            this.$router.push({
                name: 'Home'
            })
        }
    },
    name: 'Donationpage3'
}
</script>

<style scoped>
.donationPage3 {
    background-color: #f1f4f4;
    display: flex;
    flex-direction: column;
}
.meddelande {
    height: 300px;
    background-color: rgb(196, 192, 192);
}
button {
    width: 150px;
    height: 30px;
    border-radius: 8%;
    margin: 20px auto;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
    .donationPage3 {
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }
}
</style>
