<template>
    <v-container>
        <v-row>
            <v-col cols="12" align="center">
                <v-form ref="form" v-model="valid">
                    <v-card elevation="6" color="blue lighten-3" style=" border-radius: 10px;">
                        <v-container>
                            <v-col cols="12" justify="center" align="center">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :elevation="hover ? 24 : 4"
                                        color=#FAFAFA style=" border-radius: 15px;">
                                            <v-container>
                                                <v-text-field v-model="User_Info.user_name"
                                                    label="Username"
                                                    :rules="usernameRules"
                                                    counter=true
                                                />
                                            </v-container>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="12" justify="center" align="center">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card :elevation="hover ? 24 : 4"
                                        color=#FAFAFA style=" border-radius: 15px;">
                                            <v-container>
                                                <v-text-field v-model="User_Info.password"
                                                    label="Password"
                                                    :type="showPassword ? 'text' : 'password'" 
                                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                    @click:append="showPassword = !showPassword"
                                                    counter=true
                                                    :rules="passwordRules"
                                                />
                                            </v-container>
                                    </v-card>
                                </v-hover>
                            </v-col>       
                            <v-btn color="success" @click="Submit(User_Info)" :disabled="!valid">
                                {{text}}
                            </v-btn>
                            <v-btn color="error" class="ml-4" @click="reset">
                                Reset form
                            </v-btn >
                        </v-container>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name:'UserForm',
    data:()=>({
        valid: false,
        showPassword: false,
        User_Info:{
            user_name:'',
            password:''
        },
        usernameRules: [
            v => !!v || 'Username required',
            v => (v && v.length <= 15) || 'The username must be less than 15 characters',
        ],
        passwordRules: [
            v => !!v || 'Password required',
            v => (v && v.length <= 20) || 'The password must be less than 20 characters',
        ]
    }),
    methods:{
        reset(){
            this.$refs.form.reset()
        }
    },
    props: ["Submit","text"]

}
</script>

<style>

</style>>