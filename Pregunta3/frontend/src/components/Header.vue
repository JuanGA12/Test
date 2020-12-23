<template>
    <v-app-bar
      app
      fixed
      flat
      elevation="3"
      color="blue">
        <h1 style="color:white">
            <v-btn text color="white" @click="go_home">
            <h2>
                Test - Pregunta 3
            </h2>
            </v-btn>
        </h1>
        <v-spacer></v-spacer>
        <div v-if="currentUser.user_name">
            <v-menu bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="white--text" v-bind="attrs" v-on="on" dark>
                        {{currentUser.user_name}}
                    </v-btn>
                </template>
                <v-list dark>
                    <v-list-item @click="logoutUser">
                        <v-list-item-title> 
                            <v-icon small>
                                mdi-exit-to-app
                            </v-icon>
                            Log out
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div v-else>
            <v-btn  class="white--text" text to="/Login">Login</v-btn>
            <v-btn  class="white--text" text to="/Register">Register</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'Header',
    computed: {
        ...mapState(['currentUser'])
    },
    methods: {
      go_home(){
        this.$router.push('/');
      },
      logoutUser(){
        this.$store.dispatch("logoutUser");
        alert('Log out correct');
        this.$router.push('/');
        },
    }
}
</script>

<style>

</style>