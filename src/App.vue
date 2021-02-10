<template>
  <div id="app">
      <div id="nav">
        <router-link to="/" id="logo"><img src="./assets/logo.png"/></router-link>
        <div>
        <router-link to="/aboutdonify" class="link">Om Donify</router-link>
        <router-link to="/login" class="link">Logga in</router-link>
        </div>
      </div>
    <router-view />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  margin-left: 15px;
}

#nav a:hover {
  color: #FF00FF; 
}

/*TODO: fixa så att länkarna ändrar färg när de är aktiva */

/* #nav a:active {
  color: green; 
} */

/* .link.router-link-exact-active {
  color: #42b983;
} */
</style>
