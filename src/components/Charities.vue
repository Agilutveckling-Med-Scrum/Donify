<template>
    <div class="charity-root">
        <h1 class="half-circle-text">Alla <br />Kategorier</h1>
        <p class="half-circle-text-paragraph">
            Välj bland våra kategorier eller sök för att hita rätt välgörenhet
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
        <svg
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
            <ellipse cx="59" cy="70.9753" rx="59" ry="70.9753" fill="#8A2BE2" />
        </svg>
        <svg
            class="MD-Ball-Left"
            width="106"
            height="142"
            viewBox="0 0 106 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse cx="47" cy="70.9753" rx="59" ry="70.9753" fill="#8A2BE2" />
        </svg>
        <svg
            class="MD-Ball-Right2"
            width="104"
            height="142"
            viewBox="0 0 104 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse cx="59" cy="70.9753" rx="59" ry="70.9753" fill="#8A2BE2" />
        </svg>

        <div class="grid-container" v-if="charities !== null">
            <div
                class="charity-card-container"
                v-for="charity in charities"
                :key="charity.id"
            >
                <picture>
                    <img :src="charity.img" alt="" />
                    <source media="(min-width: 325px)" srcset="" />
                </picture>
                <div class="text-div">
                    <h3>{{ charity.name }}</h3>
                    <p>{{ charity.description }}</p>
                    <b-button
                        variant="primary"
                        class="mx-auto"
                        @click="$router.push('donate')"
                        >Donera</b-button
                    >
                </div>
            </div>
            <button @click="addFundraiser()">delete me</button>
        </div>
        <h2 v-else>
            Start the local server to see charity listings, write in the
            terminal:
            <br />json-server db.json
        </h2>
    </div>
    <!--https://www.reachmentoringprogram.com/wp-content/uploads/2020/07/social-share.png-->
</template>

<script>
export default {
    created() {
        this.getDonationData()
    },
    methods: {
        getDonationData() {
            fetch('http://localhost:3000/allCharities')
                .then(response => {
                    return response.json()
                })
                .then(result => {
                    this.charities = result
                    console.log(result)
                })
        },
        addFundraiser() {
            fetch('http://localhost:3000/allCharities', {
                body:
                    '{ "name": "Teststad", "description": "ddd", "img": "htp", "id": "5"}',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                })
        }
    },
    data() {
        return {
            charities: null
        }
    }
}
</script>

<style scoped lang="scss">
/*mobile versions*/

.grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 123px;
    margin: 0 auto;
    height: 100vh;
    position: relative;
    width: 80vw;
}

.grid-container div:nth-of-type(1) {
    background-color: white;
    border-radius: 25px;
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
    border: 1px solid whitesmoke;
    padding: 10px;
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
    font-size: 1em;
}

//Purple Balls
#purple-half-circle {
    /*position: relative;*/
    top: 0;
    left: 0;
}

.XS-Small-Ball-Right {
    position: absolute;
    top: 25%;
    right: 5%;
}

.MD-Ball-Right {
    position: absolute;
    top: 76%;
    right: 0%;
}

.MD-Ball-Right2 {
    position: absolute;
    top: 130%;
    right: 0%;
}

.MD-Ball-Left {
    position: absolute;
    top: 82%;
    left: 0%;
}

//Media Queries

@media (max-width: 409px) {
    .half-circle-text {
        top: 2.8%;
        left: 50%;
        font-size: 2.552em;
    }

    .half-circle-text-paragraph {
        top: 16.2%;
        font-size: 0.8em;
    }

    .XS-Small-Ball-Right {
        top: 22%;
    }
}

@media (min-width: 409px) and (max-width: 510px) {
    .half-circle-text {
        top: 2.8%;
        left: 50%;
        font-size: 3em;
    }

    .half-circle-text-paragraph {
        top: 18.2%;
        font-size: 1em;
    }

    .XS-Small-Ball-Right {
        top: 24.5%;
    }
}
</style>
