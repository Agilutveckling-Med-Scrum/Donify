<template>
  <div id="app">
    <div id="header">
      <h1>Donify</h1>
      <div id="nav">
        <router-link to="/">Om Donify</router-link>
        <router-link to="/about">Logga in</router-link>
      </div>
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
