<template>
    <div id="login">

            <h2>Logga in</h2>
            <div class="px-3 py-2">
                <form>
                    <label>
                        Användarnamn
                        <input v-model="username" placeholder="E-postadress" />
                    </label>
                    <label>
                        Lösenord
                        <input
                            v-model="password"
                            placeholder="Lösenord"
                            type="password"
                        />
                    </label>
                    <b-button variant="primary" class="mx-auto" @click="userpage" >Logga in </b-button> 
                </form>
                <p>Glömt ditt lösenord?</p>
                <p>Inget konto? Skapa nytt här</p>
            </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        userpage() {
            this.$router.push({
                name: 'Userpage'
            })
        }
    },
    name: 'Login', 
}
</script>

<style scoped>
#login {
    margin-top: 50px; 
     margin-left: 20px; 
    margin-right: 20px;   
    border: 2px solid #666666;
    padding-top: 30px; 
}

label,
input {
    display: block;
}

input {
    margin-bottom: 20px;
    width: 75%;
    padding: 8px;
    border: 2px solid #cccccc;
    border-radius: 4px;
}

h2 {
    margin-left: 20px; 
    margin-bottom: 20px; 
}

p {
    cursor: pointer;
    color: #1F9EFF;
    margin-top: 30px; 
}


.btn-secondary {
    background-color: transparent;
    border-color: transparent;
    color: black;
    margin-left: 5px;
}
@media screen and (min-width: 375px) and (max-width: 812px) {
    label,
input {
    display: block;
}
}


@media screen and (min-width:813px) and (max-width: 980px) {
    label,
input {
    display: block;
}
}


</style>

