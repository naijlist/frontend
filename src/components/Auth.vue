<template>
    <div class="grey lighten-2 mt-10">
    <v-container >
        <v-card width="400" class="mx-auto mt-5 mb-5 fill-height" flat>
        <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        color="teal lighten-1"
      />
        <v-card-title>
            <p class="pl-2 mb-0">Login here</p>        
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form 
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                @submit.prevent
            >
                <v-text-field 
                label="Email"
                v-model="email"
                :rules="emailRules"
                prepend-inner-icon="mdi-account-outline"
                rounded
                outlined
                dense
                />
                <v-text-field 
                :type="showPassword ? 'text'  : 'password'" 
                label="Password"
                v-model="password"
                :rules="passwordRules"
                prepend-inner-icon="mdi-lock-outline"
                rounded
                outlined
                dense
                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="showPassword = !showPassword"
                />
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="success" dark rounded to="sign-up" outlined >Sign up</v-btn>
                    
                        <v-spacer></v-spacer>
                        <v-btn 
                        color="success" 
                        rounded  
                        :disabled="!valid || loading"
                        @click="login">Login</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
    <v-snackbar
              v-model="snackbar"
              color="red"
              :bottom="true"
              :right="true"
            >
              {{ errorMessages }}
              <v-btn
                dark
                text
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
    </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            loading: false,
            snackbar: false,
            valid: true,
            lazy: false,
            showPassword: false,
            email: null,
            emailRules: [
            v => !!v || 'E-mail is required'],
            password: null,
            passwordRules:[v => !!v || 'Password is required'],
            errorMessages: 'Invalid email or password!',  

        }
    },
    methods:{
         validate () {
            this.$refs.form.validate()
        },
        async login(){
                this.loading = true

            setTimeout( () =>{
            fetch('http://localhost:5050/api/auth', {
                method: "POST",
                body: JSON.stringify({email: this.email, password: this.password}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }).then(response => {
                if(response.status === 200){
                    response.json().then(data => {
                        this.$store.commit('setAuth', data)
                        this.$router.push('/')
                    })
                }
                if(response.status === 401){
                    this.loading = false
                    this.errorMessages = "Invalid email or password!"
                    this.snackbar = true
                }
            }).catch( err => {
                this.loading = false
                this.errorMessages = "Network Error try again later"
                this.snackbar = true
                console.log(err)
            })
            }, 2000)
        }
    }
}
</script>