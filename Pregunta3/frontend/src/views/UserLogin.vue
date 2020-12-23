<template>
    <v-container>
        <h1>
            Login
        </h1>
        <UserForm :Submit="LoginUser" text="Login"/>
    </v-container>
</template>

<script>
import UserForm from '../components/UserForm'
export default {
    components:{
        UserForm
    },
    methods: {
        async LoginUser(User_Info){
            let response = await this.$store.dispatch('LoginUser',User_Info);
            if(response.data){
                alert(response.data.message+ ' ' + response.data.user.user_name);
                this.$router.push('/After');
            }
            else{
                alert(response.response.data.message)
            } 
        }   
    }
}
</script>

<style>

</style>