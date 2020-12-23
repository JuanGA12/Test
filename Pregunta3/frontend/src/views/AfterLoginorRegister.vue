<template>
    <div>
        <h5>
            Welcome {{currentUser.user_name}}
        </h5>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'After',
    computed: {
        ...mapState(['currentUser'])
    },
}
</script>

<style>

</style>