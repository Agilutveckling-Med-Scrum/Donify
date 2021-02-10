<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" id="logo"><h1>Donify</h1></router-link>
            <nav>
                <router-link to="/aboutdonify" class="link"
                    >Om Donify</router-link
                >
                <router-link to="/login" class="link">Logga in</router-link>
            </nav>
        </div>
    <router-view />
    </div>
</template>

<script>
export default {}
</script>

<style>


/*TODO: fixa så att länkarna ändrar färg när de är aktiva */

/* #nav a:active {
  color: green; 
} */

/* .link.router-link-exact-active {
  color: #42b983;
} */
</style>
