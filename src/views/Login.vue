<template>
  <div class="login">
   <h2>Logga in</h2>
   <form>
   <label>
     Användarnamn
   <input v-model="username" placeholder="E-postadress">
   </label>
   <label>
     Lösenord
   <input v-model="password" placeholder="Lösenord" type="password"/>
   </label>
   <component v-bind:is="Loginpage" />
   <button @click="loginpage()">Logga in</button>
   </form>
   <p>Glömt ditt lösenord?</p>
    </div>
</template>

<script>
import Loginpage from '@/components/Loginpage.vue'
export default {
    name: 'Loginpage',
    components: {
        Loginpage
    },
    data() {
        return {
            input: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        loginpage(){
            if (this.input.username != '' && this.input.password != '') {
                this.component = Loginpage
            } else {
                alert('fel lösenord')
            }
        }
    }
}
</script>

<style scoped>
label, input {
  display: block; 
}

input {
  margin-bottom: 20px; 
  width: 75%; 
  padding: 8px;
  border: 2px solid #CCCCCC;
  border-radius: 4px; 
}

.login {
  width: 300px;
  border: 2px solid #CCCCCC;
  margin: auto;
  margin-top: 100px;
  padding: 40px;
}

h2 {
  text-align: center; 
  padding-bottom: 20px; 
}

p {
  font-size: 12px; 
  cursor: pointer; 
  color: #718EFF; 
}

button {
  margin-top: 20px; 
  margin-bottom: 20px;
  cursor: pointer; 
}
</style>