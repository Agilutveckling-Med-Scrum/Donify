<template>
    <div class="slider">
        <vue-slider v-model="value" />
        <vue-slider
            v-model="value"
            :enable-cross="false"
            :min="0"
            :max="1000"
            :interval="50"
            :tooltip="always"
            :tooltipPlacement="top"
            :tooltip-formatter="val => val + ' kr'"
        />
        <vue-slider v-model="numvalue" v-bind="options" />
        <p>
            {{ numvalue }}
            <select name="" id=""
                ><option value="sek">Sek</option></select
            >
        </p>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    components: {
        VueSlider
    },
    data() {
        return {
            value: 0
        }
    }
}
</script>
<style scoped>
.slider {
    width: 50%;
    margin: 0 auto 00;
}
</style>
<template> </template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

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
<style scoped>
.slider {
    width: 50%;
    margin: 0 auto 00;
}
</style>
