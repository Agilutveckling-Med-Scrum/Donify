<template>
  <div id="app">
      <div id="nav">
        <router-link to="/" id="logo"><h1>Donify</h1></router-link>
      <nav>
        <router-link to="/aboutdonify" class="link">Om Donify</router-link>
        <router-link to="/login" class="link">Logga in</router-link>
       </nav>
      </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  font-size: 20px;
  text-decoration: none;
  padding-right: 70px;
}

#nav {
  padding: 20px, 20px;
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
  color: #2c3e50;
  padding-left: 20px;
}

#nav a:hover {
  color: red; 
}

/*TODO: fixa så att länkarna ändrar färg när de är aktiva */

/* #nav a:active {
  color: green; 
} */

/* .link.router-link-exact-active {
  color: #42b983;
} */
</style>
