<template>
    <div class="donationPage1">
        <p>Du har valt:</p>
        <p>Hur mycket vill du donera?</p>
        <VueSlider />
        {{ namevalue }}
        <p>Hur ofta vill du donera?</p>
        <div class="buttons">
            <div class="upbuttons">
                <button>En gång</button>
                <button>Varje månad</button>
                <button>Varje år</button>
            </div>
            <div class="downbutton">
                <button type="button" @click="Topay">Till beatlning</button>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlider from '@/components/vue-slider-component.vue'
export default {
    methods: {
        Topay() {
            this.$router.push({
                name: 'Donationpage2'
            })
        }
    },
    name: 'Donationpage1',
    components: {
        VueSlider
    }
}
</script>

<style scoped>
template {
    background-color: #f1f4f4;
}
button {
    margin-left: 10px;
}
.downbutton {
    margin-top: 200px;
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
