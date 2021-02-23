<template>
    <div>
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

<style scoped>
/*mobile versions*/

.grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 40px;
    height: 100vh;
    position: relative;
}

h3 {
    margin-top: 30px;
}

button {
    font-size: 18px;
    padding: 15px;
    margin: 10px 0px 30px 0px;
    width: 60%;
    border-radius: 30px;
}
img {
    width: 100%;
    height: 178px;
}

picture {
    width: 100%;
    height: 100%;
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
</style>
