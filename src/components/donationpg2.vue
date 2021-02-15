<template>
    <div class="donationPage2">
        <p>Du har valt: <button class="vald">WWF</button></p>
        <p class="Betalningssätt">Betalningssätt:</p>
        <div class="buttons">
            <div class="upbuttons">
                <button id="btn">Banköverföring</button>
                <button id="btn">Autogiro</button>
                <button id="btn">Swish</button>
            </div>
            <p>
                <strong
                    >{{ this.$store.state.numvalue }}
                    {{ this.$store.state.selected }}</strong
                >
            </p>
            <div class="downbutton">
                <button id="btn" type="button" @click="Paynow">
                    Betala nu
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        Paynow() {
            this.$router.push({
                name: 'Donationpage3'
            })
        }
    },
    name: 'Donationpage2'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.donationPage2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    padding: 20px;
}
.Betalningssätt {
    margin-top: 100px;
}
.vald {
    height: 80px;
    width: 80px;
    background-color: #bc6ecc;
    border: transparent;
    border-radius: 100px;
}
#btn {
    width: 150px;
    height: 30px;
    margin: 20px auto;
    font-size: 14px;
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
.upbuttons {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
    .donationPage2 {
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }
}
</style>
