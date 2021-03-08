<template>
<div class="grey lighten-2">
    <v-container>

        <v-card width="400" class="mx-auto mt-5 mb-5" flat>
            <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    color="teal lighten-1"
                />
        <v-card-title>
        <p class="pl-4 pt-2 mb-0">Sign-up here</p>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form 
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                @submit.prevent>
                 <v-text-field 
                label="Full name"
                v-model="form.fullname"
                :rules="fullNameRules"
                rounded
                outlined

                dense
                />
                 <v-text-field 
                label="Email"
                v-model="form.email"
                :rules="emailRules"
                rounded
                outlined
                dense
                autocomplete="off"
                />
                 <v-text-field 
                label="Phone number"
                v-model="form.phone"
                :rules="phoneNumberRules"
                rounded
                outlined
                dense
                />
                <v-text-field 
                :type="showPassword ? 'text'  : 'password'" 
                label="Password"
                v-model="form.password"
                :rules="passwordRules"
                rounded
                outlined
                dense
                :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="showPassword = !showPassword"
                />
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="success" dark rounded to="auth" outlined>Login</v-btn>
                        <v-spacer></v-spacer>
                    <v-btn 
                        color="success" 
                         
                        rounded 
                        type="submit" 
                        @click="signUp" 
                        :disabled="!valid || loading">Sign up</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
    <v-snackbar
              v-model="snackbar"
              :color="snackbarColor"
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
export default {
    data(){
        return {
            loading: false,
            snackbarColor: '',
            snackbar: false,
            errorMessages: '',  
            valid: true,
            lazy: false,
            fullNameRules:[v => !!v || 'FullName is required'],
            emailRules:[v => !!v || 'Email is required'],
            phoneNumberRules: [v => !!v || 'Phone Number is required'],
            passwordRules: [v => !!v || 'Password is required'],
            showPassword: false,
            form:{}
        }
    },
    methods:{
       async signUp(){
           this.loading = true
            console.log({email: this.form.email, password:this.form.password})
            setTimeout(()=>{
                fetch('http://localhost:5050/api/users',{
                    method: "POST",
                    body: JSON.stringify(this.form),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                }).then((response)=>{
                    if(response.status === 200) {
                         this.snackbar = true
                        this.snackbarColor = 'success'
                        this.errorMessages = 'Account created, you can now login'
                        setTimeout(()=>{this.$router.push({path: '/auth'});},3000)
                    }

                    if(response.status === 400){
                        this.loading = false
                        this.snackbar = true
                        this.snackbarColor = 'red'
                        this.errorMessages = 'Validation Error'
                        return console.log('Validation Erro');
                    }
                    if(response.status === 401){
                        this.loading = false
                        this.snackbar = true
                        this.snackbarColor = 'warning'
                        this.errorMessages = 'Email already Exist try another Email'
                        return console.log('Email Exist');
                    }
                }).catch((err)=>{
                    this.loading = false
                    console.log(err)})
            }, 2000)
        }
    }
}
</script>