<template>
    <v-container>
        <v-card width="400" class="mx-auto mt-5 mb-5">
        <v-card-title>
        <h1 class="display-1">Login here</h1>
        </v-card-title>
        <v-card-text>
            <v-form @submit.prevent>
                <v-text-field 
                label="Username"
                v-model="form.username"
                prepend-inner-icon="mdi-account-circle"
                rounded
                outlined
                dense
                />
                <v-text-field 
                :type="showPassword ? 'text'  : 'password'" 
                label="Password"
                v-model="form.password"
                prepend-inner-icon="mdi-lock"
                rounded
                outlined
                dense
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                />
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="indigo lighten-1" dark rounded type="submit" @click="login">Login</v-btn>
                    
                        <v-spacer></v-spacer>
                        <router-link to="user">
                        <v-btn color="success" rounded text>Register</v-btn>
                    </router-link>

                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
    </v-container>
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