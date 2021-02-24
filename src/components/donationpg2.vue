<template>
    <div class="donationPage2">
        <div @click="Goback" class="backicon">
            <i class="fa fa-angle-left"></i> Tillbaka
        </div>
        <div class="chosedOrg">
            <div><span> Du har valt: </span></div>
            <div class="valde"><span> WWF</span></div>
        </div>
        <div class="wwftext">
            <img src="@/assets/Vector.png" alt="" />WWF hjälper organisationer
            att uppnå sina mål med hjälp av användarnas ekonomiska stöd.
            Donationstjänsten kan hjälpa samt stötta slutkunder i den breda
            skalan.
        </div>
        <div class="Betalningssätt">
            <p>Betalningssätt:<img src="@/assets/info.svg" alt="" /></p>
        </div>
        <div class="buttons">
            <div class="upbuttons">
                <label class="m-check ui-margin">
                    <input
                        type="radio"
                        name="remindType"
                        value="2"
                    />Banköverföring
                    <img src="@/assets/bankcard.svg" alt="" />
                </label>
                <label class="m-check ui-margin">
                    <input type="radio" name="remindType" value="2" /> Autogiro
                </label>
                <label class="m-check ui-margin">
                    <input type="radio" name="remindType" value="2" />
                    Swish
                    <img src="@/assets/swish.svg" alt="" />
                </label>
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
                name: 'TackPage'
            })
        },
        Goback() {
            this.$router.push({
                name: 'Donationpage1'
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
}
p {
    margin: 20px 5px 40px;
}
.wwftext img {
    width: 8px;
    height: 12px;
    margin: 5px 3px;
}
.wwftext {
    margin-top: 8px;
    font-size: 12px;
}
img {
    width: 24px;
    height: 24px;
    float: right;
    height: 40px;
}
.Betalningssätt {
    margin: 0 auto;
    height: 40px;
    left: 46px;
    top: 119px;
    background: #f8f8f8;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    line-height: 40px;
}

.chosedOrg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 140px;
    background: #f8f8f8;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
.valde {
    font-size: 24px;
    font-weight: 900;
    height: 80px;
    width: 80px;
    background-color: rgb(255, 255, 255);
    border: transparent;
    border-radius: 100px;
    line-height: 80px;
}

label {
    margin-top: 50px;
}
input {
    margin-right: 12px;
}

.upbuttons {
    display: flex;
    flex-direction: column;
}
.downinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.betalanu {
    margin: 20px auto;
    border-radius: 8px;
    width: 300px;
    height: 60px;
    font-size: 24px;
    color: white;
    font-weight: 600;
    background-color: #020d74;
}
</style>
