<template>
    <div class="aboutdonify">
        <div class="container">
            <h2>Aktuellt</h2>
            <section class="section">
                <div class="container-fliud">
                    <img src="../pictures/facemask_640.jpg" />
                    <p>
                        Donec sed odio dui. Etiam porta sem malesuada magna
                        mollis euismod.
                    </p>
                    <div id="btn">
                        <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            @click="Todonera"
                        >
                            Donera nu
                        </button>
                    </div>
                </div>
            </section>
            <div id="toplist" class="col-lg-4">
                <h4>Topplista</h4>
                <select v-model="topLista">
                    <option
                        v-for="popular in toplist"
                        v-bind:key="popular"
                        :value="popular.key"
                        >{{ popular.name }}</option
                    >
                </select>
            </div>
            <div id="news" class="row">
                <div class="col-lg-4">
                    <h2>Nyheter</h2>
                    <img src="../pictures/wwf_640.jpg" />
                    <p>
                        Donec sed odio dui. Etiam porta sem malesuada magna
                        mollis euismod. Donec sed odio dui. Etiam porta sem
                        malesuada magna mollis euismod.
                    </p>
                    <div id="readmore">
                        <button type="button" class="btn btn-secondary">
                            Läs mer
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer">
            <a href="#" class="fa fa-facebook" />
            <a href="#" class="fa fa-twitter" />
            <a href="#" class="fa fa-instagram" />
            <a href="#" class="fa fa-linkedin" />
        </footer>

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
    </div>
</template>
<script>
export default {
    name: 'Home',
    methods: {
        Todonera() {
            this.$router.push('/all')
        }
    },
    data: function() {
        return {
            topLista: [],
            toplist: [
                { key: 1, name: 'WHO' },
                { key: 2, name: 'RäddaBarnen' },
                { key: 3, name: 'Unicef' },
                { key: 4, name: 'Amnesty International' },
                { key: 5, name: '' },
                { key: 6, name: '' },
                { key: 7, name: '' }
            ]
        }
    }
}
</script>

<style scoped>
.aboutdonify {
    display: flex;
}

h2 {
    margin-top: 30px;
}

img {
    width: 100%;
    margin-top: 20px;
}

#btn {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
}

#toplist {
    margin-top: 30px;
    margin-bottom: 30px;
}

#news {
    margin-bottom: 70px;
}

#readmore {
    text-align: right;
}

#footer {
    background-color: grey;
    color: white;
    height: 5vh;
    display: flex;
    justify-content: center;
    position: fixed;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    width: 100%;
}

#footer a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
    color: white;
}
</style>
