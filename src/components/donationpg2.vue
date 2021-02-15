<template>
    <div class="donationPage2">
        <p>Du har valt: <span>WWF</span></p>
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
                <button type="button" @click="Paynow">Betala nu</button>
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
template {
    background-color: #f1f4f4;
}
.Betalningssätt {
    margin-top: 100px;
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
