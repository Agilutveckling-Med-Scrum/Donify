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
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

h1 {
  font-size: 40px;
}

#nav {
  padding: 20px, 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 15px;
  text-decoration: none;
}

/*TODO: fixa så att länkarna ändrar färg när de är aktiva */

/* #nav a:active {
  color: green; 
} */

/* .link.router-link-exact-active {
  color: #42b983;
} */
</style>
