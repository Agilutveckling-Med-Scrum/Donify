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
        </div>

        <div class="downinfo">
            <p>
                <strong
                    >Belopp: {{ this.$store.state.numvalue }}
                    {{ this.$store.state.selected }}</strong
                >
            </p>
            <div class="downbutton">
                <button id="btn" class="betalanu" type="button" @click="Paynow">
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.donationPage2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    padding: 20px;
    background: #f7f2fc;
}
p {
    margin: 20px 5px 40px;
}
.Betalningssätt {
    padding-left: 20px;
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
#btn {
    width: 150px;
    height: 40px;
    margin: 20px auto;
    font-size: 14px;
    font-weight: 600;
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
.downinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.betalanu {
    width: 160px !important;
    font-size: 18px !important;
    font-weight: 600 !important;
}
@media screen and (min-width: 375px) and (max-width: 812px) {
    .donationPage2 {
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }
}
@media screen and (min-width:813px) and (max-width: 980px) {
   .donationPage2 {
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }

}
</style>
