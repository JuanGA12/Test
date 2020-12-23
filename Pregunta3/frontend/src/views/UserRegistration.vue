<template>
    <v-container>
        <h1>
            Register
        </h1>
        <UserForm :Submit="RegisterUser" text="Register"/>
    </v-container>
</template>

<script>
import UserForm from '../components/UserForm'
export default {
    components:{
        UserForm
    },
    methods: {
        async RegisterUser(User_Info){
            console.log(User_Info)
            let response = await this.$store.dispatch('RegisterUser',User_Info);
            console.log(response)
            if(response.data){
                alert('Thank you for registering ' + response.data.user_name);
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