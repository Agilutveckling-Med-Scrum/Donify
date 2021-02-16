<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" id="logo"
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
        Login,
    },
    methods: {
        onNewUser(){
            if(localStorage.getItem('NewUser') === null){
                setTimeout(()=>{
                    this.$router.push('/walkthrough'), 0
                })
            }
        },
        noNewUser(){
            localStorage.setItem('NewUser', false)
            console.log(localStorage.getItem('NewUser'))
        }
    },
    mounted(){
        this.onNewUser()
        this.noNewUser()
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
