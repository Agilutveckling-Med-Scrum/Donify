<template>
    <div>
        <b-button v-b-toggle.sidebar-right id="profileButton"
            ><i class="fa fa-user-circle"
        /></b-button>
        <b-sidebar id="sidebar-right" title="Logga in" right shadow>
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
        </b-sidebar>
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

p {
    cursor: pointer;
    color: #1F9EFF;
    margin-top: 30px; 
    float: left; 
}


.btn-secondary {
    background-color: transparent;
    border-color: transparent;
    color: black;
    margin-left: 5px;
}
</style>

