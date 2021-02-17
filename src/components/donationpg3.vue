<template>
    <div class="donationPage3">
        <div class="info">
            <p>Idag donerade du</p>
            <p>
                <strong
                    >{{ this.$store.state.numvalue }}
                    {{ this.$store.state.selected }}</strong
                >
            </p>
            <p>till <button class="vald">WWF</button></p>
        </div>
        <div class="meddelande">Meddelande från WWF</div>
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.donationPage3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    padding: 20px;
    background: #f7f2fc;
}

.info {
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.meddelande {
    height: 280px;
    border-radius: 5%;
    background-color: #ffffff;
    padding: 20px 20px;
}
.vald {
    font-size: 24px;
    font-weight: 900;
    height: 80px;
    width: 80px;
    background-color: #ffffff;
    border: transparent;
    border-radius: 100px;
}
strong {
    font-size: 30px;
}
#btn {
    width: 150px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin: 40px auto;
    color: rgb(255, 255, 255);
    border: transparent;
    border-radius: 100px;
    background-color: #8a2be2;
    box-shadow: 0px 2px 0px #6f01d6;
}

#btn:focus {
    box-shadow: 0 0 #ba8cb5;
    background-color: #9d55e0;
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
