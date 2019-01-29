<template>
<div>
  <form-helper>
    <h2 slot="title">{{ title }}</h2>
    <p slot="desc">I am a slot paragraph</p>
  </form-helper>
  <hr>
  <app-form>
    <div slot="form-header">
      <h3>This is title of the form</h3>
      <p>Information about the form</p>
    </div>

    <div slot="form-fields">
      <div>
        <label for="">Name</label>
        <input type="text" placeholder="Name" required>
      </div>
      <div>
        <label for="">Password</label>
        <input type="password" placeholder="Password" required>
      </div>
    </div>

    <div slot="form-controls">
      <button v-on:click='handleSubmit'>Submit</button>
    </div>
  </app-form>
</div>
</template>

<script>
import formHelper from './components/formHelper.vue';
import Form from './components/Form'
export default {
  components : {
    'form-helper' : formHelper,
    'app-form' : Form
  },
  data() {
    return {
      title : "I am a dynamic slot header from data"
    }
  },
  methods: {

  }
}
</script>

<style>
  
</style>
