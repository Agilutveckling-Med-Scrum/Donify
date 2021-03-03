<template>
    <div class="charity-container">
        <Charities v-if="charities === true" />
        <StartUps v-if="startUps === true" />
        <div class="charity-root" v-if="categories">
            <h1 class="half-circle-text">Alla <br />Kategorier</h1>
            <p class="half-circle-text-paragraph">
                Välj mellan våra två kategorier
            </p>

            <svg
                id="purple-half-circle"
                viewBox="0 0 414 251"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M422 0C422 32.9618 416.426 65.6008 405.596 96.0536C394.766 126.506 378.893 154.176 358.882 177.484C338.87 200.791 315.114 219.28 288.968 231.894C262.823 244.508 234.8 251 206.5 251C178.2 251 150.177 244.508 124.032 231.894C97.886 219.28 74.1295 200.791 54.1185 177.484C34.1075 154.176 18.2338 126.506 7.40395 96.0535C-3.42593 65.6008 -9 32.9618 -9 -1.52588e-05L206.5 0H422Z"
                    fill="#8A2BE2"
                />
            </svg>
            <!--<svg
                class="XS-Small-Ball-Right"
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse
                    cx="11.5"
                    cy="13.8342"
                    rx="11.5"
                    ry="13.8342"
                    fill="#8A2BE2"
                />
            </svg>
            <svg
                class="MD-Ball-Right"
                width="101"
                height="142"
                viewBox="0 0 101 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse
                    cx="59"
                    cy="70.9753"
                    rx="59"
                    ry="70.9753"
                    fill="#8A2BE2"
                />
            </svg>
            <svg
                class="MD-Ball-Left"
                width="106"
                height="142"
                viewBox="0 0 106 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse
                    cx="47"
                    cy="70.9753"
                    rx="59"
                    ry="70.9753"
                    fill="#8A2BE2"
                />
            </svg>
            <svg
                class="MD-Ball-Right2"
                width="104"
                height="142"
                viewBox="0 0 104 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse
                    cx="59"
                    cy="70.9753"
                    rx="59"
                    ry="70.9753"
                    fill="#8A2BE2"
                />
            </svg>-->

            <div class="grid-container">
                <b-input-group
                    size="lg"
                    class=" h5 mb-2"
                    v-if="charities || startUps"
                >
                    <b-icon icon="search" id="search-icon"></b-icon>
                    <b-form-input
                        size="lg"
                        id="search"
                        type="search"
                        v-model="search"
                        placeholder="Sök..."
                    >
                    </b-form-input>
                </b-input-group>

                <div class="charity-card-container">
                    <picture>
                        <img
                            src="https://images.ctfassets.net/3wjbn0ndwf7t/5wSyFSSZBmguSUqYWSsmG2/04404569bf0120f2472d1aaf07ba673e/Last_Chance_for_Charitable_Donations.jpg"
                        />
                        <source media="(min-width: 325px)" srcset="" />
                    </picture>
                    <div class="text-div">
                        <h3>Alla Välgörenheter</h3>
                        <p>Så glädje genom att ge till välgörenheter</p>
                        <b-button
                            variant="primary"
                            class="mx-auto"
                            @click="showCharities()"
                            >Mer</b-button
                        >
                    </div>
                </div>
                <div class="charity-card-container">
                    <picture>
                        <img
                            src="https://www.protranslate.net/blog/wp-content/uploads/2020/01/startup-blog.jpg"
                        />
                        <source media="(min-width: 325px)" srcset="" />
                    </picture>
                    <div class="text-div">
                        <h3>Alla Start Ups</h3>
                        <p>Sponsra de senaste banbrytande idéerna</p>
                        <b-button
                            variant="primary"
                            class="mx-auto"
                            @click="showStartUps()"
                            >Mer</b-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Charities from '../components/Charities.vue'
import StartUps from '../components/StartUps.vue'

