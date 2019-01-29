<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label for="">Blog Title:</label>
      <input v-model="blog.title" type="text" required>
      <label for="">Blog Content:</label>
      <textarea v-model.lazy="blog.content" v-on:keyup="handleCounter"></textarea>
      <span>{{blog.counter}}</span>
    </form>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{blog.content}}</p>
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
        counter : 100
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
</style>
