<template>
    <div class="TackPage">
        <div class="backicon">
            <div @click="Goback"><i class="fa fa-angle-left"></i> Tillbaka</div>
            <div @click="Goforward"><i class="fa fa-angle-right"></i></div>
        </div>
        <div class="tack"><p>Tack för din donation!</p></div>
        <div class="line"></div>
        <p class="confirmtext">
            Ett bekräfelse mejl har skickats till din e-post address!
        </p>
        <div class="container">
            <div class="WWF">
                <img src="@/assets/WWF_logo 1.png" alt="" />
            </div>
            <div class="bearcontainer">
                <img src="@/assets/polar_bear.jpg" alt="" />
            </div>
            <div class="wildlife">
                <p>
                    WILDLIFE Climate change is already having a significant
                    impact on wild animals around the globe. Changes in climate
                    are altering the timing of life cycles, causing species to
                    shift where they live, and in some cases even leading to
                    extinction. We can help species adapt to our changing world
                    by ensuring that our own responses to climate change factor
                    in the health and wellbeing of the habitat and resources on
                    which they depend.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TackPage',
    methods: {
        Goback() {
            this.$router.push({
                name: 'Donationpage2'
            })
        },
        Goforward() {
            this.$router.push({
                name: 'Donationpage3'
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.TackPage {
    font-family: 'Open Sans', sans-serif;
    padding: 30px;
    padding-bottom: 60px;
}
.tack p {
    font-size: 28px;
    font-weight: 800;
    margin-top: 60px;
}
.backicon {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
}
.WWF img {
    float: right;
    width: 60px;
    height: 89px;
}
.confirmtext {
    margin-top: 10px;
}
.bearcontainer img {
    margin: 30px auto;
    width: 280px;
    vertical-align: middle;
    margin-bottom: 6px;
}
.line {
    border: 1px solid rgb(61, 60, 60);
    width: 100%;
    margin: 0 auto;
}
p {
    text-align: center;
}
.wildlife p {
    text-align: justify;
    padding: 0 8px 0 8px;
    font-size: 12px;
    line-height: 12px;
}
.container {
    display: flex;
    flex-direction: column;
}
@media (min-width: 380px) {
    .bearcontainer img {
        margin: 30px auto;
        display: flex;
        width: 400px;
        vertical-align: middle;
        margin-bottom: 6px;
    }
    .wildlife p {
        text-align: justify;
        padding: 0 8px 0 8px;
        font-size: 14px;
        line-height: 12px;
    }
}
</style>
