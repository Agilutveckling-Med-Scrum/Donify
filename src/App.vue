<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home" id="logo"
                ><img src="./assets/logo.png"
            /></router-link>
            <div class="rightside">
                <router-link to="/aboutdonify" class="link"
                    >Om Donify</router-link
                >
                <Login />
                <!--<router-link to="/login" class="link">Logga in</router-link>-->
            </div>
        </div>

        <router-view />
    </div>
</template>
<script>
import Login from '@/views/Login.vue'
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        Login
    },
    methods: {
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
        this.noNewUser()
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

/*TODO: fixa så att länkarna ändrar färg när de är aktiva */

/* #nav a:active {
  color: green; 
} */

/* .link.router-link-exact-active {
  color: #42b983;
} */
</style>
