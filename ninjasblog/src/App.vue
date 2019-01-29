<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"> </component>
    </keep-alive>  
    <button v-on:click="handleFormNumberOne">Show One</button>
    <button v-on:click="handleFormNumbertwo">Show Two</button>
  </div>
</template>

<script>
import formOne from './components/formOne';
import formTwo from './components/formTwo';

export default {
  components : {
    'form-one' : formOne,
    'form-two' : formTwo
  },
  data() {
    return {
      component : 'form-one'
    }
  },
  methods: {
    handleFormNumberOne: function(){
      this.component = 'form-one'
    },
    handleFormNumbertwo: function(){
      this.component = 'form-two'
    }
  }
}
</script>

<style>
  
</style>
