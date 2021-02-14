<template>
    <div class="donationPage3">
        <p>Idag donerade du</p>
        <p>
            <strong
                >{{ this.$store.state.numvalue }}
                {{ this.$store.state.selected }}</strong
            >
        </p>
        <p>till <span>WWF</span></p>
        <div class="meddelande">Meddalnde från WWF</div>
        <button id="btn" type="button" @click="Tohome">Till startsidan</button>
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
    margin: 20px auto;
    font-size: 14px;
    border: transparent;
    background-color: #cb99c5;
    box-shadow: 0px 2px 0px #ad83a8;
}
#btn:focus {
    box-shadow: 0 0 #ba8cb5;
    background-color: #b663ab;
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
