
<template>

    <div>
        <b-button v-b-toggle.sidebar-right id="profileButton"
            ><i class="fa fa-user-circle"
        /></b-button>
        <b-sidebar id="sidebar-right" title="Log in" right shadow>
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
                    <button class="loggainbtn" @click="loginpage()">
                        Logga in
                    </button>
                </form>
                <p>Glömt ditt lösenord?</p>
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
    name: 'Login'
}
</script>

<style lang="scss">
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
    font-size: 12px;
    cursor: pointer;
    color: #718eff;
}

.loggainbtn {
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}
.btn-secondary {
    background-color: transparent;
    border-color: transparent;
    color: black;
    margin-left: 5px;
}
</style>
