<template>
   <div id="add-blog">
      <h2>Add a new blog post</h2>
      <form>
         <label for="">Blog Title:</label>
         <input v-model="blog.title" type="text" required>
         <label for="">Blog Content:</label>
         <textarea v-model.lazy="blog.content" v-on:keyup="handleCounter"></textarea>
         <span>{{blog.counter}}</span>
         <div id="checkboxes">
            <label for="">Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories">
            <label for="">Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories">
            <label for="">Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories">
            <label for="">Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories">
         </div>
      </form>
   <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{blog.content}}</p>
      <p>Blog Categories :</p>
      <ul>
         <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
      </ul>
   </div>
   </div>
</template>

<script>

export default {
  data() {
    return {
      blog : {
        title : "",
        content: "",
        counter : 100,
        categories: []
      }
    }
  },
  methods: {
    handleCounter : function(){
      let textarea = document.querySelector("textarea");
      if(textarea.value !== ""){
        // console.log(textarea.value.length);
        this.blog.counter --;
      }
    
    }
  }
}
</script>

<style>
  #add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
   display: inline-block;
   margin-right: 30px;
}
#checkboxes label {
   display: inline-block;
}

</style>
