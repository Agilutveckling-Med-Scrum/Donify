<template>
    <div id="login">
        <h2>Logga in</h2>
        <form @submit.prevent="submitForm">
            <div class="px-3 py-2">
                <label>Användarnamn</label>
                <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    placeholder="E-postadress"
                />
                <span
                    v-if="
                        (!$v.email.required || !$v.email.email) &&
                            $v.email.$dirty
                    "
                    class="text-danger"
                    >Giltig e-post krävs!</span
                >
            </div>

            <div class="px-3 py-2">
                <label>Lösenord</label>
                <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    placeholder="Lösenord"
                />
                <span
                    v-if="!$v.password.required && $v.password.$dirty"
                    class="text-danger"
                    >Lösenord krävs!</span
                >
                <span
                    v-if="
                        (!$v.password.minLength || !$v.password.maxLength) &&
                            $v.password.$dirty
                    "
                    class="text-danger"
                    >Lösenordet måste vara mellan
                    {{ $v.password.$params.minLength.min }} och
                    {{ $v.password.$params.maxLength.max }} tecken!</span
                >
            </div>

<div class="px-3 py-2">
            <b-button
                type="submit"
                variant="primary"
                class="mx-auto"
                >Logga in
            </b-button>
        <p>Glömt ditt lösenord?</p>
        <p>Inget konto? Skapa nytt här</p>
        </div>
 </form>
     </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
    data: () => ({
        loginData: [
            {
                email: 'johanna@gmail.com',
                password: 'johanna'
            },
            {
                email: 'emil@gmail.com',
                password: 'emilemil'
            },
            {
                email: 'carel@gmail.com',
                password: 'heeej3'
            }
        ],
        email: '',
        password: ''
    }),
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            maxLength: maxLength(12),
            minLength: minLength(6)
        }
    },

    methods: {
        login() {
            let error = true

            for (let n = 0; n < this.loginData.length; n++) {
                if (
                    this.email == this.loginData[n].email &&
                    this.password == this.loginData[n].password
                ) {
                    error = false 
                    this.$router.push({
                        name: 'Userpage'
                    })
                } 
            }
            if (error) {
                alert('Fel användarnamn eller lösenord')
               
            }
        },
        submitForm() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                console.log(`Email: ${this.email}, Password: ${this.password}`)
            }
            this.login()
        }       
    },
    name: 'Login'
}
</script>

<style scoped>
#login {
    margin: 50px 30px 10px 30px;
    border: 2px solid #666666;
    padding: 20px;
    padding-top: 40px; 
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
    color: #1f9eff;
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

