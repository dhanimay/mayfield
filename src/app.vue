<template lang="pug">
  component(v-bind:is='currentView')
</template>

<script lang='js'>
  import Login from './components/login.vue'
  import axios from 'axios'

  export default {
    data: function () {
      return {
        currentView: 'Login'
      }
    },
    mounted: function () {
      console.log('hello yo!!!!!!')
    },
    components: {
      Login
    }
  }
</script>

<style lang="sass">
  
</style>