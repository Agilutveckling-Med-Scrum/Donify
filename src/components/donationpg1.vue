<template>
    <div class="donationPage1">
        <div @click="$router.go(-1)" class="backicon">
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
        <p>Hur mycket vill du donera?</p>
        <div class="slider">
            <div class="inputednum">
                <input type="text" v-model="numvalue" />
                <select v-model="selected">
                    <option v-for="(item, key) in list" :key="item">{{
                        key
                    }}</option>
                </select>
            </div>
            <div class="convertednum">
                <input :value="convertedNum()" /><span>SEK</span>
            </div>
        </div>

        <div class="downinfo">
            <p>Hur ofta vill du donera?</p>
            <div class="buttons">
                <div class="upbuttons">
                    <button id="btn" type="button" @click="reset()">
                        En gång
                    </button>

                    <button id="btn" type="button" @click="clickMonth()">
                        Varje månad
                    </button>

                    <button id="btn" type="button" @click="clickYear()">
                        Varje år
                    </button>
                </div>
                <span class="options" v-show="isShowmonth">{{
                    popinfomonth
                }}</span>
                <span class="options" v-show="isShowyear">{{
                    popinfoyear
                }}</span>
                <div class="downbutton">
                    <button
                        id="btn"
                        class="Tillbetalning"
                        type="button"
                        @click="Topay"
                    >
                        Till betalning
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    created() {
        this.coolApi()
    },
    data() {
        return {
            namevalue: '',
            list: '',
            popinfomonth: '',
            popinfoyear: '',
            isShowmonth: false,
            isShowyear: false
        }
    },
    methods: {
        coolApi() {
            Vue.axios
                .get('https://api.exchangeratesapi.io/latest')
                .then(response => {
                    this.list = response.data.rates
                    //console.log(Object.values(this.list)[0])
                })
        },
        convertedNum() {
            for (let i = 0; i < Object.keys(this.list).length; i++) {
                if (this.selected == Object.keys(this.list)[i]) {
                    return (
                        (this.numvalue / Object.values(this.list)[i]) *
                        Object.values(this.list)[9]
                    ).toFixed(2)
                }
            }
        },
        Topay() {
            this.$router.push({
                name: 'Donationpage2'
            })
        },
        reset() {
            this.isShowmonth = false
            this.isShowyear = false
        },
        clickMonth() {
            this.isShowmonth = true
            this.isShowyear = false
            this.popinfomonth = 'Du har valt en månadsprenumeration!'
        },
        clickYear() {
            this.isShowyear = true
            this.isShowmonth = false
            this.popinfoyear = 'Du har valt en årsprenumeration!'
        }
    },
    computed: {
        numvalue: {
            get() {
                return this.$store.state.numvalue
            },
            set(numvalue) {
                this.$store.commit('setnumValue', numvalue)
            }
        },
        selected: {
            get() {
                return this.$store.state.selected
            },
            set(selected) {
                this.$store.commit('setKey', selected)
            }
        }
    },
    name: 'Donationpage1'
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.donationPage1 {
    font-family: 'Open Sans', sans-serif;
    padding: 20px;
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
.wwftext img {
    width: 8px;
    height: 12px;
    margin-right: 3px;
}
.slider {
    margin: 40px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.convertednum {
    display: flex;
    align-items: center;
}
.chosedOrg {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 140px;
    background: #f8f8f8;
    /*  background-image: url('../assets/panda.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%; */
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
.inputednum {
    display: flex;
    height: 50px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: #f1f4f4;
}
.inputednum input {
    background-color: #f1f4f4;
}
.backicon {
    font-size: 22px;
}
.upbuttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.buttons {
    display: flex;
    flex-direction: column;
    height: 240px;
}
.downbutton {
    margin: 0 auto;
    padding-bottom: 80px;
}
.Tillbetalning {
    margin-top: 90px;
    width: 160px !important;
    font-size: 18px !important;
    font-weight: 600 !important;
}
.wwftext {
    margin-top: 8px;
    font-size: 12px;
}
.downinfo p {
    margin: 80px 5px 30px;
}
input {
    border: none;
    font-size: 20px;
    font-weight: 800;
    outline: none;
}
p {
    margin: 50px 5px 30px;
    font-size: 24px;
}
select {
    display: block;
    border: none;
    appearance: none;
    background: transparent;
    outline: none;
}
span {
    margin-right: 10px;
    font-size: 22px;
}
.options {
    margin: 0 auto;
    margin-top: 30px;
}
#btn {
    font-size: 14px;
    font-weight: 600;
    height: 40px;
    width: 100px;
    color: rgb(255, 255, 255);
    border: transparent;
    border-radius: 10px;
    background-color: #020d74;
}
#btn:focus {
    background-color: #010d99;
}
@media (min-width: 780px) {
    .upbuttons {
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }
    .chosedOrg {
        height: 180px;
    }
    .inputednum {
        height: 80px;
    }
    .downinfo p {
        margin: 100px 5px 30px;
    }
}
@media (min-width: 380px) {
    .inputednum {
        display: flex;
        justify-content: space-between;
        margin-left: 0;
    }
    .convertednum {
        display: flex;
        justify-content: space-between;
    }
}
</style>
