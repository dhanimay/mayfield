
<template lang='pug'>
  .section-login.flex-cc
    .login.row.flex-column.margin-0
      .title Login
      form(v-on:submit='sendCredentials')
        input(type='text', v-model='name', required, placeholder='name')
        input(type='text', v-model='password', required, placeholder='password')
        button.float-right(type='submit') Ok
</template>

<script lang='js'>
  import axios from 'axios'

  export default {
    data: function () {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      sendCredentials: function (event) {
        event.preventDefault()
        console.log(event)
        console.log('this: ', this)
        axios.post('/login',{
          name: this.name,
          password: this.password
        }).then(response => {

        })
      }      
    }
  }

</script>


<style lang='sass'>
  @import ../../sass/mixins

  .section-login
    width: 100%
    height: 100%
    padding: 1rem
    @include noisy-background(#a1b6b5)
    .login
      background-color: rgba(white, .4)
      border: 1px solid white
      box-shadow: 0 0 1px black
      border-radius: 5px
      min-width: 320px
      max-width: 600px
      .title
        border-bottom: 1px solid black
        padding: 1rem
        font-weight: 400
        font-size: 1.5rem
      form
        padding: 1rem
        input
          display: block
          background-color: transparent
          border: none
          border-bottom: 1px solid black
          outline: none
          margin: 0 auto 1rem
        button
          cursor: pointer
          width: 100px
          border-radius: 5px
          border: 1px solid black
          outline: none
          &:hover
            background-color: orange
            color: white

</style>  
