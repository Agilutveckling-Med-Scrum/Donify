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
            class="XS-ball"
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
    grid-row-gap: 40px;
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
    width: 100%;
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
    top: 6.8%;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 3.052em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
}

.half-circle-text-paragraph {
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 1rem;
}

//Purple Balls
#purple-half-circle {
    /*position: relative;*/
    top: 0;
    left: 0;
}

.XS-ball {
    position: absolute;
    top: 23%;
    right: 5%;
}
</style>
