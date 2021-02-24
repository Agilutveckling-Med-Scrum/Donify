<template>
    <div class="donationPage3">
        <div class="info">
            <div class="mittkonto"><P>Mitt Konto</P></div>
            <p>Idag donerade du <i class="fa fa-bell"></i></p>
            <p>
                <strong
                    >{{ this.$store.state.numvalue }}
                    {{ this.$store.state.selected }}</strong
                >
            </p>
            <img src="@/assets/children.jpg" alt="" />
        </div>
        <div class="personalInfo">
            <div class="item">
                Min donatehistorik<i class="fa fa-angle-down"></i>
            </div>
            <div class="item">Kontakta oss<i class="fa fa-angle-down"></i></div>
            <div class="item">Om Donify<i class="fa fa-angle-down"></i></div>
            <div class="item">Logga ut<i class="fa fa-angle-down"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        Tohome() {
            this.$router.push({
                name: 'Home'
            })
        }
    },
    name: 'Donationpage3'
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.donationPage3 {
    font-family: 'Open Sans', sans-serif;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.mittkonto {
    text-align: center;
    font-weight: 800;
    font-size: 20px;
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
}

img {
    height: 300px;
    width: 440px;
}
.personalInfo {
    display: flex;
    height: 400px;
    flex-direction: column;
    justify-content: space-evenly;
}
.item {
    display: flex;
    justify-content: space-between;
}
</style>
