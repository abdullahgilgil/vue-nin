<template>
   <div>
      <slot name="title"></slot>

      <h1>I am the form helper...</h1>
      
      <slot name="desc"></slot>
   </div>
</template>

<script>

export default {
 
  data() {
    return {
     
    }
  }
}
</script>

<style scoped>
   h1 {
      color: brown;
   }
   h2 {
      color: blueviolet;
   }
   p{
      color: rgb(105, 105, 34);
      text-align: center;
   }
</style>
