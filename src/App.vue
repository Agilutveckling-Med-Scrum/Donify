<template>
    <div id="app">
        <div id="nav" v-if="!mobileView">
            <router-link to="/" id="logo"
                ><img src="./assets/logo.png"
            /></router-link>

            <div class="rightside">
                <router-link to="/aboutdonify" class="link"
                    >Om Donify</router-link
                >
                <router-link to="/login" class="link">Logga in</router-link>
            </div>
        </div>
        <MainTabBar v-if="mobileView" />
        <router-view />
    </div>
</template>

<script>
import MainTabBar from '@/components/MainTabBar/MainTabBar.vue'

export default {
    name: 'Home',
    components: {
        MainTabBar
    },

    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    },

    data() {
        return {
            mobileView: true,
            windowWidth: null
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth > 720) {
                console.log(this.windowWidth)
                this.mobileView = false
            } else {
                this.mobileView = true
            }
        },
        onNewUser() {
            if (localStorage.getItem('NewUser') === null) {
                setTimeout(() => {
                    this.$router.push('/walkthrough'), 0
                })
            }
        },
        noNewUser() {
            localStorage.setItem('NewUser', false)
            console.log(localStorage.getItem('NewUser'))
        }
    },
    mounted() {
        this.onNewUser()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

#app {
    font-family: 'Open Sans', sans-serif, 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
    margin: 0;
    padding: 0;
    height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

img {
    width: 150px;
}

#nav {
    display: flex;
    justify-content: space-between;
    margin: 20px;
}

#nav a {
    text-decoration: none;
    color: #2c3e50;
}

.link {
    font-weight: bold;
    font-size: 16px;
    color: #2c3e50;
}

#nav a:hover {
    color: #ff00ff;
}

.rightside {
    display: flex;
    align-items: center;
}
</style>
