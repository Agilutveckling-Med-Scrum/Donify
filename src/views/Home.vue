<template>
    <div class="aboutdonify">
        <div class="container">
            <div class="picture-1">
                <p class="text">
                    <strong>Aktuellt</strong><br />
                    Donec sed odio dui. Etiam porta sem malesuada magna mollis
                    euismod.
                </p>
            </div>
            <h4 id="text-under">make someone happy!</h4>
            <div id="btn-1">
                <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    @click="Todonera"
                >
                    Donera nu
                </button>
            </div>

            <div id="toplist" class="col-lg-4">
                <h4>De 5 populäraste på Donify</h4>
                <p
                    v-for="popular in toplist"
                    v-bind:key="popular.index"
                    :value="popular.key"
                >
                    {{ popular.number }}{{ popular.name }}
                </p>
            </div>

            <div id="search">
                <h4>Använd sökfunktionen för att hitta specifika donationer</h4>
            </div>

            <div id="news" class="row">
                <div class="col-lg-4">
                    <div class="picture-2">
                        <p class="text">
                            <strong>Nyheter</strong><br />
                            Donec sed odio dui. Etiam porta sem malesuada magna
                            mollis euismod. Donec sed odio dui.
                        </p>
                    </div>
                    <div id="btn-2">
                        <button type="button" class="btn btn-secondary">
                            Läs mer
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
            toplist: [
                { key: 1, number: 1, name: '. WHO' },
                { key: 2, number: 2, name: '. RäddaBarnen' },
                { key: 3, number: 3, name: '. Unicef' },
                { key: 4, number: 4, name: '. Amnesty International' },
                { key: 5, number: 5, name: '. WWF' }
            ]
        }
    }
}
</script>

<style scoped>
.picture-1 {
    margin-top: 40px;
    position: relative;
    padding-top: 250px;
    width: 100%;
    background: linear-gradient(to top, white, transparent),
        url('../pictures/facemask_640.jpg');
    background-size: cover;
}

.picture-2 {
    margin-top: 20px;
    position: relative;
    padding-top: 250px;
    width: 100%;
    background: linear-gradient(to top, black, transparent),
        url('../pictures/wwf_640.jpg');
    background-size: cover;
    color: white;
}

.text {
    position: absolute;
    bottom: 2px;
    left: 10px;
}

.aboutdonify {
    display: flex;
}

#text-under {
    margin-top: 30px;
    margin-bottom: 20px;
    color: #020d74;
    text-align: center;
}

h4 {
    margin-top: 20px;
    margin-bottom: 20px;
}

#btn-1 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 70px;
}

#btn-2 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 60px;
}

#search {
    margin-top: 50px;
    margin-bottom: 50px;
}

#toplist {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 25px;
    background-color: #d09e54;
}

#news {
    margin-bottom: 70px;
}
</style>
