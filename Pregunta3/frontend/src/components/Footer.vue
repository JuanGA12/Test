<template>
  <v-footer
    color=blue
  >
    <v-container fluid>
      <v-row no-gutters class="white--text">
        <v-col cols="12" align="center">
          <p class="body-2">Juan Galvez</p>
        </v-col>
        
      </v-row>
      <v-divider color="white"/>
      <v-row no-gutters class="white--text pt-3 pb-0">
        <v-col cols="12" align="center">
          <p class="body-2">{{new Date().getFullYear()}}
            <strong>
              Lima - Perú
            </strong>
          </p>
        </v-col>

      </v-row>
    </v-container> 
  </v-footer>
</template>

<script>
export default {
     name: 'Footer',
}
</script>

<style>

</style>