export default {
    name: 'Charity',
    components: {
        Charities,
        StartUps
    },

    methods: {
        showStartUps() {
            this.charities = false
            this.startUps = true
            this.categories = false
            window.scrollTo(0, 0)
        },
        showCharities() {
            this.charities = true
            this.startUps = false
            this.categories = false
            window.scrollTo(0, 0)
        }
    },
    data() {
        return {
            startUps: false,
            charities: false,
            categories: true,
            search: ''
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

h1 {
    margin: 20px 0px 55px 0px;
    font: 'poppins';
}

p {
    font: 'OpenSans';
}

.charity-card-container img {
    width: 80.9vw;
    height: 50%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin: -10px -10px 0px -10px;
}
.charity-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1;
}

.grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 70px;
    margin: 0 auto;
    height: 100vh;
    position: relative;
    width: 80vw;
}

h3 {
    margin-top: 30px;
}

button {
    border-radius: 300px;
    font-size: 18px;
    padding: 15px;
    margin: 10px 0px 30px 0px;
    width: 60%;
}
img {
    width: 100%;
    height: 178px;
}

picture {
    width: 100%;
    height: 100%;
}

.charity-root {
    position: relative;
    width: 100vw;
}

.charity-card-container {
    background-color: white;
    padding: 10px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 25px;
}

.text-div p {
    text-align: center;
    background-color: white;
    margin: 25px 10px;
}

.half-circle-text {
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 3.252em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
}

.half-circle-text-paragraph {
    position: absolute;
    top: 21.2%;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 1.2em;
    display: block;
}
#search {
    border-radius: 37px;
    padding: 20px;
    border: 1px solid black;
    outline: none;
}

#search-icon {
    position: absolute;
    top: 13.5px;
    right: 25px;
    z-index: 2;
}

//Purple Balls
#purple-half-circle {
    margin-bottom: 60px;
}

.XS-Small-Ball-Right {
    position: absolute;
    top: 25%;
    right: 5%;
}

.MD-Ball-Right {
    position: absolute;
    top: 96.5%;
    right: 0%;
}

.MD-Ball-Right2 {
    position: absolute;
    top: 148%;
    right: 0%;
}

.MD-Ball-Left {
    position: absolute;
    top: 109%;
    left: 0%;
}

//Media Queries

@media (max-width: 409px) {
    .half-circle-text {
        top: 2.8%;
        left: 50%;
        font-size: 2.352em;
    }

    .half-circle-text-paragraph {
        top: 15.2%;
        font-size: 0.9em;
    }

    .XS-Small-Ball-Right {
        top: 22%;
    }
}

@media (min-width: 409px) and (max-width: 510px) {
    .half-circle-text {
        top: 2.8%;
        left: 50%;
        font-size: 2.7em;
    }

    .half-circle-text-paragraph {
        top: 16.5%;
        font-size: 1em;
    }

    .XS-Small-Ball-Right {
        top: 24.5%;
    }
}

//Desktop

@media (min-width: 950px) {
    .grid-container {
        margin-bottom: 20px;
    }
    .charity-card-container {
        width: 55%;
        height: 100%;
        margin: 100px auto 20px auto;
    }
    .charity-card-container h3 {
        font-size: 3em;
        margin-top: 40px;
    }
    .charity-card-container p {
        font-size: 1.3em;
        margin-bottom: 45px;
    }
    .charity-card-container button {
        font-size: 2em;
        padding: 10px;
    }
    .half-circle-text {
        top: 2.8%;
        left: 50%;
        font-size: 3.7em;
        position: relative;
        color: black;
    }

    .half-circle-text-paragraph {
        font-size: 22px;
        top: 22.5%;
        color: black;
        margin-top: 25px;
    }

    .charity-card-container img {
        width: 43.9vw;
        height: 50%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        margin: -10px 0px 0px -10px;
    }

    #purple-half-circle {
        display: none;
    }

    .XS-Small-Ball-Right {
        display: none;
    }

    .MD-Ball-Right {
        display: none;
    }
    .MD-Ball-Right2 {
        display: none;
    }
    .MD-Ball-Left {
        display: none;
    }

    .XS-Small-Ball-Right {
        top: 24.5%;
    }
}
</style>
