<template>
    <div class="donationPage1">
        <p>Du har valt: <button class="vald">WWF</button></p>
        <p>Hur mycket vill du donera?</p>
        <VueSlider />
        <select v-model="selected">
            <option v-for="(item, key) in list" v-bind:key="item">{{
                key
            }}</option>
        </select>
        <p>Hur ofta vill du donera?</p>
        <div class="buttons">
            <div class="upbuttons">
                <button id="btn" type="button">En gång</button>
                <button id="btn" type="button">Varje månad</button>
                <button id="btn" type="button">Varje år</button>
            </div>
            <div class="downbutton">
                <button id="btn" type="button" @click="Topay">
                    Till betalning
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlider from '@/components/vue-slider-component.vue'
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
            list: ''
        }
    },
    methods: {
        coolApi() {
            Vue.axios
                .get('https://api.exchangeratesapi.io/latest')
                .then(response => {
                    this.list = response.data.rates
                    console.log(this.list)
                })
        },
        Topay() {
            this.$router.push({
                name: 'Donationpage2'
            })
        }
    },
    computed: {
        selected: {
            get() {
                return this.$store.state.selected
            },
            set(selected) {
                this.$store.commit('setKey', selected)
            }
        }
    },

    name: 'Donationpage1',
    components: {
        VueSlider
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.donationPage1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    padding: 20px;
}
.vald {
    height: 80px;
    width: 80px;
    background-color: #bc6ecc;
    border: transparent;
    border-radius: 100px;
}
.upbuttons {
    display: flex;
    justify-content: space-between;
}
.buttons {
    display: flex;
    flex-direction: column;
    height: 240px;
    justify-content: space-between;
}
.downbutton {
    margin: 0 auto;
}
p {
    margin-top: 26px;
}
select {
    display: block;
    margin: 0 auto;
}
#btn {
    font-size: 14px;
    height: 40px;
    width: 100px;
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
    .donationPage1 {
        position: absolute;
        height: 100%;
        margin: 25px 0px;
        width: 100%;
    }
}
</style>
