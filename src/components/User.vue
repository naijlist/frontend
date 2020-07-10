<template>
<div class="grey lighten-2">
    <v-container>
        <v-card width="400" class="mx-auto mt-5 mb-5" flat>
        <v-card-title>
        <p class="pl-4 pt-2 mb-0">Sign-up here</p>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form @submit.prevent>
                 <v-text-field 
                label="Full name"
                v-model="form.fullname"
                rounded
                outlined
                dense
                />
                 <v-text-field 
                label="Email"
                v-model="form.email"
                rounded
                outlined
                dense
                autocomplete="off"
                />
                 <v-text-field 
                label="Phone number"
                v-model="form.phone"
                rounded
                outlined
                dense
                />
                <v-text-field 
                :type="showPassword ? 'text'  : 'password'" 
                label="Password"
                v-model="form.password"
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
                    <v-btn color="success" dark rounded type="submit" @click="login">Sign up</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
    </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showPassword: false,
            form:{}
        }
    },
    methods:{
        login(){
            console.log({username: this.form.username, password:this.form.password})
        }
    }
}
</script>