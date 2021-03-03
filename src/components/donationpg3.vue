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
            <!--   <div class="item">
                Min donatehistorik<i class="fa fa-angle-down"></i>
            </div>
            <div class="item">
                Kontakta oss<i @onClick="Click" class="fa fa-angle-down"></i>
            </div>
            <div class="item">Om Donify<i class="fa fa-angle-down"></i></div>
            <div class="item">Logga ut<i class="fa fa-angle-down"></i></div>
 -->
            <div>
                <input type="checkbox" id="faq-1" />
                <h2><label for="faq-1">Min insamlingshistorik</label></h2>
                <p class="q-paragraph">
                    Din insamling har bidragit till 20394 måltider, eller
                    skolmaterial till 10758 elever.
                </p>
            </div>

            <div>
                <input type="checkbox" id="faq-2" />
                <h2><label for="faq-2">Kontakta Oss</label></h2>
                <p class="q-paragraph">
                    Du kan skicka mejl till oss : Donify@gmail.com <br />
                    Eller du kan ringa oss : 077-7878787
                </p>
            </div>
            <div>
                <input type="checkbox" id="faq-3" />
                <h2><label for="faq-3">Om Donify</label></h2>
                <p class="q-paragraph">
                    Donify är världens mest betrodda plattform online för
                    insamling till välgörenhet
                </p>
            </div>

            <div @click="Goback" class="backicon">
                <input type="checkbox" id="faq-4" />
                <h2 class="loggaut"><label for="faq-4">Logga ut</label></h2>
            </div>
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
    padding-bottom: 60px;
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
    height: 240px;
    width: 340px;
}
.personalInfo {
    display: flex;
    height: 300px;
    flex-direction: column;
}
.item {
    display: flex;
    justify-content: space-between;
}
input[type='checkbox'] {
    top: 0;
    left: 0;
    opacity: 0;
}
h2 {
    font-size: 18px;
    color: #000;
}
label {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
}
label::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 10px;
    border-left: 8px solid #020202;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    margin-top: -8px;
}
input[type='checkbox']:checked ~ h2 label::before {
    border-left: 8px solid transparent;
    border-top: 8px solid black;
    border-right: 8px solid transparent;
    margin-left: -4px;
    margin-top: -4px;
}

.q-paragraph {
    max-height: 0;
    overflow: hidden;
    padding-left: 30px;
    transition: max-height 0.4s ease;
    font-family: 'Raleway', 'sans-serif';
}

input[type='checkbox']:checked ~ h2 ~ p {
    max-height: 50px;
}
.loggaut :hover {
    color: #020d74;
}
@media (min-width: 380px) {
    .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    i {
        padding-left: 10px;
    }
}
@media (min-width: 780px) {
    img {
        height: 440px;
        width: 640px;
    }
}
</style>
