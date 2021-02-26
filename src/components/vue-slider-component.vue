<template>
    <div class="slider">
        <vue-slider v-model="numvalue" v-bind="options" />
        <p>
            {{ numvalue }}
        </p>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

export default {
    components: {
        VueSlider
    },
    data() {
        return {
            options: { min: 0, max: 1000 }
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
        }
    }
}
</script>
<style scoped lang="scss">
@media screen and (min-width: 375px) and (max-width: 812px) {
.slider {
    width: 100%;
    margin: 0 auto;
}
}
@media screen and (min-width:813px) and (max-width: 980px) {
   .slider {
    width: 100%;
    margin: 0 auto;
}


}
p {
    text-align: center;
}
</style>
